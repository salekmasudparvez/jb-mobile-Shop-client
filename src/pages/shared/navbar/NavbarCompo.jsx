import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavList from "./NavList";

const NavbarCompo = () => {
  const [openNav, setOpenNav] = useState(false);
  const [open, setOpen] = useState(false);

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
            className="mr-4 cursor-pointer py-1.5 text-primary"
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
              onClick={()=>setOpen(!open)}
              className=" rounded p-0 shadow-none hover:shadow-none bg-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </Button>
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