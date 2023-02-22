import { useCallback, useState, useEffect } from 'react';

// Usecallback can also prevent an infinite rendering loop when list a function
// that returns an array and that functin is called in a useEffect which has the
// array in its dependency

export default function StudyUseCallback2 () {
  const [listOfNumbers, setListOfNumber] = useState<number[]>([]);
  const [numTimes, setNumTimes] = useState(0);
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [calls, setCalls] = useState(0);
 
  // this will call infinitely in useeffect
  // const buildArray = () => {
  //   setCalls(prev => prev + 1)
  //   return [inputOne, inputTwo]
  // }

  const buildArray = useCallback(() => {
    setCalls(prev => prev + 1)
    return [inputOne, inputTwo]
  },[])

  useEffect(() => {
    setNumTimes(prevVal => prevVal + 1);
    // console.log(`running ${numTimes}`);
    setListOfNumber(buildArray());
  }, [buildArray])

  return (
    <div className='p-10'>
      <div>
        <input
          className="blockw-full0 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 
          transition duration-500 ease-in-out transform border border-transparent rounded-lg 
          bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white 
          focus:ring-offset-2 focus:ring-offset-gray-300 mx-10"
          type="number"
          placeholder={inputOne.toString()}
          onChange={(e) => { setInputOne(Number(e.target.value)) }}
        />
        +
        <input
          className="blockw-full0 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 
          transition duration-500 ease-in-out transform border border-transparent rounded-lg 
          bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white 
          focus:ring-offset-2 focus:ring-offset-gray-300 mx-10"
          type="number"
          placeholder={inputTwo.toString()}
          onChange={(e) => { setInputTwo(Number(e.target.value)) }}
        />
      </div>
      <div>
        <h1>Number of Calls: {calls}</h1>
        <h1>{JSON.stringify(listOfNumbers.join(', '))}</h1>
      </div>
    </div>
  )

}