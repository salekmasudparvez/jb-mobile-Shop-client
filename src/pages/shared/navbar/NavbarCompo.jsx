import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Input,
  Button,
  MenuHandler,
  Menu,
  Avatar,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavList from "./NavList";
import useRole from "../../../hooks/useRole/useRole";
import useAuth from "../../../hooks/useAuth/useAuth";
import { Link } from "react-router-dom";

const NavbarCompo = () => {
  const [openNav, setOpenNav] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, LogOutUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [role] = useRole();
  const closeMenu = () => setIsMenuOpen(false);


  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);



  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.name.value)
    // Implement search logic here
  };

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 space-y-3">
      <div>
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="h6"
            className="mr-4 text-2xl cursor-pointer py-1.5 text-primary"
          >
            Mobile Shop
          </Typography>



          <form onSubmit={handleSearch} className="relative hidden lg:flex w-full max-w-[24rem]">
            <Input
              type="text"
              label="Search by name..."
              name="name"
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color="#fff"
              type="submit"
              className="!absolute right-1 top-2 rounded p-0 shadow-none hover:shadow-none bg-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </Button>
          </form>

          <div className="hidden lg:block">
            <NavList />
          </div>

          <div className="lg:hidden flex justify-end  flex-grow">
            <Button
              size="sm"
              color="#fff"
              onClick={() => setOpen(!open)}
              className=" rounded p-0 shadow-none hover:shadow-none bg-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </Button>
          </div>
          <div className="px-5 lg:hidden flex">
            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
              <MenuHandler>
                <Button
                  onClick={closeMenu}
                  variant="text"
                  color="blue-gray"
                  className="lg:hidden flex items-center rounded-full p-0"
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
                  {role === "admin" && <Link to="/add-product" className="flex rounded-sm  gap-1 justify-start hover:bg-white px-2 py-1 w-full  items-center">
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
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </div>
      {open && <div className="flex justify-center">
        <form onSubmit={handleSearch} className="relative flex lg:hidden w-full max-w-[24rem]">
          <Input
            type="text"
            label="Search by name..."
            name="name"
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color="#fff"
            type="submit"
            className="!absolute right-1 top-2 rounded p-0 shadow-none hover:shadow-none bg-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          </Button>
        </form>
      </div>}
    </Navbar>
  );
}
export default NavbarCompo