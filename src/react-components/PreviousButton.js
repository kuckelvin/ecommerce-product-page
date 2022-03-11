import LeftArrow from "./Icons/LeftArrow"
import { useContext } from "react"
import ProductContext from "../react-context/ProductContext"

const PreviousButton = ({ disabled, color, strokeWidth }) => {
const {activeId, onShowModPrev, modalShow} = useContext(ProductContext)

  return (
    <button className={`previous ${modalShow ? "modal" : "responsive"}`} onClick={() => onShowModPrev(activeId)} disabled={activeId === 0 && true}>
      <LeftArrow color={disabled === true ? "red" : color} strokeWidth={strokeWidth}/>
    </button>
  )
}

export default PreviousButton