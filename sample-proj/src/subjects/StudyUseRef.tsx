/* Use ref basically is a hook that return a ref object 
The current property is initialized and passed as argument. 
Use ref could be good for user event driven changes to dom elements such as 
a user button click triggers the focus of another dom element such as a input

*/

import { useRef } from "react";

function StudyUseRef() {
  // set the typ here to HTMLInput Elemnent
  // HTMLBodyElement, HTMLHeadingElement, HTMLDivElement, HTMLAnchorElement, 
  // HTMLParagraphElement are all example of other types of elements
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleClick = () => {
    // check to see if it is null
    if (inputRef && inputRef.current) {

      // If input exists, set textbos value and focus the dom element
      inputRef.current.value = 'Begin writing here';
      inputRef.current.focus();
    }
  }

  return (
    <div>
      {/* Use 'ref' property to assign a dom element to a useref hook*/}
      <h2 className="font-bold">Useref Hook Section</h2>
      <input type="text" className="border border-sky-400" ref={inputRef} />
      <button className="border " onClick={handleClick}>Focus and Populate Text Field</button>
    </div>
  ) 
}

export default StudyUseRef;