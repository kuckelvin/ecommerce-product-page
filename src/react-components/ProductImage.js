const ProductImage = ({ id, src, alt }) => {
  return (
    <div id={`productImage_${id}`} className="productImage">
      <img 
        src={src}
        alt={alt}
      />
    </div>
  )
}

export default ProductImage;
