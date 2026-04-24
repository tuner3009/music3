import { Download, Heart, Play, Share2 } from 'lucide-react';
import { assets } from '../../lib/assets';
import { Card } from '../ui/Card';
export function SongResultCard({title}:{title:string}){return <Card className='p-3 flex items-center gap-3'>
<img src={assets.covers.default} className='h-20 w-20 rounded-xl object-cover' alt={title}/>
<button className='h-12 w-12 rounded-full bg-primary/70 grid place-items-center'><Play size={18}/></button>
<div className='flex-1'><div className='font-semibold'>{title}</div><div className='text-sm text-gray-400'>Pop • Happy • English • Male Vocal</div><div className='h-2 mt-2 rounded bg-gradient-to-r from-primary/80 to-white/10'/></div>
<div className='flex gap-2 text-gray-300'><Download size={16}/><Heart size={16}/><Share2 size={16}/></div>
</Card>}
