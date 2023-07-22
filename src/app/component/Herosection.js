import Image from "next/image";

const Herosection = () => {
  return (
    <main>
      <div class="header-text">
        <div class="hed-of-R"></div>
        <h1>React Conference</h1>

        <div class="back-img"></div>

        <div className="header4">
          <p>
            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
            fermentum..id fermentum.In quis diam turpis quam id fermentum.
          </p>
          <button className="button">
            Buy Tickets <span className="arrow">↗</span>
          </button>
        </div>
      </div>
      <div className="main-header">
        <div className="header1">
          <Image
            className="header1"
            src="/herosectionImage_1.png"
            alt=""
            width={250}
            height={315}
          />
        </div>
        <div className="header2">
          <p>
            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
            fermentum..id fermentum.In quis diam turpis quam id fermentum.
          </p>
          <button className="button">
            Buy Tickets <span className="arrow">↗</span>
          </button>
        </div>
        <div className="header3">
          <Image
            className="img-one"
            src="/hero-one.png"
            alt=""
            width={504}
            height={521}
          />
          <Image
            className="img-two"
            src="/Screenshot_1.png"
            alt=""
            width={403}
            height={432}
          />
        </div>
      </div>
    </main>
  );
};

export default Herosection;
