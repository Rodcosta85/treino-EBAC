import { useState } from 'react';
import { useActivities } from './../myContext';
import Delete from './../assets/delete.svg'

interface ListProps {
    roundNumber: number
}

const List: React.FC<ListProps> = ({ roundNumber }) => {
    // Added a TypeScript generic so it accepts the ID type or null
    const [isBeingHovered, setIsBeingHovered] = useState<string | number | null>(null)
    const {
        allActivities,
        finishedActivities,
        showAll,
        showFinished,
        showPending,
        removeEntry,
    } = useActivities()

    return (
        <div className={`${roundNumber === 100 ? 'hidden' : 'flex'} flex-col gap-3`}>
            <h3 className='font-bold text-[20px] border-b border-b-orange-400'>Lista de tarefas de hoje</h3>
            {(showAll || showPending) && (
                <>
                    {allActivities.length === 0 ? (
                        <p className='text-[14px] text-center mt-10'>
                            Que tal adicionar alguns itens à sua lista?
                        </p>
                    ) :
                        (
                            allActivities.map((item) => {
                                // This correctly isolates the boolean to the mapped item
                                const isHovered = isBeingHovered === item.id

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => removeEntry(item.id)}
                                        onMouseEnter={() => setIsBeingHovered(item.id)}
                                        onMouseLeave={() => setIsBeingHovered(null)}
                                        className='flex justify-between items-center 
                        bg-gray-500 p-2.5 rounded-md
                        cursor-pointer
                        relative'>
                                        <h4>{item.title}</h4>
                                        <div
                                            className={`absolute right-0 top-0
                        flex justify-center items-center
                        ${isHovered ? 'w-10 opacity-100' : 'w-0 opacity-0'} h-full 
                        bg-red-400
                        rounded-tr-sm rounded-br-sm
                        cursor-pointer 
                        transition-all duration-300 ease-in-out`}>
                                            <img src={Delete} alt="A check symbol" />
                                        </div>
                                    </button>
                                )
                            })
                        )}
                </>
            )}

            {(showAll || showFinished) && finishedActivities.map(item => {
                return (
                    <button
                        key={item.id}
                        className='flex justify-between items-center 
                    bg-green-500 p-2.5 rounded-md relative'>
                        <h4>{item.title}</h4>
                    </button>
                )

            })}
        </div>
    )
}

export default List