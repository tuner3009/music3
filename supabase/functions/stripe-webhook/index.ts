import { serve } from 'https://deno.land/std/http/server.ts';
serve(() => new Response(JSON.stringify({ received: true }), { headers: { 'Content-Type': 'application/json' } }));
