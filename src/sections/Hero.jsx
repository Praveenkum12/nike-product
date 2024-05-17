import Button from "../components/Button";

function Hero() {
  return (
    <div>
      <section
        id="home"
        className="max-container flex min-h-screen w-full justify-center xl:flex-row "
      >
        <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
          <p>Our Summer Colletion</p>
          <h1>
            <span>The New Arrival</span>
            <br />
            <span>Nike Shoes</span>
          </h1>
          <p>
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Show now" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
