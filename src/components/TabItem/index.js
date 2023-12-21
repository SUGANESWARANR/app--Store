import './index.css'

const TabItem = props => {
  const {details, isActive, changeOn} = props
  const {tabId, displayText} = details
  const onClicked = () => {
    changeOn(tabId)
  }

  const changeClick = isActive ? 'control' : ''

  return (
    <li>
      <button className={changeClick} onClick={onClicked} type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
