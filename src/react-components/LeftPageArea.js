import productImages from "../productImages.json"
import ProductThumbnail from "./ProductThumbnail"
import ProductImage from "./ProductImage"
import {motion, AnimatePresence} from "framer-motion"
import { useContext } from "react"
import ProductContext from "../react-context/ProductContext"


const LeftPageArea = () => {
  const {activeImage, activeAlt, clicked, select, onShow, activeId} = useContext(ProductContext)
  

  return (
    <section className="leftPageArea">
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <ProductImage id={activeId} src={activeImage} alt={activeAlt} />
        </motion.div>
      </AnimatePresence>
      <div className="thumbnailImage">
        {productImages.map((thumbnail) => {
          return (
            <div key={thumbnail.id} className="thumbnail">
              <ProductThumbnail
                id={thumbnail.id}
                src={thumbnail.thumbnailSource}
                alt={thumbnail.thumbnailAltText}
                onShow={onShow}
                border={select}
                clicked={clicked}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default LeftPageArea;
