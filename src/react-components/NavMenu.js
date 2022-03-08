
const NavMenu = () => {
  return (
    <>
      <ul className="navMenu">
        <div className="dropdown">
          <li className="dropdownTarget">Collections
            <div className="dropdownContent">
              <div className="contentBar"></div>
            </div>
          </li>
        </div>
        <div className="dropdown">
          <li className="dropdownTarget">Men
            <div className="dropdownContent">
              <div className="contentBar"></div>
            </div>
          </li>
        </div>
        <div className="dropdown">
          <li className="dropdownTarget">Women
            <div className="dropdownContent">
              <div className="contentBar"></div>
            </div>
          </li>
        </div>
        <div className="dropdown">
          <li className="dropdownTarget">About
            <div className="dropdownContent">
              <div className="contentBar"></div>
            </div>
          </li>
        </div>
        <div className="dropdown">
          <li className="dropdownTarget">Contact
            <div className="dropdownContent">
              <div className="contentBar"></div>
            </div>
          </li>
        </div>
      </ul>
    </>
  )
}

export default NavMenu