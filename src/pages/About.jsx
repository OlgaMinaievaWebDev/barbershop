function About() {
  return (
    <section id="about" className="flex flex-col w-full p-6 scroll-smooth">
      <h2 className="text-3xl text-center font-bold mb-6 text-black">
        Welcome to{" "}
        <span className="uppercase text-accent font-black font-stretch-ultra-expanded">
          Noir
        </span>{" "}
        barbershop
      </h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg text-textGray">
        <p>
          Founded in 2012 and Established with a passion for the art of
          barbering and a commitment to our community. We envisioned a place
          where everyone could experience the timeless art of grooming in a
          comfortable and welcoming environment.
        </p>
        <p>
          Our primary goal is to help our clients look and feel their best, no
          matter what service they choose. Whether you're looking for a classic
          haircut, a precision shave, or a stylish beard trim, we are here to
          make it happen.
        </p>
        <p>
          At Noir, we believe that grooming is an essential part of self-care,
          and we take pride in providing a personalized experience for each of
          our clients. We listen carefully to your needs and preferences,
          ensuring that you receive a customized service that meets your unique
          style and tastes.
        </p>
        <p>
          If you're looking for a top-notch grooming experience, we invite you
          to visit us. With our exceptional service and attention to detail,
          we're confident that you'll leave our shop feeling refreshed, relaxed,
          and confident.
        </p>
      </div>
    </section>
  );
}

export default About;
