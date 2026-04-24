import { Bell, Coins, Search } from 'lucide-react';
export function TopHeader(){return <header className='flex items-center gap-3 p-4 border-b border-white/10'>
<div className='flex-1 glass rounded-xl px-3 py-2 flex items-center gap-2'><Search size={16}/><input className='bg-transparent outline-none w-full' placeholder='Search songs, prompts, styles...'/><span className='text-xs text-gray-400'>⌘K</span></div>
<div className='glass rounded-xl px-3 py-2 flex items-center gap-2 text-gold'><Coins size={16}/>12,450 Credits</div>
<button className='glass rounded-xl p-2'><Bell size={16}/></button>
<div className='glass rounded-xl px-3 py-2'>Alexandru</div>
</header>}
