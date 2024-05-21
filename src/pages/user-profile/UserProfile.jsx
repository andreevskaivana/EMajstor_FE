import {useEffect, useState} from "react";
import { UserService } from "../../services/user-service.js";

export const UserProfile = () => {
    const [user, setUser] = useState({});

    const getUserProfile = () => {
        const appUserId = localStorage.getItem("appUserId");
        console.log(appUserId)
        UserService.getUserById(appUserId)
            .then(res => {
                if (res.data) {
                    setUser(res.data);
                }
            }).catch(error => {
            console.error(error);
        });
    };

    useEffect(() => {
        getUserProfile()
    }, []);
    return (
        <div>
            {/*<button onClick={getUserProfile}>Get User Profile</button>*/}
            <div>
                <h2>User Profile</h2>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Last Name: {user.email}</p>
                <p>Phone Number: {user.phoneNumber}</p>
            </div>
        </div>
    );
};
