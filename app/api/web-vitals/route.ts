// app/api/web-vitals/route.ts
import { NextResponse } from "next/server";

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID!;
const API_SECRET = process.env.GA4_API_SECRET!;

export async function POST(req: Request) {
  const metric = await req.json();

  // GA4 Measurement Protocol endpoint
  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`;

  const payload = {
    client_id: metric.id, // could also use a hashed user id
    events: [
      {
        name: metric.name,
        params: {
          value: metric.value,
          web_vitals_label: metric.label,
          web_vitals_delta: metric.delta,
          page_path: metric.url,
        },
      },
    ],
  };

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return NextResponse.json({ ok: true });
}
