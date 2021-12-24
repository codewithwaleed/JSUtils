import "./styles.css";
import {
  getCurrentTimeZone,
  getLocalStringDate,
  getUTCStringDate,
  getISOStringDate
} from "./date";

export default function App() {
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
    </div>
  );
}
