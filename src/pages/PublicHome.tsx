import { Link } from 'react-router-dom';
import { brand } from '../lib/brand';
export function PublicHome(){return <div className='min-h-screen p-10'><h1 className='text-5xl font-bold mb-3'>{brand.name}</h1><p className='text-xl text-gray-300 mb-6'>{brand.tagline}</p><Link to='/en/create' className='rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 inline-block'>Open Studio</Link></div>}
