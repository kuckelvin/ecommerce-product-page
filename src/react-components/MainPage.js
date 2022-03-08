import TopLayout from "./TopLayout"
import PageArea from "./PageArea"
import { useContext } from "react"
import ProductContext from "../react-context/ProductContext"
import LeftPageArea from "./LeftPageArea"
import { FaTimes } from "react-icons/fa"
import NextButton from "./NextButton"
import PreviousButton from "./PreviousButton"



const MainPage = () => {
    const {modalShow, setModalShow} = useContext(ProductContext)

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
            <PreviousButton />
            <LeftPageArea />
            <NextButton />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MainPage