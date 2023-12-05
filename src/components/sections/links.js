import "./Sections.css";
// import { Audiowide  } from 'next/font/google'
// const audiowide = Audiowide({
//   weight: '400',
//   subsets: ['latin']
  
// })

const links = () => {
    
  
  return (
      <section className='flex flex-col items-center gap-0  w-full' >
        <div>
          <h2 className='font-semibold ml-4 text-6xl text-black mr-4 mb-20'>Maintance</h2>
        </div>
        <div className='grid grid-cols-2  xl:grid-cols-3 xl:gap-4  gap-0 xl:gap-16 w-full mb-20 '> 
          <div className="flex justify-start">
            <a href="#" class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0">
              <h5 class="block mb-2 text-2xl font-bold tracking-tight">Docs</h5>
              <p class="font-normal">Get technical view of own protocol to understand how to use</p>
            </a>
          </div>
          <div className="flex justify-center">
            <a href="#" class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0">
              <h5 class="mb-2 text-2xl font-bold tracking-tight">Twitter</h5>
              <p class="font-normal">A own social media, get notified when the web go back</p>
            </a>
          </div>
          <div className="flex justify-end">
            <a href="#" class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0">
              <h5 class="mb-2 text-2xl font-bold tracking-tight">Casa Akawa</h5>
              <p class="font-normal">Casa Akawa instagram, the firt house in protocol</p>
            </a>
          </div>
            
          
        </div>
      </section>
  );
};
export default links;