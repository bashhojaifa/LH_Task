let url = "https://api.react-finland.fi/graphql";
let header = {
  "Content-Type": "application/json",
};

export const getConference = async (setData) => {
  let results = await fetch(url, {
    method: "POST",
    headers: header,

    body: JSON.stringify({
      query: `{
                conferences {
                  id
                  name
                  slogan
                  startDate
                }
        }`,
    }),
  });
  let characters = await results.json();
  setData(characters.data);
};

export const detailsConference = async (setData, conferenceId) => {
  let results = await fetch(url, {
    method: "POST",
    headers: header,

    body: JSON.stringify({
      query: `{
        conference(id: ${JSON.stringify(conferenceId)}) {
          name
          slogan
          organizer {
            name
            aboutShort
            image {
              url
            }
          }
          speakers {
            name
            aboutShort
            social {
              twitter
              github
              linkedin
              dribble
            }
            image {
              url
            }
          }
          schedules {
            day
            intervals {
              begin
              end
              sessions {
                title
              }
            }
          }
          sponsors {
            name
            aboutShort
            image {
              url
            }
          }
        }
      }
      `,
    }),
  });
  let characters = await results.json();
  setData(characters.data?.conference);
};
