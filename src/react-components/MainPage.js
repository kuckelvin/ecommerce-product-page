import TopLayout from "./TopLayout"
import PageArea from "./PageArea"
import { useContext } from "react"
import ProductContext from "../react-context/ProductContext"
import LeftPageArea from "./LeftPageArea"
import { FaTimes } from "react-icons/fa"
import NextButton from "./NextButton"
import PreviousButton from "./PreviousButton"
import MobileNav from "./MobileNav"



const MainPage = () => {
    const {modalShow, setModalShow, mobileNav, setMobileNav} = useContext(ProductContext)

  return (
    <div className="container">
      <TopLayout />
      <PageArea />
      {modalShow ? (
        <div className="modalContainer">
          <div id="open-modal" className="modalWindow">
            <FaTimes
              onClick={() => setModalShow(false)}
              className="modalClose"
            />
            <PreviousButton strokeWidth="3" color="black"/>
            <LeftPageArea />
            <NextButton strokeWidth="3" color="black"/>
          </div>
        </div>
      ) : (
        ""
      )}
      {
        mobileNav ? (
          <div className="modalContainer">
            <div id="open-modal" className="modalWindow">
              <FaTimes
                onClick={() => setMobileNav(false)}
                className="modalClose"
              />
              <MobileNav />
            </div>
          </div>
        ) : (
          ""
        )
      }
    </div>
  )
}

export default MainPage