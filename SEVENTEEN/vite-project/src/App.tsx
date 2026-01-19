import { useState, useEffect } from 'react'

import type { Product } from './types/typings.ts'

import Chevron from './assets/chevron-down.svg';

import FirstName from './Components/FirstName';
import Message from './Components/Message';
import Price from './Components/Price';
import MappingCards from './Components/Card/MappingCards';
import Header from './Components/Header';

const mockProducts: Product[] = [
  {
    id: 1,
    first: 'Produto A',
    price: '100',
    message: 'Descrição',
    image: 'https://...'
  }
]

function App() {
  const [first, setFirst] = useState('');
  const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
  const [price, setPrice] = useState('');
  const [isPriceEmpty, setIsPriceEmpty] = useState(false);
  const [message, setMessage] = useState('');
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const stored = localStorage.getItem('products');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState<boolean>(true)
  const [accordion, setAccordion] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);



  // validações
  const handleFirstNameChange = (value: string) => {
    setFirst(value);
    setIsFirstNameEmpty(value.trim() === '');
  };
  const handlePriceChange = (value: string) => {
    setPrice(value);
    setIsPriceEmpty(value.trim() === '');
  };

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

    if (isFirstNameEmptyNow || isPriceEmptyNow || isMessageEmptyNow) return;

    // define o que o newProduct vai ser, usando as variaveis de estado dos campos do form
    const newProduct = {
      id: Date.now(),
      first,
      price,
      message,
      image: 'https://via.placeholder.com/300'
    }

    // altera as infos de product com o que já tinhamos (prev, termo do react) e com as informações novas
    setProducts(prev => [...prev, newProduct])
    localStorage.setItem('products', JSON.stringify([...products, newProduct]))
  };
  // validações

  



  // toggle do dropdown
  const handleToggle = () => {
    setToggleMenu(prevState => !prevState);
  }

  // toggle do acordeão/form
  const handleAccordion = (e: any) => {
    e.preventDefault();
    setAccordion(prevState => !prevState);
  }

  // guarda os produtos adicionados no localStorage, tirando assim da sessionStorage
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);


  useEffect(() => {
  setLoading(true)

  setTimeout(() => {
    setProducts(mockProducts)
    setLoading(false)
  }, 2000)
}, [])


  return (
    <>
      <header className='w-full pt-8 pb-8 pl-10 pr-10 flex justify-center border-b border-black'>
        <div className='w-276 flex justify-between'>
          <h1>
            <span className='italic font-bold text-[20px]'>THE </span>
            clothing store
          </h1>


          {/* div que tem o botão e o dropdown no header */}
          <Header
            handleToggle={handleToggle}
            toggleMenu={toggleMenu}
            products={products}
          />
          {/* div que tem o botão e o dropdown no header */}



        </div>
      </header>

      <main className='w-full pt-8 pb-8 pl-10 pr-10 flex justify-center'>
        <div className='w-276 flex flex-col justify-between gap-10'>

          {/* titlo + form */}
          <div className='flex flex-col justify-center gap-10 relative'>
            <button
              onClick={handleAccordion}
              className='cursor-pointer flex items-center justify-center gap-2'>
              Adicione um produto a lista usando o form abaixo
              <img src={Chevron} alt="" className={`transition duration-200 ease-in-out ${accordion ? 'transform rotate-180' : ''}`} />
            </button>

            {/* div que eu vou tornar um acordeão */}
            <div className={`p-4 rounded-3xl border border-blue-400 bg-white absolute top-full left-1/2 -translate-x-1/2
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
                  value={price}
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

          {loading ? (
            <p className="text-center font-medium">Carregando...</p>
          ) : (
            <div className="grid grid-cols-2 gap-8">
              <MappingCards products={products} />
            </div>
          )}

        </div>

      </main>

    </>
  )
}

export default App
