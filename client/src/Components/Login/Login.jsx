import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
  let navigate = useNavigate();
  const handleSignup = (e) => {
    navigate("/signup", { replace: true });
  };

  const handleSignIn = (e) => {
    const { value: email } = document.getElementById("username-or-email");
    const { value: password } = document.getElementById("password");

    axios
      .post("/login", { email, password })
      .then((res) => {
        console.log(res);
        props.handleLogin(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="grid w-screen justify-items-center pt-10">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7">
            <div className="flex flex-col items-center justify-between">
              <label className="  text-xl">Welcome</label>
            </div>

            <div className="mb-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                autoComplete="true"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                autoComplete="true"
              />
              <p className=" text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <Link to="/signup">
                <div
                  className="inline-block align-baseline font-bold text-sm hover:yellow"
                  href="/"
                >
                  New Account?
                </div>
              </Link>
              <a
                className="inline-block align-baseline font-bold text-sm hover:yellow"
                href="/"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex flex-col h-12 mt-3">
              <button
                className="bg-black hover:bg-white hover:text-black hover:border text-white font-bold py-2 px-4 rounded "
                type="button"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
