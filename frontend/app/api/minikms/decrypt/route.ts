export async function POST(req: Request) {
  const { keyId, ciphertext, version } = await req.json();

  const base = process.env.MINIKMS_URL ?? "https://minikms.mjmade.tech";

  const res = await fetch(`${base}/v1/keys/${keyId}/decrypt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ciphertext: ciphertext,
      additionalData: "",
      version: version,
    }),
  });
  const json = await res.json();
  if (json.plaintext) {
    json.plaintext = Buffer.from(json.plaintext, "base64").toString("utf-8");
  }
  return Response.json(json);
}
