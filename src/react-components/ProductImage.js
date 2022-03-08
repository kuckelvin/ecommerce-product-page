const ProductImage = ({ id, src, alt }) => {
  return (
    <div id={`productImage_${id}`} className="productImage" style={{ width: "450px", height: "450px" }}>
      <img 
        src={src}
        alt={alt}
      />
    </div>
  )
}

export default ProductImage;
