/* You can build your own custom hooks with custom logic if you want to have resuable 
  logic that will be used throughout the app. Custom hooks can be quite useful for fetching 
  data, 
*/
import { useCustomHook } from "./hooks/CustomHook";

export default function StudyCustomHook() {
  const names = useCustomHook();

  return (
    <div className="p-10">
      <h2 className="font-bold">Custom Hook Section</h2>
      {JSON.stringify(names.join(', '))}
    </div>
  )

}