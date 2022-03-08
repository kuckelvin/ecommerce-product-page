import LeftArrow from "./Icons/LeftArrow"
import { useContext } from "react"
import ProductContext from "../react-context/ProductContext"

const PreviousButton = () => {
const {activeId, onShowModPrev} = useContext(ProductContext)

  return (
    <button className="previous" onClick={() => onShowModPrev(activeId)} disabled={activeId === 0 && true}>
      <LeftArrow color="black"/>
    </button>
  )
}

export default PreviousButton