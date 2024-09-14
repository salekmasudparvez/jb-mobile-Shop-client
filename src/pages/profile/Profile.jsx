import useAuth from "../../hooks/useAuth/useAuth"

const Profile = ()=>{
  const {user}= useAuth()
    return(

        <body className="bg-gray-100">
          <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
            <img className="w-32 h-32 rounded-full mx-auto" src={user?.photoURL||'https://i.ibb.co.com/t3n0XR7/240.jpg'} alt="Profile picture" />
            <h2 className="text-center text-2xl font-semibold mt-3">{user?.displayName}</h2>
            <p className="text-center text-gray-600 mt-1">Guest</p>
           
            <div className="mt-5">
              <h3 className="text-xl font-semibold">Purchess History</h3>
          
            </div>
          </div>
        </body>
    )
}
export default Profile