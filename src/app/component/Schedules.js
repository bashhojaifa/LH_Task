import moment from "moment";

const Schedules = ({ intervals, day }) => {
  return (
    <div className="schedule">
      <div className="schedule_header">
        <h4 className="schedule_header_title">{moment(day).format("ll")}</h4>
        <p className="schedule_header_day">{moment(day).format("dddd")}</p>
      </div>
      {intervals.map((interval) => (
        <>
          <p className="schedule_duration">
            Duration: {interval.begin} - {interval.end}
          </p>
          <ul className="schedule_header_session">
            <li>{interval.sessions[0]?.title}</li>
          </ul>
        </>
      ))}
    </div>
  );
};

export default Schedules;
