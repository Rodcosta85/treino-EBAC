import React from "react";

const index = ({ value, lastChange, isEmpty }) => {
    const handleChange = (e) => {
        lastChange(e.target.value);
    }

    return (
        <div className="h-min">
            <div className="flex flex-col">
                <label
                    htmlFor="second-name"
                    className='text-[14px] text-gray-500 font-medium'>Sobrenome<span className='text-mediumGreen font-bold'>*</span></label>
                <input
                    id="second-name"
                    type="text"
                    value={value}
                    className={isEmpty ? 'h-12 border-personalizedRed border-[0.5px] rounded-[10px] mt-3 p-5 focus:outline-personalizedRed' : 'h-12 border-gray-400 border-[0.5px] rounded-[10px] mt-3 p-5 focus:outline-mediumGreen focus:bg-green-100'}                    onChange={handleChange}
                />
            </div>
            <p className={isEmpty ? "flex text-red-500 text-[13px] font-medium mt-2 w-fit" : "hidden"}>Esse campo é obrigatório</p>
        </div>

    )
}

export default index;