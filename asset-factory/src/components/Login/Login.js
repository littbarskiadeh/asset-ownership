import React from 'react';

import { useForm } from "react-hook-form";

import './Login.css'

import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

/**
 * const {role} = user
const components = {
  ADMIN: AdminUser,
  EMPLOYEE: EmployeeUser,
  USER: NormalUser
};
const Component = components[role];
return <Componenent />;
 */

export default function Login() {

    const { register, handleSubmit } = useForm();
    const [state, dispatch] = useStateValue();

    const onSubmit = (data) => {
        console.log(data)

        dispatch({ //add user too the 'Data Layer' => StateProvider, global state
            type: actionTypes.SET_USER,
            user: data.email
        })
    };

    return (
        <div className="container">
            {/* Add Img here */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} />
                <input {...register("password")} />
                <input type="submit" />
            </form>
        </div>
    );
}