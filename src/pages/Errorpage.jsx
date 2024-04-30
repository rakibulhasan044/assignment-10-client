import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import error from '../assets/error.json';
import Lottie from "lottie-react";

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen pt-40 space-y-4 bg-slate-50">
      <PageTitle title={"error 404"}/>
      <h2 className="text-4xl font-semibold text-red-600">404 Error Page</h2>
      <h4 className="text-4xl font-semibold text-red-600">
        Sorry, this page does not exist
      </h4>
      <Lottie animationData={error}></Lottie>
      <Link to="/" className="px-6 py-2 btn">
        Go to Home
      </Link>
    </div>
  );
};

export default Errorpage;
