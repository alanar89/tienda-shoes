import { shoe8 } from "../assets/images";
import Button from "./Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex
   justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          Proporcionamos
          <span className="text-coral-red "> Calzados </span>
          <span className="text-coral-red "> de Super </span> Calidad
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Garantizando comodidad y estilo premium, nuestro calzado
          meticulosamente elaborado está diseñado para mejorar su experiencia,
          brindándole una experiencia inigualable Calidad, innovación y un toque
          de elegancia.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Nuestra dedicación al detalle y la excelencia garantiza su
          satisfacción.
        </p>
        <div className="mt-11">
          <Button label="Ver Detalles" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
