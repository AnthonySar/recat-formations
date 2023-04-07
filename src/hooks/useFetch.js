import { useState, useEffect } from "react";

const useFetch = (url, params) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
      setData(json);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(`Oups, petite erreur ici ${err.message}`)
    })
  }, [url]);

  return (
    {
      data, isLoading
    }
  )
}

export default useFetch;