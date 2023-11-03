import Button from "./Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        <span className="text-coral-red">Suscríbete</span> para obtener las
        ultimas
        <span className="text-coral-red"> Novedades</span>
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subcribe@nike.com"
          name=""
          id=""
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" className="" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
