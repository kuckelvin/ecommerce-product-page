import Logo from "./Logo.js"
import RightNavIcons from "./RightNavIcons.js"
import NavMenu from "./NavMenu.js"

const TopLayout = () => {
  return (
    <nav className="topLayout">
        <div className="leftNavIcons">
            <Logo />
            <NavMenu />
        </div>
        <RightNavIcons />
    </nav>
  )
}

export default TopLayout