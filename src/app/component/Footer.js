import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className='footer-logo'>
        <Image src="/footer/React.png" width={100} height={27} alt="" />
      </div>
      <div className='social'>
        <div>
          <Image
            className='social_img_icon'
            src="/footer/Social_icon.png"
            width={20}
            height={20}
            alt=""
          />
        </div>
        <div>
          <Image
            className='social_img_icon'
            src="/footer/Social_icon_1.png"
            width={20}
            height={20}
            alt=""
          />
        </div>
        <div>
          <Image
            className='social_img_icon'
            src="/footer/Social_icon_2.png"
            width={20}
            height={20}
            alt=""
          />
        </div>
        <div>
          <Image
            className='social_img_icon'
            src="/footer/Social_icon_3.png"
            width={20}
            height={20}
            alt=""
          />
        </div>
      </div>
      <p className='text'>© 2023 Lemonhive. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
