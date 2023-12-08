import Image from 'next/image'
import Links from "../components/sections/links"

export default function Home() {
  return (
    <main className="flex  flex-col h-screen justify-between items-start xl:pl-20  p-4 relative">
      <div>
        <h1 className="flex xl:text-[200px] text-7xl text-white titulo" >COMING
        </h1>
        <h1 className="flex xl:text-[200px] text-7xl text-white titulo" >
          SOON!
        </h1>

      </div>
      <div className=''>
        <a href="https://www.x.com" target="_blank" className='fixed bottom-0 left-[-70px] ml-[-10] mb-10  '>
          <Image
            src="/follow.png"
            width={700}
            height={500}
            alt="Picture of the author"
          />
        </a>
      </div>
      
    </main>
  )
}
