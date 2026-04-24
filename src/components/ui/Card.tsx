import { type HTMLAttributes } from 'react';
export function Card(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`glass rounded-2xl ${props.className ?? ''}`} />;
}
