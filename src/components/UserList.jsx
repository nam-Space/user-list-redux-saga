import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_USER, FETCH_USER } from "../redux/action";

import "../styles/userList.css";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const handleGetUsers = () => {
        dispatch({ type: FETCH_USER, payload: "" });
    };

    const handleDeleteUser = (id) => {
        if (window.confirm("Are you sure to delete the user?")) {
            dispatch({ type: DELETE_USER, payload: id });
        }
    };

    return (
        <div className="wrapper">
            <h1>User list</h1>
            <button name="getUsers" onClick={handleGetUsers}>
                Get users
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>
                                <button
                                    className="deleteUser"
                                    onClick={() => handleDeleteUser(user.id)}
                                >
                                    Delete user
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
