import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {

  const { signIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result => {
      console.log(result.user);
      Swal.fire({
        title: 'Success!',
        text: 'Welcome back',
        icon: 'success',
        confirmButtonText: 'Successfully login'
    })
      navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      
    })

  }
  
  return (
    <div className="min-h-[calc(100vh-122px)] bg-base-200 dark:bg-gradient-to-r from-[#3D155D] to-[#1F0D31]">
      <div className="hero-content pt-[15%]">
        <div className="text-center lg:text-left"></div>
        <div className="card shrink-0 w-5/6  md:w-2/3 lg:w-3/5 shadow-2xl bg-base-100">
          <form className="card-body dark:bg-[#3C0A44]"
          onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered dark:bg-[#ECE0F5]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered dark:bg-[#ECE0F5]"
                required
              />
            </div>
            <div className="form-control pt-5">
              <button className="btn btn-primary dark:bg-secondary">Login</button>
              <p className="py-3">Do not have an account? <Link to="/register" className="text-primary dark:text-secondary font-semibold">Register here</Link> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
