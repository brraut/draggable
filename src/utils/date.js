import moment from "moment";
import DateConverter from "./DateConverter";

export const convertToNepali = (date) => {
  if (date) {
    const bs = DateConverter.toBS(date);
    return bs;
  }
};

export const convertToEnglish = () => {
  const ad = DateConverter.toAD("2079-03-31", "DD/MM/YYYY");

  return ad;
};
export const formatToUnix = (date) => {
  const bs = DateConverter.ConvertToDateObject(date, "YYYY-MM-DD");
  const ad = DateConverter.BS2AD(bs);
  const finalAd = DateConverter.ConvertDateFormat(ad, "YYYY-MM-DD");
  let current_time = moment().format("HH:mm:ss");
  return moment(finalAd + " " + current_time).valueOf();
};

export const formatDate = (timestamp, format = "YYYY-MM-DD") => {
  return moment(timestamp).format(format);
};

formatDate.defaultProps = {
  format: "LLL",
};
