import type { GeneratePayload } from './types';

export async function generateWithSuno(payload: GeneratePayload) {
  const res = await fetch('/functions/v1/generate-song', { method: 'POST', body: JSON.stringify(payload) });
  return res.json();
}
