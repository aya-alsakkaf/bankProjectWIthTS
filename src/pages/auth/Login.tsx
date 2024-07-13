import React, { useContext, useState } from "react";
import money from "../../assets/images/Money income amico.png";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../API/auth";
import UserContext from "../../Context/UserContext";
import NAVIGATION from "../../navigation";

function Login() {
  const { setIsAuthenticated } = useContext(UserContext);
  const navigation = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setIsAuthenticated(true);
      navigation(NAVIGATION.DASHBOARD);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <div className="flex justify-around items-center h-[100vh]">
      <div>
        <img src={money} alt="money" className="w-96 h-96" />
      </div>
      <div className="flex flex-col justify-center gap-2  w-[50%] h-[100vh]">
        <h1 className="text-xl mb-2 text-center">Log In To Your Account</h1>
        <input
          type="text"
          placeholder="Username"
          className="p-2 rounded border "
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded border "
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
        <button
          className="p-2 bg-green-700 text-white rounded text-center"
          onClick={() => mutate()}
        >
          {" "}
          Login{" "}
        </button>

        <h1 className="text-center">
          Already have an account?{" "}
          <Link to={`/register`} className="text-green-700 font-bold ">
            REGISTER
          </Link>{" "}
        </h1>
      </div>
    </div>
  );
}

export default Login;
