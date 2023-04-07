const SearchUsers = ({dataProps, notification}) => {

  return (
    <table id="search-users">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Adresse</th>
        </tr>
      </thead>
      <tbody>
        {
          notification && <tr><td colSpan={4} style={{color: 'green'}}>Veuillez patienter</td></tr>
        }
        {
          dataProps.map(({id, lastName, firstName, email, address}) => {
            return (
              <tr key={id}>
                <td>{lastName}</td>
                <td>{firstName}</td>
                <td>{email}</td>
                <td>{address.address} {address.city} {address.postalCode}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default SearchUsers;