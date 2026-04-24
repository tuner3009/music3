import { Card } from '../ui/Card';
import { personas } from '../../lib/personas';
export function TopPersonasCard(){return <Card className='p-3'><h3 className='font-semibold mb-2'>Top Personas</h3><div className='grid grid-cols-3 gap-2'>{personas.map(p=><div key={p.name} className='rounded-lg bg-white/5 p-2 text-xs'>{p.name}</div>)}</div></Card>}
