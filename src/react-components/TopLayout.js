import Logo from "./Logo"
import RightNavIcons from "./RightNavIcons"
import NavMenu from "./NavMenu"
import MobileMenu from "./MobileMenu"

const TopLayout = () => {
  return (
    <nav className="topLayout">
        <div className="leftNavIcons">
            <MobileMenu />
            <Logo />
            <NavMenu />
        </div>
        <RightNavIcons />
    </nav>
  )
}

export default TopLayout