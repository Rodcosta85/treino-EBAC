import { useState } from 'react'

import PrimeiroNome from './Primeiro Nome';
import Sobrenome from './Sobrenome';
import Email from './Email';
import Mensagem from './Mensagem'
import Checkbox from './Checkbox'

import Silhouete from '/silhouete.png'
import Mail from '/mail.png'
import Whatsapp from '/whatsapp.png'

const index = () => {

    // EMAIL LOGIC
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleEmailChange = (value) => {
        setEmail(value);
        setIsEmailValid(emailRegex.test(value));
    };

    // FIRST NAME LOGIC
    const [first, setFirst] = useState('');
    const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
    const handleFirstNameChange = (value) => {
        setFirst(value);
        setIsFirstNameEmpty(value.trim() === '');
    };

    // LAST NAME LOGIC
    const [last, setLast] = useState('');
    const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);
    const handleLastNameChange = (value) => {
        setLast(value);
        setIsLastNameEmpty(value.trim() === '');
    };

    const [message, setMessage] = useState('');
    const [isMessageEmpty, setIsMessageEmpty] = useState(false);
    const handleMessageChange = (value) => {
        setMessage(value);
        setIsMessageEmpty(value.trim() === '');
    };


    // FOR THE RADIOS
    const [selected, setSelected] = useState('');
    const [isReallySelected, setIsReallySelected] = useState(false);

    // FOR THE CHECKBOX
    const [checked, setChecked] = useState('');
    const [isReallyChecked, setIsReallyChecked] = useState(false);


    const handleSubmit = (e) => {  // "e" is the event
        e.preventDefault();  // this function prevents the button from refreshing the page everytime it's clicked. Remember that we have to pass the "onClick" attribute to the button tag

        const isEmailValidNow = emailRegex.test(email);
        const isFirstNameEmptyNow = first.trim() === '';
        const isLastNameEmptyNow = last.trim() === '';
        const isMessageEmptyNow = message.trim() === '';
        const isRadioSelectedNow = selected === '';
        const isCheckboxClicked = checked === '';


        setIsEmailValid(isEmailValidNow);
        setIsFirstNameEmpty(isFirstNameEmptyNow);
        setIsLastNameEmpty(isLastNameEmptyNow);
        setIsMessageEmpty(isMessageEmptyNow);
        setIsReallySelected(isRadioSelectedNow);
        setIsReallyChecked(isCheckboxClicked);
    };


    return (
        <footer
            id="contato"
            className="flex flex-col items-center gap-8 w-full h-fit md:gap-6 lg:gap-8 pt-8 pb-8 pl-6 pr-6 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 bg-linear-to-b from-blue-200 to-blue-400">
            <div className='w-full md:max-w-276 lg:max-w-276 flex flex-col gap-8 justify-between'>
                <h2 className="text-center md:text-left lg:text-left text-2xl md:text-4xl lg:text-5xl">Fale conosco caso tenha alguma dúvida!</h2>
                <div className='flex flex-col gap-8 lg:flex-row justify-between w-full'>
                    <div className='rounded-[12px] w-full lg:w-fit h-fit p-8 bg-white flex flex-col gap-4'>
                        <form
                            onSubmit={handleSubmit}
                            id="form"
                            className='flex flex-col gap-4'
                        >
                            <div className='flex flex-col gap-4 justify-center'>
                                {/* FIRST NAME */}
                                <PrimeiroNome value={first} firstChange={handleFirstNameChange} isEmpty={isFirstNameEmpty} />

                                {/* SECOND NAME */}
                                <Sobrenome value={last} lastChange={handleLastNameChange} isEmpty={isLastNameEmpty} />
                            </div>

                            {/* EMAIL INPUT */}
                            <Email value={email} emailChange={handleEmailChange} isValid={isEmailValid} />

                            {/* TEXT AREA */}
                            <Mensagem value={message} messageChange={handleMessageChange} isEmpty={isMessageEmpty} />

                            <div className=''>
                                {/* FINAL CHECKBOX */}
                                <Checkbox value={checked} checkboxChange={setChecked} isChecked={isReallyChecked} />
                                {/* usando somente a função do estado (setChecked) a gente ja consegue fazer as alterações no estado em si propriamente */}
                            </div>



                        </form>
                        <button
                            type='submit'
                            onClick={handleSubmit}
                            className='bg-green-300 text-white font-semibold h-12 pl-4 pr-4 pt-2 pb-2 rounded-[10px] self-end'>
                            Enviar
                        </button>
                    </div>
                    <img
                        src={Silhouete}
                        alt=""
                        className='w-200 h-100 lg:h-150 object-cover object-top' />
                </div>
                <hr className='text-white' />
                <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-3 md:gap-8 lg:gap-10 w-full'>
                    <div className='flex flex-col md:flex-row lg:flex-row gap-3 md:gap-8 lg:gap-10'>
                        <div className='flex gap-2 items-center'>
                            <img src={Whatsapp} alt="" className='w-4 h-4' />
                            <p>(11) 98765-4321</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={Mail} alt="" className='w-5 h-5' />
                            <p>contato@petestyle.com.br</p>
                        </div>
                    </div>
                    <p>Segunda a Sábado, das 08:00 às 18:00</p>
                </div>

            </div>
        </footer>
    )
}

export default index