import { AudioWaveform, Compass, LayoutDashboard, Library, Settings, Sparkles, Gem } from 'lucide-react';
import { assets } from '../../lib/assets';
const items=[['Dashboard',LayoutDashboard],['Create',Sparkles],['Library',Library],['Explore',Compass],['Pricing',Gem],['Settings',Settings]];
export function Sidebar(){return <aside className='hidden lg:flex w-64 flex-col border-r border-white/10 p-4 gap-4'>
  <img src={assets.brand.logoFull} className='h-8 w-fit' alt='Muzora AI'/>
  {items.map(([label,Icon])=><button key={label} className={`flex items-center gap-3 rounded-xl p-3 text-left ${label==='Create'?'bg-primary/20 text-primary shadow-glow':'hover:bg-white/5'}`}><Icon size={18}/>{label}</button>)}
  <div className='mt-auto glass rounded-2xl p-4'><p className='font-semibold'>Go Premium</p><p className='text-xs text-gray-400 mb-3'>Unlock commercial rights and faster generations.</p><button className='w-full rounded-xl bg-gradient-to-r from-primary to-glow py-2'>Upgrade Now</button></div>
  <div className='glass rounded-2xl p-3'><div className='flex items-center gap-2 text-sm'><AudioWaveform size={16}/>Sunset Drive</div><div className='h-1 rounded bg-white/20 mt-2'/></div>
</aside>}
