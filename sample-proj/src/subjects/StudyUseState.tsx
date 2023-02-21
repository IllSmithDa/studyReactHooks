import { useState, useEffect } from 'react';

/* usestate allows you to set a local state within a function component */

function Counter() {
  const [count, setCount] = useState(10);


  // updates the state var count;
  function addOne() {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  )
}

/* Js hold arrays, booleans and string values by value and arrays and objects by 
reference. SSo instead of copying value to local instance, it directly refers itself 
to the origin copy. Because it is by reference, the state does update when you simply
list.push without calling setLIst. However, the re render has to be triggered which 
is why you use the use State to ensure re render happens.
*/
function NameList() {
  const [list, setList] = useState(['Jack', 'Jill', 'Johm'])
  const [name, setName] = useState('');

  /* note that functions can be used in use state. Good if you have a calculation 
  you need to run in order to set the state. 
  */
  const [newNumber, setNewNumber] = useState(() => 4)

  return (
    <div>
      { list ? 
      <ul>
        {list.map((name: string) => {
          return (
            <li key={name}>{name}</li>
          );
        })}
      </ul>: <div />
      }
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
        {/* 
           A new array must be created or else the old array.push only adds 
           onto the same reference. THe compiler will see that the old and new array are the 
          same. A new array will create a new reference and enqueue a re-render rewquest

        */}
         <button onClick={() => {setList([...list, name]) }}>Add name</button>
    </div>
  );
}

/* Each counter will have their own unique state that will not be shared with one 
another. We manipulate each state independently */
function StudyUseState() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <NameList />
    </div>
  )
}

export default StudyUseState;