import React from 'react'
import { useActivities } from './../myContext';
import Add from './../assets/add.svg'

const InsertionForm = () => {

    const {
        inputVal,
        showAll,
        showFinished,
        showPending,
        addEntry,
        setInputVal,
        handleInputChange,
        setShowAll,
        setShowFinished,
        setShowPending,
    } = useActivities()

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        addEntry({
            id: Date.now(),
            title: inputVal,
            isCompleted: false
        })
        setInputVal("");
    }

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-[20px]'>Adicione uma atividade ao seu dia abaixo:</h2>
            <form
                onSubmit={handleSubmit}
                className='flex justify-between gap-6 pt-1.5 pb-1.5 pl-3 pr-1.5
          bg-slate-600 rounded-md'>
                <input
                    type="text"
                    placeholder="digite sua atividade aqui"
                    value={inputVal}
                    onChange={handleInputChange}
                    className='w-full focus:outline-none' />
                <button
                    type='submit'
                    className='flex justify-center items-center 
            w-fit h-fit p-2
            bg-orange-400
            rounded-md
            text-[12px]
            cursor-pointer'>
                    <img src={Add} alt="" />
                </button>
            </form>

            <div>
                <div>
                    <input
                        type="checkbox"
                        id="todos"
                        checked={showAll}
                        onChange={e => setShowAll(e.target.checked)}
                    />
                    <label htmlFor="todos">Todos</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="pendentes"
                        checked={showPending}
                        onChange={e => setShowPending(e.target.checked)}
                    />
                    <label htmlFor="pendentes">Pendentes</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="concluidas"
                        checked={showFinished}
                        onChange={e => setShowFinished(e.target.checked)}
                    />
                    <label htmlFor="concluidas">Concluídas</label>
                </div>
            </div>
        </div>
    )
}

export default InsertionForm