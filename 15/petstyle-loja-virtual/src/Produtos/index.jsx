import { useState } from "react"
import Data from '../data.json'
import Tag from '/tag.png'

const index = () => {

  const [data] = useState(Data)

  return (
    <div
      id="produtos"
      className="flex justify-center items-center pl-6 pr-6 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 mt-16 mb-16">
      <div className="w-full md:max-w-276 lg:max-w-276 flex flex-col justify-between gap-8 md:gap-6 lg:gap-8">
        <h2 className="text-center md:text-left lg:text-left text-2xl md:text-4xl lg:text-5xl">Conheça alguns dos nossos produtos!</h2>
        <div className="grid gap-4 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((produto, id) => (
            <div
              key={id}
              className="h-fit p-4 rounded-xl flex flex-col gap-4 border-[4px] border-blue-500">
              <img src={produto.image} alt="" className="w-full h-80 rounded-xl object-cover" />
              <p>{produto.nome}</p>
              <div className="w-fit flex gap-2 items-center p-2 rounded-[5px] bg-gray-200">
                <img
                  src={Tag}
                  alt="a product tag icon in blue"
                  className="w-4 h-4"
                />
                <p className="font-medium text-[12px]">{produto.categoria}</p>
              </div>
              <div className="flex items-center">
                R$ {produto.preco} / {produto.unidade}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default index