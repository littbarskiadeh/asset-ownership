import React from 'react';
import { useForm } from "react-hook-form";

export default function Login() {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} />
            <input {...register("password")} />
            <input type="submit" />
        </form>
    );
}
