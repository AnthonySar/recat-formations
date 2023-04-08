import { useEffect, useState } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";

const MyCustomHook = () => {
  const [title, setTitle] = useState('')
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    if (isTrue) {
      setTitle('')
    } else {
      setTitle('Clicked')
    }
  }, [isTrue])

  // Custom Hook
  useUpdateDocTitle(title);

  return (
    <div className="container-cs m-3">
      <h2>HOOKS : Custom Hook</h2>
      <button onClick={() => setIsTrue(!isTrue)}>Changer le titre du doc</button>
    </div>
  )
}

export default MyCustomHook;