const AppItem = props => {
  const {filteredDetails} = props
  const {appName, imageUrl} = filteredDetails

  return (
    <li>
      <img src={imageUrl} alt={appName} />
      <h1>{appName}</h1>
    </li>
  )
}

export default AppItem
