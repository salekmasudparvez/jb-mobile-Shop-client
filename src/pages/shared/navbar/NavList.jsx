import {

    Button,
    Typography,

} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const NavList = () => {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/" className={({ isActive }) => isActive ? "flex items-center text-blue-500 transition-colors" : "flex items-center hover:text-blue-500 transition-colors"}>
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/contact" className={({ isActive }) => isActive ? "flex items-center text-blue-500 transition-colors" : "flex items-center hover:text-blue-500 transition-colors"}>
                    Contact
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/register" className={({ isActive }) => isActive ? "flex items-center text-blue-200 transition-colors" : "flex items-center hover:text-blue-500 transition-colors"}>
                    <Button className="bg-blue-500">Register</Button>
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >

                <NavLink to="/login" className={({ isActive }) => isActive ? "flex items-center text-blue-500 transition-colors" : "flex text-primary items-center hover:text-blue-500 transition-colors"}>
                    <Button className="bg-secondary text-primary">Log in</Button>
                </NavLink>
            </Typography>
        </ul>
    );
}
export default NavList