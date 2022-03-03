const ProductImage = ({ src, alt }) => {
  return (
    <div className="productImage" style={{ width: "450px", height: "450px" }}>
      <img 
        src={src}
        alt={alt} 
      />
    </div>
  )
}

export default ProductImage;
