import productImages from "../productImages.json"
import ProductThumbnail from "./ProductThumbnail"
import ProductImage from "./ProductImage"
import { useState } from "react"
import {motion, AnimatePresence} from "framer-motion"

const LeftPageArea = ({ onModalShow }) => {
  const [activeImage, setActiveImage] = useState(productImages[0].imageSource)
  const [activeAlt, setActiveAlt] = useState(productImages[0].imageAltText)
  const [clicked, setClicked] = useState("")
  const [active, setActive] = useState(true)

  const onShow = (id) => {
    setActiveImage(productImages[(parseFloat(id)-1)].imageSource)
    setActiveAlt(productImages[(parseFloat(id)-1)].imageSource)
    //id ? setActive("active") : setActive("")
  }
  
  const select = (e) => {
    clicked ? setClicked("") : setClicked("bordered")
  }


  return (
    <section className="leftPageArea">
      <AnimatePresence>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
          {active ?
            <ProductImage 
              src={activeImage} 
              alt={activeAlt}
            />
          : setActive(false)
          }  
          </motion.div>
      </AnimatePresence>
      <div className="thumbnailImage">
        {productImages.map((thumbnail, index) => {
          return (
            <div
              key={index}
              className="thumbnail"
            >
              <ProductThumbnail
                number={index + 1}
                src={thumbnail.thumbnailSource}
                alt={thumbnail.thumbnailAltText}
                onShow={onShow}
                border={select}
                clicked={clicked}
                active={active}
                onModalShow={onModalShow}
              />
            </div>
          )
        })}
      </div>
      
    </section>
  )
}

export default LeftPageArea;
