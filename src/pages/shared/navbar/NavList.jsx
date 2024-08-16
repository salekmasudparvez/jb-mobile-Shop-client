
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";
import { useState } from "react";
import {
    Avatar,
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Spinner,
    Typography,
} from "@material-tailwind/react";
import useRole from "../../../hooks/useRole/useRole";


const NavList = () => {
    const { user, LogOutUser, loading } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const[role,isLoading]=useRole();
   

    const closeMenu = () => setIsMenuOpen(false);
    if (loading || isLoading) {
        return <div className="flex justify-center items-center ">
            <Spinner className="h-10 w-10" />
        </div>
    }
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
            {user ?
                <>
                    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                        <MenuHandler>
                            <Button
                                onClick={closeMenu}
                                variant="text"
                                color="blue-gray"
                                className="lg:flex hidden items-center rounded-full p-0"
                            >
                                <Avatar
                                    variant="circular"
                                    size="md"
                                    alt="tania andrew"
                                    withBorder={true}
                                    color="blue-gray"
                                    className=" p-0.5"
                                    src={user?.photoURL || "https://i.imgur.com/7Y3PdKY.png"}
                                />
                            </Button>
                        </MenuHandler>
                        <MenuList className="p-1">
                            <MenuItem

                                className={`flex flex-col justify-center items-start text-left gap-2 rounded hover:bg-white "
                                        
                                    }`}
                            >
                                {role==="admin" && <Link to="/add-product" className="flex rounded-sm  gap-1 justify-start hover:bg-white px-2 py-1 w-full  items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>



                                    <Typography
                                        as="span"
                                        variant="small"

                                        className="font-normal"
                                        color={"inherit"}
                                    >
                                        Add product
                                    </Typography>
                                </Link>}
                                <a onClick={LogOutUser} className="flex rounded-sm  gap-1 justify-start hover:bg-white px-2 py-1 w-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                                    </svg>


                                    <Typography
                                        as="span"
                                        variant="small"

                                        className="font-normal"
                                        color={"inherit"}
                                    >
                                        Sign Out
                                    </Typography>
                                </a>

                            </MenuItem>
                        </MenuList>
                    </Menu>
                </>
                : <>
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
                    </Typography></>
            }
        </ul>
    );
}
export default NavList