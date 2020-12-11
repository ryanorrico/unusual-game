import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

export const createdLessThanAMinuteAgo = (object) => {
  let bool = (new Date() - new Date(object.created_at)) / 1000 < 60;
  return bool;
};

export const timeAgoInWords = (object) => {
  dayjs.extend(duration);
  dayjs.extend(relativeTime);
  let objCreated = dayjs(object.created_at);
  let now = new Date();
  let string = dayjs
    .duration(objCreated.diff(now, "minute"), "minutes")
    .humanize();
  let num = string.split(" ")[0];
  let label = string.split(" ")[1].split("")[0];

  return {
    full_string: `${string}`,
    one_letter: `${num}${label}`,
  };
  // return `${num}${label}`;
};

export const formattedTimeAgoInWords = (object) => {
  if (createdLessThanAMinuteAgo(object)) {
    return timeAgoInWords(object).full_string;
  } else {
    return timeAgoInWords(object).one_letter;
  }
};
