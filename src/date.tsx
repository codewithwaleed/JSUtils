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
