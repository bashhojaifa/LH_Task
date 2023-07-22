"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getConference } from "../api/graphql";

const Conference = () => {
  // data state
  const [data, setData] = useState();

  // api call
  useEffect(() => {
    getConference(setData);
  }, []);

  return (
    <div className="main-conference">
      <h1 style={{ textAlign: "center" }}>Conference</h1>

      {data?.conferences &&
        data.conferences.map((conference, key) =>
          (key + 1) % 2 === 0 ? (
            <div className="conference" key={key}>
              <div className="right-div1 text">
                <small>{conference.startDate}</small>
              </div>
              <div className="main-logo-con">
                <div className="conference-logo">
                  <Image src="/storm_1.svg" alt="" width={30} height={30} />
                </div>
                <div className="conference-colum"></div>
              </div>
              <Link href={`/${conference.id}`}>
                <div className="left-div1">
                  <p>
                    <span></span> {conference.name}
                  </p>
                  <small>{conference.slogan}</small>
                </div>
              </Link>
            </div>
          ) : (
            <div className="conference" key={key}>
              <Link href={`/${conference.id}`}>
                <div className="left-div">
                  <p>
                    <span></span> {conference.name}
                  </p>
                  <small>{conference.slogan}</small>
                </div>
              </Link>
              <div className="main-logo-con">
                <div className="conference-logo">
                  <Image src="/storm_1.svg" alt="" width={30} height={30} />
                </div>
                <div className="conference-colum"></div>
              </div>
              <div className="right-div text">
                <small>{conference.startDate}</small>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default Conference;
