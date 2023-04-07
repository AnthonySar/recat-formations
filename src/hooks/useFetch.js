import { useState, useEffect, useDebugValue } from "react";

const useFetch = (url, params) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Ici on debug uniquement lorsqu'on inspecte 
  // Ou avec react-dev-tools 
  useDebugValue(data, val => {
    //alert('useDebugValue est lancé')
    return JSON.stringify(val)
  })

  // 1er méthode : 
  // useEffect(() => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(json => {
  //     setData(json);
  //     setIsLoading(false);
  //   })
  //   .catch(err => {
  //     console.log(`Oups, petite erreur ici ${err.message}`)
  //   })
  // }, [url]);

  // 2nd méthode : async / await
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("Oups, on ne récupère rien")
      }
      const fetchData = await response.json();
      setData(fetchData);
      setIsLoading(false);
    } catch (error) {
      console.log(`Oups, petite erreur ici ${error.message}`)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return (
    {
      data, isLoading
    }
  )
}

export default useFetch;