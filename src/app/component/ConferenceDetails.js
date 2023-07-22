import Image from "next/image";

const ComponentDetails = (details) => {
  const { name, aboutShort, image, social } = details;
  return (
    <div className="right_img_text">
      <div>
        <Image
          className="bio_img"
          src={image?.url}
          alt={name}
          width={100}
          height={100}
        />
      </div>
      <div className="bio">
        <div className="bio_header">
          <h4>{name}</h4>
          {social && (
            <div className="social_icon">
              <a href={social?.twitter} target="_blank">
                <Image
                  className="speaker_social_icon"
                  src="/twitter.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </a>
              <a href={social?.linkedin} target="_blank">
                <Image
                  className="speaker_social_icon"
                  src="/linkedin.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </a>
              <a href={social?.dribble} target="_blank">
                <Image
                  className="speaker_social_icon"
                  src="/dribbble.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </a>
              <a href={social?.github} target="_blank">
                <Image
                  className="speaker_social_icon"
                  src="/github.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </a>
            </div>
          )}
        </div>
        <p>{aboutShort}</p>
      </div>
    </div>
  );
};

export default ComponentDetails;
