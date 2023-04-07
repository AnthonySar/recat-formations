import { useEffect } from "react"

const useUpdateDocTitle = (arg) => {
  useEffect(() => {
    document.title = `React Formations : ${arg}`
  }, [arg]);
}

export default useUpdateDocTitle;