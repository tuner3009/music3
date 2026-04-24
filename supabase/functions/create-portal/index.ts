import { serve } from 'https://deno.land/std/http/server.ts';
serve(() => new Response(JSON.stringify({ url: 'https://billing.stripe.com/session' }), { headers: { 'Content-Type': 'application/json' } }));
