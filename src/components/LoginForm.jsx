import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../contexts/UserContext";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "emre@wit.com.tr",
      password: "1234RtgV*",
    },
    mode: "onChange",
  });

  const { logInUser } = useContext(UserContext);

  function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str) || "Strong password giriniz.";
  }

  return (
    <div className="w-1/5 flex gap-4 flex-col">
      <i className="fa-brands fa-twitter text-blue-400 fa-2xl mb-6"></i>
      <h1 className="text-xl font-bold">Log in to Twitter</h1>
      <form onSubmit={handleSubmit(logInUser)}>
        <input
          className="p-2 border-2 border-slate-200 block my-4 w-full"
          placeholder="phone, name or email"
          {...register("email", {
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Geçerli bir email giriniz.",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 bg-red-100 py-2 px-4 rounded-lg">
            {errors.email.message}
          </p>
        )}
        <input
          className="p-2 border-2 border-slate-200 block my-4 w-full"
          placeholder="password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "En az 8 karakter giriniz.",
            },
            maxLength: {
              value: 12,
              message: "En fazla 12 karaketer girebilirsiniz.",
            },
            validate: checkPassword,
          })}
        />
        {errors.password && (
          <p className="text-red-500 bg-red-100 py-2 px-4 rounded-lg">
            {errors.password.message}
          </p>
        )}
        <button
          disabled={!isValid}
          className="rounded-full text-white bg-blue-400 p-4 text-center w-full"
        >
          Log In
        </button>
        <div className="text-blue-400 flex justify-between mt-4">
          <Link to="/forgot_password">Forgot password?</Link>
          <Link to="/signup">Sign up to Twitter</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
