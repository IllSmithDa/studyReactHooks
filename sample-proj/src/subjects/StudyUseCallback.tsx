import { useCallback, useState, useEffect } from 'react';

// WHne you use useState, remember you are trigerring a re render of the
// application. This means that useEffects with state dependency will run again
// even if the value of that dependency state value has not changed. To prevent 

export default function StudyUseCallback () {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [randomNumber] = useState(323);
  // const getItems = () => {
  //    return [number, number + 1, number + 2];
  // };
  const count = useCallback(() => {
    console.log(randomNumber)
  }, [])

  useEffect(() => {
    console.log('running');
  }, [randomNumber])

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: isDark ? '#313131' : '#F1F1F1',
    color: isDark ? '#F1F1F1' : '#313131'
  };
  const { color, backgroundColor} = theme;
  return (
    <div className="p-10"
      style={{ backgroundColor, color }}
    >
      <h2 className="font-bold">UseCallback Section</h2>
      <div>
        <input
          className="blockw-full0 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 
          transition duration-500 ease-in-out transform border border-transparent rounded-lg 
          bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white 
          focus:ring-offset-2 focus:ring-offset-gray-300 mx-10"
          type="number"
          placeholder={number.toString()}
          onChange={(e) => { setNumber(Number(e.target.value)) }}
        />
      </div>
      <div>
        <button
          className="px-5 py-3 text-neutral-500 bg-cyan-400 rounded-lg"
          // this onclick causes re-render and causes the useeffect 
          onClick={() => {
            setIsDark(prevDark => !prevDark);
          }}
        >
          Toggle Dark Theme
        </button>
        <List getItems={getItems} />
      </div>
    </div>
  )
}

function List(obj: { getItems:any }) {
  const [items, setItems] = useState([]);
  const [numOfCalls, setNumOfCalls] = useState(0);
  const {getItems} = obj;

  useEffect(() => {
    setNumOfCalls(numOfCalls + 1);
    setItems(getItems());
  }, [getItems])

  return (
    <div>
      <h1>Number of Calls: {numOfCalls}</h1>
      <div>
        {
          items.map((item) => {
            return (
              <div key={item}>
                {item}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

