import Logo from "./Logo"
import RightNavIcons from "./RightNavIcons"
import NavMenu from "./NavMenu"

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