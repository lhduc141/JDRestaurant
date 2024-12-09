import { http } from "../urlCofig";

export const userService = {
  postLogin: (data) => {
    let url = "/auth/v1/login";
    return http.post(url, data);
  },
  postSignUp: (data) => {
    let url = "/auth/signup";
    return http.post(url, data);
  },

  getInfor: (data) => {
    let url = `/user/${data}`;
    return http.get(url);
  },
  editProfile: (id, infor) => {
    let url = `/user/${id}/edit`;
    console.log("infor:", infor);
    console.log("url:", url);
    return http.put(url, infor);
  },

  //   get all dishes in menu
  showMenu: () => {
    let url = `/table/v1/menu-item`;
    return http.get(url);
  },
};
