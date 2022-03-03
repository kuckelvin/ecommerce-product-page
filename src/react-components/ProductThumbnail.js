//import { useState } from "react"

const ProductThumbnail = ({ src, alt, number, onShow, border, clicked, active }) => {
    

  return (
    <div id={`productImage${number}`} onClick={(e) => {onShow(number); border(e.currentTarget.id)}}  style={{ width: "100px", height: "100px" }} className={active && clicked}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default ProductThumbnail

