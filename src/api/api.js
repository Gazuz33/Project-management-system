import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "723d1c66-1150-4725-9fd5-40447f80529e",
      }
});
export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(
           `users?page=${currentPage}&${pageSize}`
          )
          .then((response) => {
            return response.data;
          });
      }
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(
         `users?page=${currentPage}&${pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        return response.data;
      });
  };
  