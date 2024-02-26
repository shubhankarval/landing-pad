import Image from 'next/image';

export default function Button() {
  return (
    <button className='mt-8 font-sato font-bold flex items-center gap-2 px-10 py-3 bg-[#CBFC01] text-[#151515]'>
        Get Started
        <Image src='/finance/button-arrow.svg' alt="" height={50} width={20}/>
    </button>
  )
}
