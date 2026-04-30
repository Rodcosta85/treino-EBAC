import { useEffect, useMemo } from 'react'
import { useActivities } from './myContext';
import Header from './components/layout/Header';
import List from './components/List';
import InsertionForm from './components/InsertionForm';


function App() {

  const {
    allActivities,
    deletedCount,
    resetData,
  } = useActivities();

  const totalEver = allActivities.length + deletedCount;
  const progressPercent = totalEver === 0 ? 0 : (deletedCount / totalEver) * 100;
  const roundNumber = Math.floor(progressPercent)


  return (
    <div className='flex flex-col justify-start items-center gap-12.5
    w-full h-screen 
    bg-slate-900 text-white'>
      <Header />
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-[20px] text-center'>Porcentagem de conclusão ---- {roundNumber}%</h2>

          {/* barra de progresso em si */}
          <div
            className="progress-bar-container"
            style={{
              width: '100%',
              backgroundColor: '#E5E5E5', // A light gray background
              height: '20px',
              border: '1px solid',
              padding: '1px'
            }}
          >
            <div
              className="progress-bar-fill"
              style={{
                width: `${roundNumber}%`, // The dynamic width
                backgroundColor: 'oklch(0.75 0.183 55.934)',     // A dark fill color
                height: '100%',
                transition: 'width 0.3s ease-in-out' // Smooth animation
              }}
            />
          </div>
        </div>
        {roundNumber === 100 ?
          <button 
          onClick={resetData}
          className='flex justify-center items-center w-full pt-2 pb-2 bg-orange-400 rounded-md cursor-pointer'>
            começar novamente
          </button>
          :
          <InsertionForm />
        }
        <List roundNumber={roundNumber} />
      </div>
    </div>
  )
}

export default App
