import React from "react";

interface Props {
    value: string,
    isEmpty: boolean,
    messageChange: any
}

const Message: React.FC<Props> = ({ value, messageChange, isEmpty }) => {

    const handleChange = (e: any) => {
        messageChange(e.target.value);
    }

    return (
        <>
            <div className='flex flex-col'>
                <label
                    htmlFor="textarea"
                    className='text-[14px] text-gray-500 font-medium'>
                    Message
                    <span className='text-green-800 font-bold'>*</span>
                </label>
                <textarea
                    id="textarea"
                    value={value}
                    className={`w-134 h-25 border-[0.5px] rounded-[10px] mt-3 p-5
                    ${isEmpty ?
                            'border-red-500 focus:outline-red-500'
                            :
                            'border-gray-400 mb-5 focus:outline-green-800 focus:bg-green-100'
                        }`}

                    onChange={handleChange}>
                </textarea>
            </div>
            <p className={`text-[13px] font-medium mt-2 mb-6 
                ${isEmpty ? 'block text-red-500' : 'hidden'}`}>
                This field is required
            </p>

        </>
    )

}

export default Message;