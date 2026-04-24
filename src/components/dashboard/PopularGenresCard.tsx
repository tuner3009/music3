import { Card } from '../ui/Card';
import { genres } from '../../lib/genres';
export function PopularGenresCard(){return <Card className='p-3'><h3 className='font-semibold mb-2'>Popular Genres</h3><div className='flex flex-wrap gap-2'>{genres.map(g=><span key={g} className='rounded-lg bg-white/10 px-3 py-1 text-sm'>{g}</span>)}</div></Card>}
