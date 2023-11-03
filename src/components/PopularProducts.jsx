import { products } from "../constants/index.js";
import PopularProductCard from "./PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className=" flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Nuestros
          <span className="text-coral-red"> Productos</span> Populares
        </h2>
        <p className="lg:max-w-lg mt-2 font-monserrat text-slate-gray">
          No te pierdas los calzados icónicos de nike. Experimente calidad y
          estilo de primer nivel. Descubra un mundo de comodidad, diseño y
          valor.
        </p>
      </div>
      <div className="mt-16  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
