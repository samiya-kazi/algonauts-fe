import { Handle, Position } from 'reactflow';


export default function MoveAndTurnNode({ data } : {data : {times : number, label: string}}) {

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className='w-auto h-auto bg-[#FFFDD1] border-2 border-black py-6 px-2 border-solid'>
        <label htmlFor="text" className='text-4 text-black text-2xl'>{data.label}</label>
        <div className='pt-2'>
          <span className=' text-black text-xl'>for </span>
          <input type="number" className='num-input' onChange={(e) => data.times = Number(e.target.value)} />
          <span className=' text-black text-xl'> times</span>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}