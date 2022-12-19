const { apiPath } = require("app/apiPath");
const getScheduleMovieCinema = async (maHeThongRap) => {
  const res = await requester({
    method: "GET",
    url: apiPath.SCHEDULE_CINEMAS + `?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
  });
  return res;
};
export { getScheduleMovieCinema };
