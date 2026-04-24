import { WandSparkles } from 'lucide-react';
import { Card } from '../ui/Card';
import { buildPrompt } from '../../lib/prompt-builder';

export function GeneratorPanel(){
  const preview=buildPrompt({prompt:'A romantic pop song about first love',genre:'Pop',persona:'Romantic Lover',voice:'Male Voice',mood:'Emotional',language:'English'});
  return <Card className='p-6 space-y-4'>
    <h1 className='text-4xl font-bold'>Create <span className='neon-text'>AI Music</span> in Any Language</h1>
    <p className='text-gray-300'>Turn your ideas into studio-quality songs in seconds.</p>
    <div className='grid grid-cols-3 gap-2 text-sm'>
      {['Text to Song','Custom Lyrics','Instrumental'].map(t=><button key={t} className={`rounded-xl border border-white/10 py-2 ${t==='Text to Song'?'bg-primary/20 text-primary':''}`}>{t}</button>)}
    </div>
    <textarea className='w-full h-36 rounded-2xl glass p-4 bg-transparent' placeholder='Describe the song you want to create...'/>
    <div className='grid md:grid-cols-6 gap-2 text-sm'>{['Genre','Persona','Voice','Mood','Language','Model'].map(s=><select key={s} className='glass rounded-xl px-3 py-2 bg-transparent'><option>{s}</option></select>)}</div>
    <details className='text-sm text-gray-300'><summary>Advanced prompt preview</summary><p className='mt-2'>{preview}</p></details>
    <button className='w-full rounded-2xl bg-gradient-to-r from-primary to-secondary py-3 shadow-glow font-semibold flex items-center justify-center gap-2'><WandSparkles size={18}/>Generate <span className='text-xs rounded-full bg-black/30 px-2 py-1'>20</span></button>
  </Card>
}
