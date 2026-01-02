import Dog from '/dog-food.jpg'

const index = () => {
  return (
    <div className='w-full h-100 md:h-150 lg:h-150 relative z-80'>
        <img src={Dog} alt="" className='w-full h-full z-60' />
    </div>
  )
}

export default index