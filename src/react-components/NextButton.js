import RightArrow from "./Icons/LeftArrow"
import { useContext } from "react"
import ProductContext from "../react-context/ProductContext"

const NextButton = () => {
  const {onShowModNext, activeId} = useContext(ProductContext)

  return (
    <button className="next" onClick={() => onShowModNext(activeId)} disabled={activeId === 5 && true}>
      <RightArrow color="black" />
    </button>
  )
}

export default NextButton
