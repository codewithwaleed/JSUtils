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
