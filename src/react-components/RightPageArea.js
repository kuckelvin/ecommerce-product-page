import ProductPrice from "./ProductPrice.js"
import AddToCart from "./AddToCart.js"

const RightPageArea = () => {
  return (
    <section className="rightPageArea">
      <h4>SNEAKER COMPANY</h4>
      <h1>
        <b>Fall Limited Edition Sneakers</b>
      </h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <ProductPrice />
      <AddToCart />
    </section>
  );
};

export default RightPageArea;
