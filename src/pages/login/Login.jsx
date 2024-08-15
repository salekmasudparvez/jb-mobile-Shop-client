

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import toast from 'react-hot-toast';
import { Link, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";

export const Login = () => {
    const { user, signInWithPassword } = useAuth()
    const [check, setCheck] = useState(false)
    const handleInputChange = (e) => {

        setCheck(e.target.checked)
    }
    const handleRegister = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        if (!check) {
            return toast.error("You must agree to the Terms and Conditions.")
        }

        if (!email) {
            return toast.error("Email is required.")
        }
        if (!password) {
            return toast.error("Password is required.")
        }
        //console.log({ email, password, checkbox: check })
        try {
            const response = await signInWithPassword(email, password)

            if (response) {
                toast.success("Logged in successfully.")
            }

        } catch (error) {
            console.log(error.message)
            if(error?.message==='Firebase: Error (auth/invalid-credential).'){
                toast.error("Invalid email or password.")
            }else{
                toast.error("Something went wrong")
            }
        }
    }
    if (user) {
        return <Navigate to="/"></Navigate>
    }
    return (
        <div className="flex justify-center items-center p-10">
            <div className="flex justify-center items-center max-w-4xl bg-blue-50 px-7 py-10 rounded-2xl gap-5">
                <div className="lg:block hidden">
                    <div>
                        <h1 className="text-4xl font-extrabold">Welcome to Mobile Shop</h1>
                        <p>Find your device quickly and buy easily using mobile shop . </p>
                    </div>
                </div>
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Login now
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to register.
                    </Typography>
                    <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-3">

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                size="md"
                                placeholder="name@mail.com"
                                name="email"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                type="password"
                                size="md"
                                name="password"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <Checkbox
                            onChange={handleInputChange}
                            name="checkbox"
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <Button type="submit" className="mt-6 bg-blue-500" fullWidth>
                            Log in
                        </Button>
                    </form>
                    <div className="flex justify-center items-center my-2">
                        <span className="border-t border-gray-800 flex grow"></span>
                        <span className="px-2">Or</span>
                        <span className="border-t border-gray-800 flex-grow"></span>
                    </div>
                    <div className="flex justify-center ">
                        <Button
                            size="md"
                            variant="outlined"
                            color="blue-gray"
                            className="flex items-center gap-3"
                        >
                            <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
                            Continue with Google
                        </Button>
                    </div>
                    <div>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Don&lsquo;t have any account?{" "}
                            <Link to="/register" className="font-medium text-gray-900">
                                Register
                            </Link>
                        </Typography>
                    </div>

                </Card>
            </div>
        </div>
    );
}