import productImage1 from "../images/image-product-1.jpg"
import productImage2 from "../images/image-product-2.jpg"
import productImage3 from "../images/image-product-3.jpg"
import productImage4 from "../images/image-product-4.jpg"
import product1Thumbnail from "../images/image-product-1-thumbnail.jpg"
import product2Thumbnail from "../images/image-product-2-thumbnail.jpg"
import product3Thumbnail from "../images/image-product-3-thumbnail.jpg"
import product4Thumbnail from "../images/image-product-4-thumbnail.jpg"


const LeftPageArea = () => {
  return (
    <section className="leftPageArea">
      <div className="productImage">
        <img 
          src={productImage1}
          alt="product-1"
          width="450px"
          height="450px"
        />
      </div>
      <div className="thumbnailImage">
        <div className="thumbnail product1Thumbnail">
          <img 
              src={product1Thumbnail}
              alt="product-1-thumbnail"
              width="100px"
              height="100px"
            />
        </div>
        <div className="thumbnail product2Thumbnail">
          <img 
              src={product2Thumbnail}
              alt="product-2-thumbnail"
              width="100px"
              height="100px"
            />
        </div>
        <div className="thumbnail product3Thumbnail">
          <img 
              src={product3Thumbnail}
              alt="product-3-thumbnail"
              width="100px"
              height="100px"
            />
        </div>
        <div className="thumbnail product4Thumbnail">
          <img 
              src={product4Thumbnail}
              alt="product-4-thumbnail"
              width="100px"
              height="100px"
            />
        </div>
      </div>
      
    </section>
  )
}

export default LeftPageArea