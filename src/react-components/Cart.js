import product1Thumbnail from "../images/image-product-1-thumbnail.jpg"
import product2Thumbnail from "../images/image-product-2-thumbnail.jpg"
import product3Thumbnail from "../images/image-product-3-thumbnail.jpg"
import product4Thumbnail from "../images/image-product-4-thumbnail.jpg"
import { useContext } from "react"
import ProductContext from "../react-context/ProductContext"

const deleteIcon = require("../images/icon-delete.svg")



const Cart = () => {

  const {productNumber, productPrice, newPrice, onDelete} = useContext(ProductContext)



  return (
    <div className="cart">
        <section className="cartContent">
          <img src={product1Thumbnail} alt="product 1" width="30px" height="30px"/>
          <div className="product-price-description">
            <p>Fall Limited Edition Sneakers</p>
            <span>${productPrice}.00*{productNumber} <b style={{marginLeft: "8px"}}>${newPrice}.00</b></span>
          </div>
          <img onClick={onDelete} src={deleteIcon.default} alt="delete button" />
        </section>
        <button className="checkout">
          Checkout
        </button>
    </div>
  )
}

export default Cart