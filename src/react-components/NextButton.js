import RightArrow from "./Icons/RightArrow"
import { useContext } from "react"
import ProductContext from "../react-context/ProductContext"

const NextButton = ({ strokeWidth, color, disabled }) => {
  const {onShowModNext, activeId, modalShow} = useContext(ProductContext)

  return (
    <button className={`next ${modalShow ? "modal" : "responsive"}`} onClick={() => onShowModNext(activeId)} disabled={activeId === 5 && true} strokeWidth={strokeWidth}>
      <RightArrow color={disabled ? "grey" : color} strokeWidth={strokeWidth} />
    </button>
  )
}

export default NextButton
