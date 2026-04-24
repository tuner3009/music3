import { GeneratorPanel } from '../components/generator/GeneratorPanel';
import { GenerationProgressPanel } from '../components/generator/GenerationProgressPanel';
import { SongResultCard } from '../components/audio/SongResultCard';
import { CreditsUsageCard } from '../components/dashboard/CreditsUsageCard';
import { PopularGenresCard } from '../components/dashboard/PopularGenresCard';
import { TopPersonasCard } from '../components/dashboard/TopPersonasCard';

export function CreatePage(){return <div className='p-4 grid xl:grid-cols-[1fr_320px] gap-4'>
  <div className='space-y-4'>
    <GeneratorPanel/>
    <section className='space-y-3'><h2 className='text-2xl font-semibold'>Your Generations</h2><SongResultCard title='First Time'/><SongResultCard title='Inima Mea'/></section>
  </div>
  <div className='space-y-4'><GenerationProgressPanel/><CreditsUsageCard/><PopularGenresCard/><TopPersonasCard/></div>
</div>}
