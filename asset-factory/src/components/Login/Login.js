import React from 'react';

import { useForm } from "react-hook-form";

import './Login.css'


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

    const onSubmit = data => console.log(data);

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
