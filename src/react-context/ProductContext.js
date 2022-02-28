import { createContext, useState } from "react"

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [productNumber, setProductNumber] = useState(0)
  const [showCartIcon, setShowCartIcon] = useState(false)
  const [productPrice, setProductPrice] = useState(125)
  const [newPrice, setNewPrice] = useState(null)
  const [cartAdded, setCartAdded] = useState(false)
  //const [activeImage, setActiveImage] = useState(null)
  const [considerCart, setConsiderCart] = useState(0)

  function handleProductNumber(e) {
    if (cartAdded === true) {
      cartPopulated()
    }
  }

  function cartPopulated() {
    if (cartAdded === true) {
      setConsiderCart(productNumber+1)
    }
    showCartIcon(false)
    setCartAdded(false)
  }

  function add2Cart () {
    setShowCartIcon(true)
    setCartAdded(true)
    setConsiderCart(0)
  }
  
  // function handleMinusCartIcon() {
  //   if (productNumber === 1) {
  //     setShowCartIcon(!showCartIcon)
  //   }
  // }

  function changeProductNumber(e) {
    if (productNumber > 0) {
      ((e === "plus") ? setProductNumber(ProductNumber=>ProductNumber+1) : setProductNumber(ProductNumber=>ProductNumber-1))
    }
    if (productNumber === 0 && (e === "plus")) {
      setProductNumber(ProductNumber=>ProductNumber+1)
    } else {
      return
    }
  }
  
  const onDelete = () => {
    setProductNumber(0)
    setShowCartIcon(false)
  }
  

  return (
    <ProductContext.Provider value={{productNumber, changeProductNumber, showCartIcon, handleProductNumber, productPrice, setProductPrice, newPrice, setNewPrice, onDelete, add2Cart, cartPopulated, considerCart}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext