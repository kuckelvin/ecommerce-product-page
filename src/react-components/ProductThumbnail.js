import { useContext } from "react"
import ProductContext from "../react-context/ProductContext"
import cn from "classnames"

const ProductThumbnail = ({
  src,
  alt,
  id,
  onShow,
  border,
}) => {
  const {onModalShow, activeId} = useContext(ProductContext)

  

  return (
    <div
      className={`thumbnail${id} ${cn(id===activeId && "border")}`}
      onClick={(e) => {
        onShow(id);
        border(e.currentTarget.id);
        //toggleActive();
      }}
      onDoubleClick={(e)=>onModalShow(e.currentTarget.id)}
      style={{ width: "100px", height: "100px",  }}
      //className={`${clicked}${number}`}
      
    >
      <img src={src} alt={alt} />
    </div>
  )
}

export default ProductThumbnail
