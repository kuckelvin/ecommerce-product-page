import { useContext } from "react"
import ProductContext from "../react-context/ProductContext"

const ProductPrice = () => {

  const {productPrice} = useContext(ProductContext)

  return (
    <div className="productPrice">
      <div className="newPriceCalc">
        <p className="newPrice"><b>${productPrice}.00</b></p>
        <p className="discount">50%</p>
      </div>
      <p className="originalPrice"><b>$250.00</b></p>
    </div>
  )
}

export default ProductPrice