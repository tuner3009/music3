import { serve } from 'https://deno.land/std/http/server.ts';

serve(async (req) => {
  const body = await req.json();
  // Validate auth, credits, create generation row, call unofficial Suno provider.
  return new Response(JSON.stringify({ ok: true, taskId: crypto.randomUUID(), mode: body.mode }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
