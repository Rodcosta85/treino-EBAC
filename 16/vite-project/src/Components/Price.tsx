import React from "react";

interface Props {
  value: string,
  isEmpty: boolean,
  priceChange: any
}

const FirstName: React.FC<Props> = ({ value, priceChange, isEmpty }) => {

  const handleChange = (e: any) => {
    priceChange(e.target.value);
  }


  return (
    <div className="h-min">
      <div className='mr-4 flex flex-col'>
        <label
          htmlFor="first-name"
          className='text-[14px] text-gray-500 font-medium'>Preço do item<span className='text-mediumGreen font-bold'>*</span></label>
        <input
          id="first-name"
          type="text"
          value={value}
          className={`w-134 h-25 border-[0.5px] rounded-[10px] mt-3 p-5
          ${isEmpty ?
              'border-red-500 focus:outline-red-500'
              :
              'border-gray-400 mb-5 focus:outline-blue-800 focus:bg-blue-100'
            }`}
          onChange={handleChange}
        />
      </div>
      <p className={`text-[13px] font-medium mt-2 mb-6 
          ${isEmpty ? 'block text-red-500' : 'hidden'}`}>
        Esse campo é necessário
      </p>
    </div>

  )
}

export default FirstName;