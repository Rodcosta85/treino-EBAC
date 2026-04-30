import Cycling from "./../../assets/cycling.png"

const Header = () => {
  return (
    <header className='flex justify-start items-center gap-4 
      w-full pt-2 pb-2 pl-4 pr-4
      border border-b-white'>
        <img src={Cycling} alt="" className='w-10 h-10'/>
        <h1 className='text-white text-[30px]'>TriTask</h1>
      </header>
  )
}

export default Header