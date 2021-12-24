const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
];

const longWeekDayOption = { weekday: "long" } as Intl.DateTimeFormatOptions;

export const getUTCStringDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toUTCString();
};

export const getISOStringDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toISOString();
};

export const getLocalStringDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString();
};

export const ifDateInPast = (dateStr: string) => {
  const today = new Date();
  const startDate = new Date(dateStr);
  if (startDate.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0)) {
    return "Yes";
  }

  return "No";
};

export const durationInDays = (dateStr: string) => {
  const d = new Date();
  const futureDate = new Date(dateStr);
  const diff = Math.floor((futureDate.valueOf() - d.valueOf()) / 86400000);

  return diff;
};

export const getCurrentTimeZone = (dateTime: Date) => {
  var offset = dateTime.getTimezoneOffset(),
    o = Math.abs(offset);
  return (
    (offset < 0 ? "+" : "-") +
    ("00" + Math.floor(o / 60)).slice(-2) +
    ":" +
    ("00" + (o % 60)).slice(-2)
  );
};

export const getCurrentTimeZoneRegion = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export const formatDate = (date: Date, format: string) => {
  switch (format) {
    case "yyyy-mm-dd":
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    case "dd-mm-yyyy":
      return `${date.getMonth()}-${date.getMonth()}-${date.getFullYear()}`;
    case "dd-MMM-yyyy":
      return `${date.getMonth()}-${
        months[date.getMonth()]
      }-${date.getFullYear()}`;
    case "yyyy/mm/dd":
      return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
    case "dd/mm/yyyy":
      return `${date.getMonth()}/${date.getMonth()}/${date.getFullYear()}`;
    case "dd/MMM/yyyy":
      return `${date.getMonth()}/${
        months[date.getMonth()]
      }/${date.getFullYear()}`;
    default:
      return "";
  }
};

export const getTime = (dateTime: Date) => {
  const time = dateTime.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric"
  });

  return time;
};

export const getDayDependingOnDate = (date: string) => {
  const createdDate = new Date(date);

  const noOfDays = -durationInDays(date);

  const time = getTime(createdDate);

  let formattedDateTime = "-";
  console.log(noOfDays);
  if (noOfDays === 0) {
    formattedDateTime = `Today ${time}`;
  } else if (noOfDays === 1) {
    formattedDateTime = `Yesterday ${time}`;
  } else if (noOfDays > 1 && noOfDays <= 7) {
    formattedDateTime = `${new Intl.DateTimeFormat(
      "en-US",
      longWeekDayOption
    ).format(createdDate.getDay())} ${time}`;
  } else {
    formattedDateTime = `${createdDate.toDateString()} ${time}`;
  }

  return formattedDateTime;
};
