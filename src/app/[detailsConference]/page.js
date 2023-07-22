"use client";
import { useEffect, useState } from "react";
import { detailsConference } from "../api/graphql";
import ComponentDetails from "../component/ConferenceDetails";
import Schedules from "../component/Schedules";
import "../styles/conferenceDetails.css";
import dragAndDrop from "../utils/utils";

const Page = ({ params }) => {
  const conferenceId = params?.detailsConference;

  // data state
  const [data, setData] = useState();

  // active item state
  const [activeItem, setActiveItem] = useState("organizer");

  useEffect(() => {
    // conferences get api call
    detailsConference(setData, conferenceId);

    // drag and drop method
    dragAndDrop();
  }, [conferenceId]);

  return (
    <section id="about" className="main">
      <div className="title_section">
        <h1>{data?.name}</h1>
        <p>{data?.slogan}</p>
      </div>
      <div className="tabs">
        <ul className="sortable_list">
          <li
            className={`item ${activeItem === "organizer" ? "active" : ""}`}
            draggable="true"
            onClick={() => setActiveItem("organizer")}
          >
            <div className="details">
              <span className="list_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </span>
              <span className="list_name">Organizer</span>
            </div>
          </li>
          <li
            className={`item ${activeItem === "speakers" ? "active" : ""}`}
            draggable="true"
            onClick={() => setActiveItem("speakers")}
          >
            <div className="details">
              <span className="list_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </span>
              <span className="list_name">Speakers</span>
            </div>
          </li>
          <li
            className={`item ${activeItem === "schedules" ? "active" : ""}`}
            draggable="true"
            onClick={() => setActiveItem("schedules")}
          >
            <div className="details">
              <span className="list_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </span>
              <span className="list_name">Schedule</span>
            </div>
          </li>
          <li
            className={`item ${activeItem === "sponsors" ? "active" : ""}`}
            draggable="true"
            onClick={() => setActiveItem("sponsors")}
          >
            <div className="details">
              <span className="list_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </span>
              <span className="list_name">Sponsor</span>
            </div>
          </li>
        </ul>

        <div>
          <>
            <div className="right_tab">
              {/* organizer */}
              {activeItem === "organizer" &&
                (data?.organizer ? (
                  <ComponentDetails {...data?.organizer} />
                ) : (
                  "Data not available"
                ))}
              {/* end organizer */}

              {/* speakers */}
              {activeItem === "speakers" &&
                (data?.speakers.length
                  ? data?.speakers.map((speaker, key) => (
                      <ComponentDetails key={key} {...speaker} />
                    ))
                  : "Data not available")}
              {/* end speakers */}

              {/* schedule */}
              {activeItem === "schedules" &&
                (data?.schedules.length
                  ? data?.schedules.map((schedule, key) => (
                      <Schedules key={key} {...schedule} />
                    ))
                  : "Data not available")}
              {/* end schedule */}

              {/* sponsors */}
              {activeItem === "sponsors" &&
                (data?.sponsors.length
                  ? data.sponsors.map((sponsor, key) => (
                      <ComponentDetails key={key} {...sponsor} />
                    ))
                  : "Data not available")}
              {/* end sponsors */}
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default Page;
