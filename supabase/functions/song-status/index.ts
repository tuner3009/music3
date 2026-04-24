import { serve } from 'https://deno.land/std/http/server.ts';

serve(() =>
  new Response(JSON.stringify({ status: 'processing' }), {
    headers: { 'Content-Type': 'application/json' },
  }),
);
