import Marquee from "react-fast-marquee";
import manufacture1 from "../assets/menufacture1.png";
import manufacture2 from "../assets/menufacture2.png";
import manufacture3 from "../assets/menufacture3.png";
import manufacture6 from "../assets/menufacture6.png";
import manufacture7 from "../assets/menufacture7.png";
import manufacture8 from "../assets/menufacture8.png";
import manufacture10 from "../assets/menufacture10.png";

const OurPartner = () => {
  return (
    <div className="pt-8 lg:pt-10">
      <h3 className="text-3xl font-bold text-center pb-5">
        {" "}
        Our Top partner companies
      </h3>
      <Marquee pauseOnHover={true} speed={100} className="bg-gray-100 dark:bg-[#893271]">
        <div className="p-4 flex">
          <span>
            <img src={manufacture1} className="w-[170px] px-8" alt="" />
          </span>
          <span>
            <img src={manufacture2} className="w-[170px] px-8" alt="" />
          </span>
          <span>
            <img src={manufacture3} className="w-[170px] px-8" alt="" />
          </span>
          <span>
            <img src={manufacture6} className="w-[170px] px-8" alt="" />
          </span>
          <span>
            <img src={manufacture7} className="w-[170px] px-8" alt="" />
          </span>
          <span>
            <img src={manufacture8} className="w-[170px] px-8" alt="" />
          </span>
          <span>
            <img src={manufacture10} className="w-[170px] px-8" alt="" />
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default OurPartner;
