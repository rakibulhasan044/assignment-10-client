import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'

const Register = () => {

  const {createUser, user, setUser, profileUpdate} = useContext(AuthContext);


  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photourl = form.photourl.value;
    const password = form.password.value;
    createUser(email, password)
    .then(result => {
      console.log(result.user);
      console.log(result.user);
      Swal.fire({
        title: 'Success!',
        text: 'Coffee Added Successfully',
        icon: 'success',
        confirmButtonText: 'Successfully registered'
    })
      profileUpdate(name, photourl)
      .then(() => {
        setUser({...user, displplayName: name, photoURL: photourl})
      })
      .catch((error) => {
        console.log(error.message);
      });
    })
    .catch(error => {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${error.message}`,
      });
    })
  };

  return (
    <div>
      <div className="pt-20 min-h-[calc(100vh-122px)] bg-base-200 dark:bg-gradient-to-r from-[#3D155D] to-[#1F0D31]">
        <div className="hero-content">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 w-5/6  md:w-2/3 lg:w-3/5 shadow-2xl bg-base-100">
            <form className="card-body dark:bg-[#3C0A44]"
            onSubmit={handleRegistration}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="email"
                  className="input input-bordered dark:bg-[#ECE0F5]"
                  required
                />
              </div>
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
                  <span className="label-text dark:text-white">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photourl"
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
                <p className="py-3">
                  Already have an acoount?{" "}
                  <Link to="/login" className="text-primary dark:text-secondary font-semibold">
                    Login here
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
