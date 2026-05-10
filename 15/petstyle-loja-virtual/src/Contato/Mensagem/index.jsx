import React from "react";

const Message = ({ value, messageChange, isEmpty }) => {

    const handleChange = (e) => {
        messageChange(e.target.value);
    }

    return (
        <>
            <div className='flex flex-col'>
                <label
                    htmlFor="textarea"
                    className='text-[14px] text-gray-500 font-medium'>
                    Mensagem
                    <span className='text-mediumGreen font-bold'> *</span>
                </label>
                <textarea
                    id="textarea"
                    value={value}
                    className={isEmpty ? 'h-[100px] border-personalizedRed border-[0.5px] rounded-[10px] mt-3 p-5 focus:outline-personalizedRed' : 'h-[100px] border-gray-400 border-[0.5px] rounded-[10px] mt-3 p-5 focus:outline-mediumGreen focus:bg-green-100'}
                    onChange={handleChange}>
                </textarea>
            </div>
            <p className={isEmpty ? "flex text-red-500 text-[13px] font-medium mt-2 w-fit" : "hidden"}>Esse campo é obrigatório</p>       
        </>
    )
        
}

export default Message;