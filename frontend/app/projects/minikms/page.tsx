"use client";
import { useState } from "react";

export default function MiniKMSPage() {
  const [keyName, setKeyName] = useState("");
  const [algorithm, setAlgorithm] = useState("AES-256-GCM");
  const [encryptKeyId, setEncryptKeyId] = useState("");
  const [decryptKeyId, setDecryptKeyId] = useState("");

  const [plaintext, setPlaintext] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [keyVersion, setKeyVersion] = useState(1);

  const [responses, setResponses] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);
  const [ciphertextError, setCiphertextError] = useState("");

  const [activePanel, setActivePanel] = useState<"encrypt" | "decrypt">(
    "encrypt",
  );

  async function call(route: string, body: any) {
    console.log(route, body);
    setLoading(true);

    try {
      const resp = await fetch(`/api/minikms/${route}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const json = await resp.json();
      console.log(json);
      setResponses((prev) => [
        { route, body, json, timestamp: new Date().toLocaleString() },
        ...prev,
      ]);
    } catch (err: any) {
      setResponses((prev) => [
        {
          route,
          body,
          json: { error: err.message },
          timestamp: new Date().toISOString(),
        },
        ...prev,
      ]);
    } finally {
      setLoading(false);
    }
  }

  function isBase64(str: string) {
    try {
      return btoa(atob(str)) === str;
    } catch {
      return false;
    }
  }

  function renderValue(key: string, value: any) {
    const isCopyable =
      key.toLowerCase().includes("keyid") ||
      key.toLowerCase().includes("ciphertext") ||
      key.toLowerCase().includes("plaintext") ||
      key.toLowerCase().includes("encrypteddek") ||
      key.toLowerCase().includes("plaintextdek");

    if (typeof value === "string" && isCopyable) {
      return (
        <div className="flex items-center">
          <span className="font-mono break-all">{value}</span>
          <CopyButton value={value} />
        </div>
      );
    }

    return <span className="font-mono break-all">{String(value)}</span>;
  }

  function CopyButton({ value }: { value: string }) {
    return (
      <button
        onClick={() => navigator.clipboard.writeText(value)}
        className="ml-2 text-xs underline text-textMuted hover:text-text"
      >
        copy
      </button>
    );
  }

  return (
    <div className="mx-auto max-w-3xl py-16 px-6">
      {/* Header */}
      <h1 className="text-4xl text-primary font-bold mb-4">miniKMS</h1>
      <p className="text-lg text-textMuted  mb-10">
        A lightweight, developer‑friendly Key Management Service inspired by AWS
        KMS. Built in Go with a clean, modular architecture and designed to
        provide a realistic KMS experience for local development, CI pipelines,
        and integration testing.
      </p>
      <p className="text-lg text-textMuted  mb-10">
        This page includes a live demo of the core cryptographic operations so
        you can interact with the system directly.
      </p>
      {/* Project Overview */}
      <section className="mb-12 leading-relaxed">
        <h2 className="text-2xl text-text font-semibold mb-3">Overview</h2>
        <p className="leading-relaxed text-textMuted ">
          miniKMS provides secure key creation, envelope encryption, and data
          decryption through a simple HTTP API and SDK. It’s designed as a
          portfolio‑grade demonstration of backend engineering, cryptography
          fundamentals, and production‑style infrastructure.
        </p>
        <br />
        <p className="leading-relaxed text-textMuted ">
          miniKMS implements the essential building blocks of a real Key
          Management Service:
        </p>
        <ul className="list-disc ml-6 mt-4 text-textMuted space-y-1">
          <li>AES‑GCM encryption engine</li>
          <li>Versioned key storage with deterministic behavior</li>
          <li>Envelope encryption (GenerateDataKey / DecryptDataKey)</li>
          <li>Key lifecycle operations (create, rotate, enable, disable)</li>
          <li>Transport‑agnostic core with both HTTP and gRPC APIs</li>
          <li>Typed SDKs for Go, Node, and Python</li>
        </ul>
        <br />
        <p className="leading-relaxed text-textMuted ">
          It’s intentionally minimal, fully self‑contained, and designed to be
          easy to run anywhere without requiring AWS, GCP, Azure, or Vault.
        </p>
        <br />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Live Demo</h2>
        <p className=" mb-6">
          Try the core miniKMS operations directly from your browser. This
          environment is intended for demonstration purposes only. Requests are
          rate‑limited and data is cleared frequently.
        </p>

        {/* Create Key */}
        <div className="border rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Create Key</h3>

          <div className="space-y-4">
            <input
              className="w-full border text-slate-800 rounded px-3 py-2"
              placeholder="Key name"
              value={keyName}
              onChange={(e) => setKeyName(e.target.value)}
            />

            <select
              className="w-full border text-slate-800 rounded px-3 py-2"
              value={algorithm}
              onChange={(e) => setAlgorithm(e.target.value)}
            >
              <option value="AES-256-GCM">AES‑256‑GCM</option>
            </select>

            <button
              onClick={() => call("create-key", { name: keyName, algorithm })}
              className="bg-black text-white px-4 py-2 rounded hover:bg-primary hover:opacity-80 transition-all duration-300 ease-out"
            >
              Create Key
            </button>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          {/* Encrypt Panel */}
          <div
            className={`
      border rounded-lg p-6 transition-all duration-300
      ${activePanel === "encrypt" ? "w-[80%]" : "w-[20%] opacity-60 cursor-pointer hover:opacity-100 hover:scale-[1.02] transition-all duration-200"}
    `}
            onClick={() =>
              activePanel !== "encrypt" && setActivePanel("encrypt")
            }
          >
            <h3 className="text-xl font-semibold mb-4">Encrypt</h3>

            {activePanel === "encrypt" && (
              <div className="space-y-4">
                <input
                  className="w-full border rounded text-slate-800 px-3 py-2"
                  placeholder="Key ID"
                  value={encryptKeyId}
                  onChange={(e) => setEncryptKeyId(e.target.value)}
                />

                <textarea
                  className="w-full border rounded text-slate-800 px-3 py-2"
                  placeholder="Plaintext"
                  value={plaintext}
                  onChange={(e) => setPlaintext(e.target.value)}
                />

                <button
                  onClick={() =>
                    call("encrypt", { keyId: encryptKeyId, plaintext })
                  }
                  className="bg-black text-white px-4 py-2 rounded hover:bg-primary hover:opacity-80 transition-all duration-300 ease-out"
                >
                  Encrypt
                </button>
              </div>
            )}
          </div>

          {/* Decrypt Panel */}
          <div
            className={`
      border rounded-lg p-6 transition-all duration-300
      ${activePanel === "decrypt" ? "w-[80%]" : "w-[20%] opacity-60 cursor-pointer hover:opacity-100 hover:scale-[1.02] transition-all duration-200"}
    `}
            onClick={() =>
              activePanel !== "decrypt" && setActivePanel("decrypt")
            }
          >
            <h3 className="text-xl font-semibold mb-4">Decrypt</h3>

            {activePanel === "decrypt" && (
              <div className="space-y-4">
                <input
                  className="w-full border text-slate-800 rounded px-3 py-2"
                  placeholder="Key ID"
                  value={decryptKeyId}
                  onChange={(e) => setDecryptKeyId(e.target.value)}
                />

                <textarea
                  className={`
    w-full border rounded text-slate-800 px-3 py-2
    ${ciphertextError ? "border-red-500 border-4" : ""}
  `}
                  placeholder="Ciphertext (Base64)"
                  value={ciphertext}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCiphertext(value);

                    if (value.trim() === "") {
                      setCiphertextError("");
                      return;
                    }

                    if (!isBase64(value)) {
                      setCiphertextError("Ciphertext must be valid Base64");
                    } else {
                      setCiphertextError("");
                    }
                  }}
                />
                {ciphertextError && (
                  <p className="text-red-500 text-sm">{ciphertextError}</p>
                )}

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div className="">
                    <label className="mr-3 text-l font-semibold ">
                      Key Version:
                    </label>
                    <input
                      className="border text-slate-800 rounded px-3 py-2 w-16"
                      value={keyVersion}
                      inputMode="numeric"
                      onChange={(e) => setKeyVersion(parseInt(e.target.value))}
                    />
                  </div>
                  <button
                    disabled={!!ciphertextError}
                    onClick={() =>
                      call("decrypt", {
                        keyId: decryptKeyId,
                        ciphertext,
                        version: keyVersion,
                      })
                    }
                    className={`
                     bg-black text-white px-4 py-2 rounded hover:bg-primary hover:opacity-80 transition-all duration-300 ease-out ${
                       ciphertextError ? "opacity-50 cursor-not-allowed" : ""
                     }`}
                  >
                    Decrypt
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Response Viewer */}
        <div className="border rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Responses</h3>
            <button
              onClick={() => setResponses([])}
              className="text-sm underline text-textMuted hover:text-text"
            >
              Clear
            </button>
          </div>

          <div className="max-h-80 overflow-y-auto space-y-4 pr-2">
            {loading && (
              <pre className="bg-neutral-900 text-neutral-100 p-4 rounded text-sm">
                Loading...
              </pre>
            )}

            {responses.length === 0 && !loading && (
              <p className="text-textMuted">No responses yet.</p>
            )}

            {responses.map((r, i) => (
              <div
                key={i}
                className="bg-neutral-900 text-neutral-100 p-4 rounded text-sm"
              >
                <p className="text-textMuted text-xs mb-2">
                  {r.timestamp} — <span className="font-mono">{r.route}</span>
                </p>
                <div className="space-y-1">
                  {Object.entries(r.json).map(([key, value]) => (
                    <div key={key} className="flex">
                      <span className="text-textMuted mr-2">{key}:</span>
                      {renderValue(key, value)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
