import axios, { handleNetworkError } from "../index";

// export const getFestaList = async (page = 1) => {
//   const res = await axios
//     .get(`/alarm/?page=${page}`)
//     .then(({ data }) => data)
//     .catch(handleNetworkError);
//   return res;
// };

export const getFestaList = async () => {
  const res = await axios
    .get(`/api/v1/events/playing`)
    .then(({ data }) => data)
    .catch(handleNetworkError);
  return res;
};

// export const alarmUpdate = async (id, isRead) => {
//   const res = await axios
//     .put(`/alarm/${id}/`, { is_read: isRead })
//     .then(({ data }) => data)
//     .catch(handleNetworkError);
//   return res;
// };

// export const alarmPartialUpdate = async (id, isRead) => {
//   const res = await axios
//     .patch(`/alarm/${id}/`, { is_read: isRead })
//     .then(({ data }) => data)
//     .catch(handleNetworkError);
//   return res;
// };

// export const alarmHasUnreadAlarms = async () => {
//   const res = await axios
//     .get("/alarm/has_unread_alarms/")
//     .then(({ data }) => data)
//     .catch(() => {
//       return { is_exist: false, count: 0 };
//     });
//   return res;
// };
