import { useEffect } from 'react'
import useBooks from './hooks/useBooks'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import FormIcon from './assets/form-icon.svg'
import FormIconWhite from './assets/form-icon-white.svg'

function App() {

  const { popupTrigger, setPopupTrigger, fetchBooks } = useBooks()

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col gap-8
    w-full h-screen p-8
    bg-gray-200">
      <div className='flex justify-between items-start'>
        <h1 className='font-bold font-mono text-[35px]'>BIBLIOTECA VIRTUAL</h1>
        <div className="relative w-fit h-fit self-start">
          <button
            onClick={() => setPopupTrigger(!popupTrigger)}
            className={`flex justify-center items-center
            w-12 h-12 
            rounded-full 
            ${popupTrigger ? 'bg-blue-900' : 'bg-white'}
            shadow-2xl shadow-gray
            transition-all duration-350ms ease-in-out
            cursor-pointer`}>
            <img src={popupTrigger ? FormIconWhite : FormIcon} alt="" />
          </button>
          {popupTrigger && <BookForm />}
        </div>
      </div>
      <BookList />

    </div>
  )
}

export default App
