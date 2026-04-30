import { useEffect, useMemo } from 'react'
import { useActivities } from './myContext';
import Header from './components/layout/Header';
import List from './components/List';


function App() {

  const {
    allActivities,
    selectedActivity,
    inputVal,
    handleInputChange,
    setSelectedActivity,
    addEntry
  } = useActivities();

  const totalActivities = Array.isArray(allActivities) ? allActivities.length : 0;

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    addEntry({
      id: Date.now(),
      title: inputVal,
      isCompleted: false
    })
  }



  return (
    <div className='flex flex-col justify-start items-center gap-12.5
    w-full h-screen 
    bg-slate-900 text-white'>
      <Header />
      <div className='flex flex-col gap-10'>
        <h2 className='text-[20px] text-center'>Progress ---- {totalActivities}%</h2>

        {/* barra de progresso em si */}
        {/* <div
                className="progress-bar-container"
                style={{
                    width: '100%',
                    backgroundColor: '#E5E5E5', // A light gray background
                    height: '0.0625rem',
                }}
            >
                <div
                    className="progress-bar-fill"
                    style={{
                        width: `%`, // The dynamic width
                        backgroundColor: '#000',     // A dark fill color
                        height: '100%',
                        transition: 'width 0.3s ease-in-out' // Smooth animation
                    }}
                />
        </div> */}

        <div className='flex flex-col gap-4'>
          <h2 className='text-[20px]'>Adicione uma atividade ao seu dia abaixo:</h2>
          <form
            onSubmit={handleSubmit}
            className='flex justify-between gap-6 pt-1.5 pb-1.5 pl-3 pr-3
          bg-slate-600 rounded-md border border-white'>
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
            bg-green-700
            rounded-md
            text-[12px]
            cursor-pointer'>
              Add
            </button>
          </form>
        </div>

        <List />

      </div>
    </div>
  )
}

export default App
