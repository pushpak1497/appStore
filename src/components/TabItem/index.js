import './index.css'

const TabItem = props => {
  const {list, onClickTab} = props
  const {displayText, tabId} = list
  const onTabClick = () => {
    onClickTab(tabId)
  }
  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onTabClick}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
