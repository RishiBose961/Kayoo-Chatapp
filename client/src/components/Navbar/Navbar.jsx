import { LogInIcon } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/userApiSlice";
import { logout } from "../../slices/authSlices";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [logoutApiCall] = useLogoutMutation();


  const logoutHandler = async()=>{
    try {
      await logoutApiCall().unwrap();
      dispatch(logout())
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Kayoo {userInfo?.username}</a>
      </div>
      <div className="flex-none mx-3">
       <LogInIcon className=" cursor-pointer" onClick={logoutHandler}/>
      </div>
    </div>
  );
};

export default Navbar;
