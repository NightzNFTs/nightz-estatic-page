import './Header.css';
import Image from 'next/image'

const Header = () => {
  
  return (
      <header className="header-style flex justify-between items-center rounded-xl mx-3 my-2 sticky top-2 xl:top-2 z-50 bg-white bg-opacity-20" >
        <div className=" flex justify-end ml-4 mr-4 space-x-4 xl:flex-row ">
            <a href="https://x.com/leanlabiano" target="_blank" class="flex items-center rounded-lg bg-white bg-opacity-5">
              <Image  src="/TwitterX.svg" alt="me" width="48" height="48" />
            </a>
            <a href="https://www.linkedin.com/in/leanlabiano/" target="_blank"  class="flex items-center rounded-lg bg-white bg-opacity-5">
              <Image  src="/Linkedin.svg" alt="me" width="48" height="48" />
            </a>
        </div>

        <h2 className=" font-semibold mr-4 text-2xl text-black">Nightz</h2>
      </header>
  );
};
export default Header;
//top-[100svh]