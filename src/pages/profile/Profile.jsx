import useAuth from "../../hooks/useAuth/useAuth"
import React, { useRef } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import PhotoUpload from "../../components/PhotoUpload";
import toast from "react-hot-toast";


const Profile = () => {
  const { user ,updateUserProfile} = useAuth();
  const [file, setFile] = React.useState(null);
  const newName = useRef('')
console.log(file)
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  const handleModal = () => {
    setOpen(!open);
  } 
  
 const handleUpdate =()=>{
  const displayNameValue = newName.current.value;
    console.log(displayNameValue);
    updateUserProfile(displayNameValue,)
  //handleOpen()
 }
  return (

    <>
      <div className="max-w-lg mx-auto my-10 bg-gray-100 rounded-lg shadow-md p-5 relative">
        <img className="w-32 h-32 rounded-full mx-auto" src={user?.photoURL || 'https://i.ibb.co.com/t3n0XR7/240.jpg'} alt="Profile picture" />
        <h2 className="text-center text-2xl font-semibold mt-3">{user?.displayName}</h2>
        <p className="text-center text-gray-600 mt-1">Guest</p>
        <button onClick={handleModal} className="absolute top-4 right-4 flex items-center gap-2 bg-gray-300 px-2 rounded hover:bg-gray-400 active:bg-gray-400">
          <h1>Edit</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>

        </button>

        <div className="mt-5">
          <h3 className="text-xl font-semibold">Purchess History</h3>

        </div>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Edit Profile</DialogHeader>
        <DialogBody>
          <PhotoUpload 
          setFile={setFile}
          file={file}
          ></PhotoUpload>
        <Input
        inputRef={newName}
        defaultValue={user?.displayName}
        variant="standard"
        label="Display Name"
        name="namne"
        placeholder="Display Name"
      />
        
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleUpdate}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
export default Profile