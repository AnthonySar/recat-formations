
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Search from "./Search";
import SearchUsers from "./SearchUsers";

const SearchContent = () => {
  const [search, setSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  
  // Custom Hook pour le fetch
  // on passe en params l'url à fetch
  // Attention ! Il faudrait typé le params en string depuis le hook custom
  const {data, isLoading} = useFetch('https://dummyjson.com/users')

  const filterUsers = () => {
   const foundUsers = data.users.filter((user) => {
      return Object.values(user)
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase())
    })

    setResultSearch(foundUsers)
  }

  useEffect(() => {
    if (search !== '') {
      filterUsers();
    } else {
      setResultSearch([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const loadingMsg = (msg, color) => {
    return (
      <div style={{color: color}} className="alert alert-success">
          { msg }
      </div>
    )
  }

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <h2>Barre de recherche</h2>
      <p>Effectuer une recherche pour faire appel à l'API. Exemple "Alison"</p>
      <p>Mise en place d'un custom Hook également pour simplifier et réutiliser le fetch si besoin.<br/>
      L'url étant stocké en tant que params du hook</p>
      { 
        isLoading ? loadingMsg('Ici on attends que le json soit récupérer', 'black') : <Search searchAtr={search} searchHandler={handleChange} />
      }

      {
        resultSearch.length === 0 && search !== '' ? loadingMsg('Pas de résultat', 'black') 
        : 
        search === '' ? loadingMsg('Veuillez effectuer une recherche', 'black') 
        :
        <SearchUsers 
          dataProps={resultSearch}
        />
      }
    </div>
  )
}

export default SearchContent;