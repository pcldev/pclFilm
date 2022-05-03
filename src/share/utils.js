export const calculateCreatedTime = (timeCreated) => {
  let periods = {
    year: 365 * 30 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
  };
  let diff = Date.now() - timeCreated;

  for (const key in periods) {
    if (diff >= periods[key]) {
      let result = Math.floor(diff / periods[key]);
      return `${result} ${result === 1 ? key : key + "s"} ago`;
    }
  }

  return "Just now";
};

export const convertQualityToString = (groot) => {
  if (groot === "GROOT_HD") {
    return "Full HD";
  } else if (groot === "GROOT_SD") {
    return 720;
  } else if (groot === "GROOT_LD") {
    return 540;
  }
};
