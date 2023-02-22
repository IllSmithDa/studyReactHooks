import { useMemo, useState } from "react";

export default function StudyUseMemo() {
  // useMemo
  const [nameList, setNameList] = useState<string[]>(["Vel", "Mel"]);
  const [currentName, setCurrentName] = useState<string | null>(null);

  /* use memo is greate for two things: 
    1. complex calculations
    2. handling arrays and objects and basically more complex data structures rather
    than simple data types
    3. Use memo is not related to classic memoization where parameters are set in a
    Maa or object
    4. This simply keeps track to current value and the next value during re render
   and checks if namelist had its values updated and will run the function if
   it has
  */
  useMemo(() => {
    console.log(nameList);
    nameList.sort();
  }, [nameList]);

  return (
    <div className="p-10">
      <h2 className="font-bold">UseMemo Section</h2>

      <div>{JSON.stringify(nameList.join(", "))}</div>

      <input
         className="blockw-full0 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 
         transition duration-500 ease-in-out transform border border-transparent rounded-lg 
         bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white 
         focus:ring-offset-2 focus:ring-offset-gray-300 mx-10"
        onChange={(event) => {
          setCurrentName(event?.target.value);
        }}
      />
      <button
        className="px-5 py-3 text-neutral-500 bg-cyan-400 rounded-lg"
        onClick={() => {
          if (currentName) {
            setNameList([...nameList, currentName]);
          }
        }}
      >
        Add To List
      </button>
    </div>
  );
}
