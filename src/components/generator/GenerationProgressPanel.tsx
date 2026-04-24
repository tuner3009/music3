import { Card } from '../ui/Card';
export function GenerationProgressPanel(){return <Card className='p-4 space-y-3'>
  <h3 className='font-semibold'>Generating 2 versions</h3>
  <div className='h-16 rounded-xl bg-gradient-to-r from-secondary/30 via-primary/40 to-glow/30'/>
  {['Analyzing prompt','Crafting lyrics','Composing music','Finalizing mix & master'].map((s,i)=><div key={s} className='flex justify-between text-sm text-gray-300'><span>{s}</span><span>{i<2?'✓':'○'}</span></div>)}
  <div className='rounded-xl bg-white/5 p-3 text-sm'>Tip: Add more detail to your prompt for better results.</div>
</Card>}
