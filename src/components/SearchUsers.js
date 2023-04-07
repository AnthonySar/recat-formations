const SearchUsers = ({dataProps}) => {

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