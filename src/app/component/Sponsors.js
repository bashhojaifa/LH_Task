import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="our">
      <div>
        <h1>Our Sponsor</h1>
        <div>
          <Image src="/Text.png" width={100} height={15} alt="" />
        </div>
      </div>
      <div className="logo-one">
        <div>
          <Image src="/Vector.png" width={200} height={75} alt="" />
        </div>
        <div>
          <Image src="/Vector2.png" width={200} height={75} alt="" />
        </div>
      </div>

      <div>
        <div className="logo-three">
          <div>
            <Image src="/one.png" width={200} height={75} alt="" />
          </div>
          <div>
            <Image src="/two.png" width={200} height={75} alt="" />
          </div>
          <div>
            <Image src="/three.png" width={200} height={75} alt="" />
          </div>
        </div>

        <div>
          <Image src="/Text1.png" width={110} height={15} alt="" />
        </div>
      </div>

      <div className="logo-three">
        <div>
          <Image src="/Vector5.png" width={200} height={75} alt="" />
        </div>
        <div>
          <Image src="/Vector6.png" width={200} height={75} alt="" />
        </div>
        <div>
          <Image src="/Vector7.png" width={200} height={75} alt="" />
        </div>
        <div>
          <Image src="/Vector8.png" width={200} height={75} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
