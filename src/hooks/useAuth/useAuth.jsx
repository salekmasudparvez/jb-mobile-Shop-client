import { useContext } from "react";
import { AuthContext } from "../../authprovider/Authprovider";



const useAuth =()=>{
    const data = useContext(AuthContext);
    return data
}
export default useAuth