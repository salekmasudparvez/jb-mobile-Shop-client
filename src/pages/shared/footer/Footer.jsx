

import { Typography } from "@material-tailwind/react";
 
 const Footer=()=> {
  return (
    <footer className="w-full bg-primary p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-white text-center md:justify-between">
      <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-white"
        >
          Mobile Shop
        </Typography>
        <ul className="flex flex-wrap text-white items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
             Home
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/contact"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-white-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; {new Date().getFullYear()} Mobile shop
      </Typography>
    </footer>
  );
}
export default Footer