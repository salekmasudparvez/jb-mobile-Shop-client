import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import { format } from "date-fns";
import axios from 'axios';

export const Register = () => {
    const [check, setCheck] = useState(false);
    const {creatUserPassword,updateUserProfile,setUser,creatUserGoogle} = useAuth();
    const navigate = useNavigate()
    const handleInputChange = (e) => {
        //e.preventDefault();
        //console.log(e.target.checked)
        setCheck(e.target.checked)
    }
    const handleRegister = async(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password =
         e.target.password.value;
        if (!check) {
            return toast.error("You must agree to the Terms and Conditions.")
        }
        if (!name) {
            return toast.error("Name is required.")
        }
        if (!email) {
            return toast.error("Email is required.")
        }
        if (!password) {
            return toast.error("Password is required.")
        }
        if (!/^.{6,}$/.test(password)) {
            return toast.error("Password must be at least 6 characters long.");
        }
        
        // console.log({ name, email, password, checkbox: check })
       try {
        const response = await creatUserPassword(email, password);
        console.log(response.user.email)
        await updateUserProfile(name);
        const newUserDoc = {
            name,
            email,
            role:'user',
            photoURL:response.user.photoURL || "",
            time:format(new Date(2014, 1, 11), "dd/MM/yyyy")
        };
        
        const  newUser =await axios.post('http://localhost:5000/register', newUserDoc)
        setUser({ ...response?.user, displayName: name })
        if(response && newUser){
            toast.success('Successfully created Account');
            navigate('/')
        }
       } catch (error) {
        console.log(error.message);
        if(error?.message==='Firebase: Error (auth/email-already-in-use).'){
           toast.error('Email already in use.');
        }else{
            toast.error('Failed to create Account');
        }
       }
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
                       Registration
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to register.
                    </Typography>
                    <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-3">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input
                                size="md"
                                name="name"
                                placeholder="Enter your name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
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
                            sign up
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
                            onClick={creatUserGoogle}
                            color="blue-gray"
                            className="flex items-center gap-3"
                        >
                            <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
                            Continue with Google
                        </Button>
                    </div>
                    <div>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <Link to="/login" className="font-medium text-gray-900">
                                Log in
                            </Link>
                        </Typography>
                    </div>

                </Card>
            </div>
        </div>
    );
}