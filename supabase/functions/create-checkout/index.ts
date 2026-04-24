import { serve } from 'https://deno.land/std/http/server.ts';
serve(() => new Response(JSON.stringify({ url: 'https://checkout.stripe.com/pay/cs_test' }), { headers: { 'Content-Type': 'application/json' } }));
