import React from "react";

const index = ({ value, checkboxChange, isChecked }) => {

    return (
        <>
            <div className='flex flex-row'>
                <input
                    type="checkbox"
                    className='mr-3 accent-mediumGreen'
                    value={value}
                    onChange={(e) => checkboxChange(e.target.checked) }
                    />
                <p className='text-[14px] text-gray-500 font-medium'>Eu concordo em ser contactado pela equipe<span className='text-mediumGreen font-bold'>*</span></p>
            </div>
            <p className={isChecked ? "flex text-red-500 text-[13px] font-medium mt-2 w-fit" : 'hidden'}>Para enviar esse formulário, por favor concorde com o seletor acima.</p>
        </>

    )
}

export default index;