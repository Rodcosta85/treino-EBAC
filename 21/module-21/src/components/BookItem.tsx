import useBooks from "../hooks/useBooks";
import type { BookTypes } from "../types/bookTypes"
import Close from './../assets/close.svg'

interface BookItemProps {
  item: BookTypes;
}

const BookItem: React.FC<BookItemProps> = ({ item }) => {

  const { removeBook } = useBooks()

  return (
    <div className="relative flex flex-col justify-end h-100 rounded-2xl overflow-visible">
      <button
      onClick={() => item._id !== undefined && removeBook(item._id)}
      className="absolute top-0 right-0 z-99
      flex justify-center items-center
      w-8 h-8 
      rounded-tr-xl rounded-bl-xl
      bg-red-600 text-white
      cursor-pointer">
        <img src={Close} alt="" />
      </button>
      <img
        src={item.bgImg || undefined}
        alt=""
        className="absolute inset-0 w-full rounded-tr-2xl rounded-tl-2xl object-cover"
      />
      <div className="absolute transition-colors" />
      <div className="relative z-10
      flex flex-col justify-between gap-3
      min-h-30.5 pt-3 
      rounded-bl-2xl rounded-br-2xl
      bg-white">
        <div>
          <h2 className="font-bold text-xl leading-tight pl-4 pr-4">{item.title}</h2>
          <p className="text-sm text-gray-600 pl-4 pr-4">{item.author}</p>
        </div>

        <p className={`w-full text-sm text-center text-white font-semibold rounded-bl-2xl rounded-br-2xl p-1 self-center 
        ${item.status === "Não Lido"
            ? "bg-red-500"
            : "bg-green-800"
          }`}>
          {item.status}
        </p>
      </div>
    </div>
  )
}

export default BookItem