import Pets from '/pets.jpg'

const index = () => {
  return (
    <div className='w-full h-100 md:h-150 lg:h-150 relative z-80'>
      <img src={Pets} alt="" className='w-full h-full z-60 object-cover' />
      <div className='flex items-center justify-center w-full h-full bg-transp-black absolute top-0 left-0 z-90'>
        <h1 className='font-bold text-white text-center text-[24px] md:text-[40px] lg:text-[64px] w-[60%]'>
          Tudo o que o seu melhor amigo precisa, em um só lugar
        </h1>
      </div>
    </div>
  )
}

export default index