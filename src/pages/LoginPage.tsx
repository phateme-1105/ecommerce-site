import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const LoginPage = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex-1 flex justify-center items-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="w-full flex items-center justify-center ">
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full sm:max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6"
        >
          {/* flex flex-col items-center w-[90%] sm:max-w-96 m-auto  mt-14 mb-14  gap-8  text-gray-800 */}
          <div className="inline-flex items-center justify-center gap-2 mb-2 mt-10">
            <p className="prata-regular text-3xl">{currentState}</p>
            <hr className="border-none w-8 h-[1.5px] bg-gray-800" />
          </div>
          {currentState === "Login" ? (
            ""
          ) : (
            <div className="w-full">
              <input
                {...register("name", { required: true, minLength: 3 })}
                id="name"
                type="text"
                className="w-full px-4 border py-2 border-gray-300 rounded-lg placeholder-gray-400 "
                placeholder="Name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500 text-xs mt-1 ">
                  The name is required
                </p>
              )}
            </div>
          )}
          <div className="w-full">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              id="email"
              type="email"
              className="w-full px-4 border py-2 border-gray-300 rounded-lg placeholder-gray-400"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-">{errors.email.message}</p>
            )}
          </div>
          <div className="w-full">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
                  message:
                    "Password must include an uppercase letter, a number, and a special character",
                },
              })}
              id="password"
              type="password"
              className="w-full px-4 border py-2 border-gray-300 rounded-lg placeholder-gray-400"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="w-full flex justify-end text-sm text-blue-400">
            <p
              className="text-sm text-blue-600 hover:underline cursor-pointer"
              onClick={() =>
                setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
              }
            >
              {currentState === "Login"
                ? "Don’t have an account? Sign up"
                : "Already have an account? Login"}
            </p>
          </div>
          <button className="bg-black text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-gray-800 transition">
            {currentState === "Login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
