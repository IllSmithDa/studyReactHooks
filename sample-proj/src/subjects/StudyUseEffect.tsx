import { useEffect, useState } from "react";
// useEffect accepts a function nwhich can perform any side effects

// Most common use case for useffect is to fetch user requests
function StudyUseEffect() {
  const [names, setNames] = useState([]);
  const [selectedName, setSeletedName] = useState(null);
  const [detailedName, setDetailedName] = useState(null);

  /* using useeffect will allow use to run this fetch request just once rather than 
    going through an infinite loop again and again. The functio in the useffect will be
    called just once and after the dom has been rendered. It will also called whenever the 
    value in the dependency array changes
  */
  useEffect(() => {
    fetch('./data/names.json')
     .then(res => res.json())
     .then((data) => {
        console.log(data);
        setNames(data)
      })
  }, [])

  /* limit the amount you use use effect. Just call a method directly from a user even like this one*/
  const getSelectedData = (name: string) => {
    fetch(`../data/${name}.json`)
    .then(res => res.json())
    .then(data =>setDetailedName(data))
  }

  /* you can do this through use effect, by it will whenever selected name is updated which means its 
    possible for it to be called unintentionally because another function happened to update selected name. 
    Instead call function directly when possible.
  */
  useEffect(() => {
    if (selectedName) {
      getSelectedData(selectedName);
    }
  }, [selectedName])

  return (
    <div className="p-10">
      <h2 className="font-bold">UseEffect Hook Section</h2>
      {
        names.map((name) => {
          return (
            <div key={name}>
              <button className="px-5 py-3 text-neutral-500 bg-cyan-400 rounded-lg my-5" onClick={() => { getSelectedData(name) }}>{name}</button>
            </div>
          )
        })
      }
      <div><b>{JSON.stringify(detailedName)}</b></div>
      <div className="my-10">
        <StopWatch />
      </div>
    </div>
  )
}

const StopWatch = () => {
  const [time, setTime] = useState(0);

  /* calling directly will case a infinite loop becasue every second we set that
  time,it will cause component to re render the entire stopwatch function. It
  will repeatly set over and over again. 
  */
  // setInterval(() => {
  //   setTime(time + 1);
  // }, 1000)

  // instead we use a useeffect. In our inital effect and a closure is created 
  // where time is forever locked at zero then addded by one which is it gets 
  // stuck at 1 

  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(time + 1);
  //   }, 1000)
  // })

  // instead we use the arrow functi nto continually grab the newef value of time 
  useEffect(() => {
    const interval = setInterval(() => {
      // while time is captured at 0, t is merely the current value is which is its 
      // useful to use functions when updating state
      setTime((t) =>  t + 1)
    }, 1000)
    // clear the interval after every call. Return clean up function that calls 
    // whenever current effect is being unmounted and the new useeffect is coming in
    // https://www.w3schools.com/jsref/met_win_cleartimeout.asp
    return () => clearInterval(interval);
  }, [])



  return <div>Time: {time}  </div>
}

export default StudyUseEffect;