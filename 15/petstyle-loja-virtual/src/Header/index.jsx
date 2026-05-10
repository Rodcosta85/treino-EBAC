import { useState } from "react"

const index = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(prevState => !prevState)
    }


    return (
        <div className="flex justify-center items-center w-full h-20 p-4 bg-linear-to-b from-blue-200 to-blue-400">
            <div className="w-full md:max-w-276 lg:max-w-276 flex items-center justify-between">
                <h1 className="text-[24px] text-white">
                    <span className="font-bold text-[32px] text-white regular">PET</span>
                    &style
                </h1>
                <div className="relative w-fit h-fit flex flex-col md:hidden lg:hidden">
                    <button
                        onClick={handleToggle}
                        className="w-12 h-9 p-2 flex rounded-[5px] flex-col gap-1">
                        <div className="w-full h-2.5 bg-white rounded-[5px]"></div>
                        <div className="w-full h-2.5 bg-white rounded-[5px]"></div>
                        <div className="w-full h-2.5 bg-white rounded-[5px]"></div>
                    </button>
                    <div className={`${toggleMenu ? 'flex flex-col gap-4' : 'hidden'} absolute top-10 right-0 z-99 w-45 h-fit p-4 bg-white rounded-[5px]`}>
                        <a
                            href="#produtos"
                            className="text-center font-medium p-1 hover:bg-gray-200 rounded-[5px] transition duration-300 ease-in-out">
                            Produtos
                        </a>
                        <a
                            href="#depoimentos"
                            className="text-center font-medium p-1 hover:bg-gray-200 rounded-[5px] transition duration-300 ease-in-out">
                            Depoimentos
                        </a>
                        <a
                            href="#contato"
                            className="text-center font-medium p-1 hover:bg-gray-200 rounded-[5px] transition duration-300 ease-in-out">
                            Contato
                        </a>
                    </div>
                </div>
                <div className="hidden md:flex lg:flex gap-8 w-fit h-fit">
                    <a
                        href="#produtos"
                        className="text-white text-center font-medium p-1 hover:underline rounded-[5px] cursor-pointer">
                        Produtos
                    </a>
                    <a
                        href="#depoimentos"
                        className="text-white text-center font-medium p-1 hover:underline rounded-[5px] cursor-pointer">
                        Depoimentos
                    </a>
                    <a
                        href="#contato"
                        className="text-white text-center font-medium p-1 hover:underline rounded-[5px] cursor-pointer">
                        Contato
                    </a>
                </div>
            </div>
        </div>

    )
}

export default index