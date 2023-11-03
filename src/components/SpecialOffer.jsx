import { arrowRight } from "../assets/icons";
import Button from "./Button";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red ">Ofertas </span>
          Especiales
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embárcate en un viaje de compras que redefine tu experiencia con
          ofertas inmejorables. Desde selecciones de primer nivel hasta ahorros
          increíbles, nosotros ofrecer un valor incomparable que nos diferencia.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navega por un reino de posibilidades diseñado para satisfacer sus
          necesidades únicas.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Comprar" iconURL={arrowRight} />
          <Button
            label="Saber mas"
            backgroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
