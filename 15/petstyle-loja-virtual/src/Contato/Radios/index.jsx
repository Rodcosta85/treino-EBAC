import React from "react";

const index = ({ value, radioChange, isChecked }) => {

    return (
        <>
            <div className=' flex flex-col w-[536px] h-15'>

                <p className='text-[14px] text-gray-500 font-medium'>Query Type <span className='text-mediumGreen font-bold'>*</span></p>

                <div className='flex flex-row mt-3'>
                    <div className='flex flex-row justify-left items-center w-[260px] border-gray-400 border-[0.5px] mr-4 p-4 rounded-[10px]'>
                        <input
                            name="option"
                            type="radio"
                            value="option1"
                            checked={value === "option1"}
                            onChange={() => radioChange("option1")}
                            className='mr-3  accent-mediumGreen focus:bg-green-100' />
                        <p className='text-[14px] text-gray-500 font-medium'>General Enquiry</p>
                    </div>

                    <div className='flex flex-row justify-left items-center w-[260px] border-gray-400 border-[0.5px] p-4 rounded-[10px]'>
                        <input
                            name="option"
                            type="radio"
                            value="option2"
                            checked={value === "option2"}
                            onChange={() => radioChange("option2")}
                            className='mr-3  accent-mediumGreen' />
                        <p className='text-[14px] text-gray-500 font-medium'>Support Request</p>
                    </div>
                </div>

            </div>
            <p className={isChecked ? "block text-personalizedRed text-[13px] font-medium mt-2" : 'hidden'}>Please select a query type</p>
        </>
    )
}

export default index;