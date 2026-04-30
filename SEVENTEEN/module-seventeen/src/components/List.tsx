import { useActivities } from './../myContext';

const List = () => {

    const { allActivities } = useActivities();

    return (
        <div className='flex flex-col gap-3'>
            <h3>Lista de afarezes de hoje</h3>
            {allActivities.map((item) => (
                <div
                    key={item.id}
                    className='flex justify-between items-center 
            bg-gray-500 p-2.5 rounded-md'>
                    <h4>{item.title}</h4>
                    <button className='w-5 h-5 border-2 border-white rounded-sm'></button>
                </div>
            ))}
        </div>
    )
}

export default List