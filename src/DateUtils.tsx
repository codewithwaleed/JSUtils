import "./styles.css";
import {
  getCurrentTimeZone,
  getLocalStringDate,
  getUTCStringDate,
  getISOStringDate,
  ifDateInPast,
  durationInDays,
  getCurrentTimeZoneRegion,
  formatDate,
  getTime,
  getDayDependingOnDate
} from "./date";

export default function DateUtils() {
  const dateStr = "2021-12-23";
  const now = new Date();

  return (
    <div className="App">
      <h1>Hello Date Fromats and Settings</h1>
      <p>
        UTC String Date: <span>{getUTCStringDate(dateStr)}</span>
      </p>
      <p>
        ISO String Date: <span>{getISOStringDate(dateStr)}</span>
      </p>
      <p>
        Local String Date: <span>{getLocalStringDate(dateStr)}</span>
      </p>
      <p>
        Get Time Zone: <span>{getCurrentTimeZone(now)}</span>
      </p>
      <p>
        Check if date is in past: <span>{ifDateInPast(dateStr)}</span>
      </p>
      <p>
        Check days duration: <span>{durationInDays(dateStr)}</span>
      </p>
      <p>
        Get Time Zone Region: <span>{getCurrentTimeZoneRegion()}</span>
      </p>
      <p>
        Get formatted Date: <span>{formatDate(now, "dd/MMM/yyyy")}</span>
      </p>
      <p>
        Get formatted Date: <span>{getTime(now)}</span>
      </p>
      <p>
        Get formatted Date: <span>{getDayDependingOnDate("2021-12-12")}</span>
      </p>
    </div>
  );
}
