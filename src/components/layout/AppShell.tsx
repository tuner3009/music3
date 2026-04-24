import { Sidebar } from './Sidebar';
import { TopHeader } from './TopHeader';
import { Outlet } from 'react-router-dom';
export function AppShell(){return <div className='min-h-screen flex'><Sidebar/><main className='flex-1'><TopHeader/><Outlet/></main></div>}
