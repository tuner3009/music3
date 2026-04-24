import { PieChart, Pie, Cell } from 'recharts';
import { Card } from '../ui/Card';
export function CreditsUsageCard(){const data=[{name:'used',v:8000},{name:'left',v:4450}];return <Card className='p-3'><h3 className='font-semibold mb-2'>Credits Usage</h3><PieChart width={200} height={120}><Pie data={data} dataKey='v' innerRadius={30} outerRadius={45}>{data.map((_,i)=><Cell key={i} fill={i? '#1f2937':'#8b5cf6'}/>)}</Pie></PieChart></Card>}
