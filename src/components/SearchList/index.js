import './index.css'

const SearchList = ({item, onDelete}) => {
  const {timeAccessed, logoUrl, title, domainUrl} = item
  return (
    <li className="listitemmain">
      <div className="listitem">
        <p>{timeAccessed}</p>
        <div className="imagepara">
          <img src={logoUrl} alt="domain logo" />
          <div className="para">
            <p className="dark">{title}</p>
            <p className="light">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SearchList
