import Image from 'next/image'
import Links from "../components/sections/links"

export default function Home() {
  return (
    <main className="flex  flex-col  h-screen justify-between items-start xl:p-20 p-4">
      <div>
        <h1 className="flex xl:text-[200px] text-7xl text-white" style={{
          textShadow:
            "8px 0 #003878, -8px 0 #003878, 0 8px #003878, 0 -8px #003878, 8px 8px #003878, -8px -8px #003878, 8px -8px #003878, -8px 8px #003878",
          }}>COMING
        </h1>
        <h1 className="flex xl:text-[200px] text-7xl text-white" style={{
          textShadow:
            "8px 0 #003878, -8px 0 #003878, 0 8px #003878, 0 -8px #003878, 8px 8px #003878, -8px -8px #003878, 8px -8px #003878, -8px 8px #003878",
        }}>
          SOON!
        </h1>

      </div>
      <a href="https://www.x.com" target="_blank" className=''>
        <Image
          src="/followButton.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </a>
      
    </main>
  )
}
