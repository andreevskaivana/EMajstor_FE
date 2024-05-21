import instance from "../config/axios.js";

export const UserService = {
    getUserById: (appUserId) => {
        return instance.get(`api/user/${appUserId}`);
    }
};



