import { createContext, useState } from "react";
import productImages from "../productImages.json";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productNumber, setProductNumber] = useState(0);
  const [showCartIcon, setShowCartIcon] = useState(false);
  const [productPrice, setProductPrice] = useState(125);
  const [newPrice, setNewPrice] = useState(null);
  const [cartAdded, setCartAdded] = useState(false);
  //const [activeImage, setActiveImage] = useState(null)
  const [considerCart, setConsiderCart] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [activeImage, setActiveImage] = useState(productImages[0].imageSource);
  const [activeAlt, setActiveAlt] = useState(productImages[0].imageAltText);
  const [activeId, setActiveId] = useState(1);
  const [clicked, setClicked] = useState("");
  const [active, setActive] = useState(true);
  const [mobileNav, setMobileNav] = useState(false)
  //const [activeImageNumber, setActiveImageNumber] = useState(1)


  //Set Product number on product page, considering its existing number in cart
  function handleProductNumber(e) {
    if (cartAdded === true) {
      cartPopulated();
    }
  }
  function cartPopulated() {
    if (cartAdded === true) {
      setConsiderCart(productNumber + 1);
    }
    setCartAdded(false);
  }

  //Remove product from cart entirely upon decremeting to 0
  function removeZeroCart() {
    productNumber === 1 && setShowCartIcon(false);
  }

  //To add product to cart
  function add2Cart() {
    setShowCartIcon(true);
    setCartAdded(true);
    setConsiderCart(0);
  }

  //General handling of product number change
  function changeProductNumber(e) {
    if (productNumber > 0) {
      e === "plus"
        ? setProductNumber((ProductNumber) => ProductNumber + 1)
        : setProductNumber((ProductNumber) => ProductNumber - 1);
    }
    if (productNumber === 0 && e === "plus") {
      setProductNumber((ProductNumber) => ProductNumber + 1);
    } else {
      return;
    }
  }

  //Calculate Product's new price based on current product number on display
  function calcNewPrice() {
    setNewPrice(productNumber*productPrice)
  }

  //Remove product from cart entirely
  const onDelete = () => {
    setProductNumber(0);
    setShowCartIcon(false);
  };

  //Show modal upon doubleclick of product thumbnail
  function onModalShow() {
    setModalShow(true)
  }


  //Show clicked thumbnail image as (Active) Product Image
  const onShow = (id) => {
    setActiveImage(productImages[parseFloat(id) - 1].imageSource);
    let activeImageNumber = id
    setActiveId(activeImageNumber)  //ASYNCHRONOUS REACT!!!!!!!!!!!!!!!!!
    console.log("clicked id:", id)
    console.log("active id", activeId)
  }


  //targetting a product image thumbnail on click
  const select = (id) => {
    //console.log("click id:", id)
    //clicked ? setClicked() : setClicked(id)
    if (active) {
      setClicked(id);
    } else {
      setClicked("");
    }
  }

  //Show previous image on modal view
  function onShowModPrev(activeId) {
    console.log("active id 1:", activeId)
      if (activeId === 0) {
        return
      } else if (activeId === 5) {
        setActiveId(activeId - 2)
      } else {
        setActiveImage(productImages[parseFloat(activeId) - 1].imageSource)
        setActiveId((activeId - 1))
      }
  }

    //Show previous image on modal view
    function onShowModNext(activeId) {
      console.log("active id 1:", activeId)
      if (activeId === 5) {
        return
      } else if (activeId === 0) {
        setActiveId (activeId => activeId + 2)
      } else {
        setActiveImage(productImages[parseFloat(activeId) - 1].imageSource)
        setActiveId((activeId => activeId + 1))
      }
    }

    //Show mobile navigation (with mobile background)
    function showMobileNav() {
      setMobileNav(true)
    }

  //toggle Active Thumbnail
  // function toggleActive () {
  //   if 
  // }


  return (
    <ProductContext.Provider
      value={{
        productNumber,
        changeProductNumber,
        showCartIcon,
        handleProductNumber,
        productPrice,
        setProductPrice,
        newPrice,
        setNewPrice,
        onDelete,
        add2Cart,
        cartPopulated,
        considerCart,
        calcNewPrice,
        removeZeroCart,
        modalShow,
        setModalShow,
        onModalShow,
        activeAlt,
        activeImage,
        select,
        onShow,
        clicked,
        onShowModPrev,
        onShowModNext,
        activeId,
        showMobileNav,
        mobileNav,
        setMobileNav
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext
