import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

export const Register = () => {
    const handleRegister =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({name, email, password})
    }
    return (
        <div className="flex justify-center items-center p-10">
          <div  className="flex justify-center items-center max-w-4xl bg-blue-50 px-7 py-10 rounded-2xl gap-5">
          <div className="lg:block hidden">
                <div>
                    <h1 className="text-4xl font-extrabold">Welcome to Mobile Shop</h1>
                    <p>Find your device quickly and buy easily using mobile shop . </p>
                </div>
            </div>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
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
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Checkbox
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
                    <Button className="mt-6 bg-blue-500" fullWidth>
                        sign up
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="#" className="font-medium text-gray-900">
                            Sign In
                        </a>
                    </Typography>
                </form>
            </Card>
          </div>
        </div>
    );
}