export async function POST(req: Request) {
  const { keyId, plaintext } = await req.json();

  const base64Plaintext = Buffer.from(plaintext, "utf-8").toString("base64");

  const base = process.env.MINIKMS_URL ?? "https://minikms.mjmade.tech";
  console.log(JSON.stringify({ plaintext: plaintext, additionalData: "" }));
  const res = await fetch(`${base}/v1/keys/${keyId}/encrypt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ plaintext: base64Plaintext, additionalData: "" }),
  });
  const json = await res.json();
  console.log(json);
  return Response.json(json);
}
