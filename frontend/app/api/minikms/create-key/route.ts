export async function POST(req: Request) {
  const { name, algorithm } = await req.json();
  const base = process.env.MINIKMS_URL ?? "https://minikms.mjmade.tech";

  const res = await fetch(`${base}/v1/keys`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, algorithm }),
  });
  const json = await res.json();
  return Response.json(json);
}
