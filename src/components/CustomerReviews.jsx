import { reviews } from "../constants";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Nuestros
        <span className="text-coral-red"> Clientes</span>
      </h3>
      <p className="info-text m-auto text-center mt-4 max-w-lg ">
        Escuche historias genuinas de nuestros clientes satisfechos sobre sus
        experiencias excepcionales con nosotros.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-cener  max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
