import React from 'react'

interface Product {
  id: number,
  first: string,
  price: string,
  message: string
}

interface HeaderProps {
    handleToggle: () => void,
    toggleMenu: boolean,
    products: Product[]
}

const Header:React.FC<HeaderProps> = ({ handleToggle, toggleMenu, products }) => {
    return (
        <div className='w-fit h-fit flex flex-col justify-end relative'>
            <button
                onClick={handleToggle}
                className='w-8 h-8 border-black border rounded-2xl cursor-pointer self-end'>
                {toggleMenu ? 'X' : '0'}
            </button>
            <div className={`w-30 p-4 flex flex-col gap-2 transition-all duration-200 rounded-2xl border-[0.5px] border-gray-400 bg-white absolute top-8 right-0 z-99
              ${toggleMenu ? 'opacity-100 translate-y-4' : 'opacity-0 pointer-events-none'}`
            }>
                {products.map((product: any, id: number) => (
                    <a
                        key={id}
                        href={(product.id).toString()}>{product.first}</a>
                ))}
            </div>
        </div>
    )
}

export default Header