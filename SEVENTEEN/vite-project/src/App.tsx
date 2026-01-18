import { useState } from 'react'

import FirstName from './Components/FirstName';
import Message from './Components/Message';
import Price from './Components/Price';


function App() {

  // FIRST NAME LOGIC
  const [first, setFirst] = useState('');
  const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
  const handleFirstNameChange = (value: string) => {
    setFirst(value);
    setIsFirstNameEmpty(value.trim() === '');
  };

  const [price, setPrice] = useState('');
  const [isPriceEmpty, setIsPriceEmpty] = useState(false);
  const handlePriceChange = (value: string) => {
    setPrice(value);
    setIsPriceEmpty(value.trim() === '');
  };


  const [message, setMessage] = useState('');
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);
  const handleMessageChange = (value: string) => {
    setMessage(value);
    setIsMessageEmpty(value.trim() === '');
  };

  const handleSubmit = (e: any) => {  // "e" is the event
    e.preventDefault();  // this function prevents the button from refreshing the page everytime it's clicked. Remember that we have to pass the "onClick" attribute to the button tag
    const isFirstNameEmptyNow = first.trim() === '';
    const isMessageEmptyNow = message.trim() === '';
    const isPriceEmptyNow = price.trim() === '';

    setIsFirstNameEmpty(isFirstNameEmptyNow);
    setIsMessageEmpty(isMessageEmptyNow);
    setIsPriceEmpty(isPriceEmptyNow);

  };

  const [products, setProducts] = useState<string[]>([]);
  const [accordion, setAccordion] = useState<boolean>(false);

  const handleAccordion = (e: any) => {
    e.preventDefault();
    setAccordion(prevState => !prevState);
  }

  return (
    <>
      <header className='w-full pt-8 pb-8 pl-10 pr-10 flex justify-center border-b border-black'>
        <div className='w-276 flex justify-between'>
          <h1>
            <span>THE </span>
            clothing store
          </h1>
          <button className='w-8 h-8 border-black border cursor-pointer'></button>
        </div>
      </header>

      <main className='w-full pt-8 pb-8 pl-10 pr-10 flex justify-center'>
        <div className='w-276 flex flex-col justify-between'>


          <div className='flex flex-col justify-center gap-10 relative'>
            <button onClick={handleAccordion} className='cursor-pointer'>
              Adicione um produto a lista usando o form abaixo ⬇️
            </button>

            {/* div que eu vou tornar um acordeão */}
            <div className={`bg-white absolute top-full left-1/2 -translate-x-1/2
            flex flex-col gap-4 transition-all duration-200
            ${accordion ? 'opacity-100 translate-y-4' : 'opacity-0 pointer-events-none'}`
            }>
              <form
                onSubmit={handleSubmit}
                id="form">

                <FirstName
                  value={first}
                  firstChange={handleFirstNameChange}
                  isEmpty={isFirstNameEmpty}
                />

                <Price
                  value={first}
                  priceChange={handlePriceChange}
                  isEmpty={isPriceEmpty}
                />

                <Message
                  value={message}
                  messageChange={handleMessageChange}
                  isEmpty={isMessageEmpty}
                />

              </form>
              <button
                type='submit'
                onClick={handleSubmit}
                className='bg-blue-800 text-white font-semibold w-134 h-12 rounded-[10px] transition-all duration-300 ease-in-out hover:bg-blue-400 cursor-pointer'>
                Enviar
              </button>
            </div>
          </div>


        </div>

      </main>

    </>
  )
}

export default App
