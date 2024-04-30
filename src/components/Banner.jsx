import s1 from "../assets/S1.webp";
import s2 from "../assets/S2.webp";
import slider1 from "../assets/slider1.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full ">
        <section className="dark:bg-gradient-to-r from-[#3D155D] to-[#1F0D31] dark:text-gray-200 border w-full md:h-[380px] lg:h-[484px]">
          <div className="flex flex-col justify-center lg:gap-16 pt-5 lg:py-20 md:flex-row lg:justify-between">
            <div className="flex  flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left md:pl-14 lg:pl-20">
              <h1 className="lg:text-4xl font-bold leading-none sm:text-5xl">
                Welcome to
                <br />
                <span className="dark:text-red-700"> ArtiSta</span>
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                Discover the world trough vision of the art and merge with the
                <br className="hidden md:inline lg:hidden" /> mesmerizing beauty
                of the arts.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start px-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold rounded bg-[#CFAE7A] dark:bg-violet-600 text-white dark:text-gray-50"
                >
                  Explore
                </a>
              </div>
            </div>
            <div className="flex  items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 ">
              <img
                src={s1}
                alt=""
                className="object-contain  h-72 sm:h-80 lg:h-[484px] "
              />
            </div>
          </div>
        </section>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <section className="dark:bg-gray-100 dark:dark:bg-gradient-to-r from-[#3D155D] to-[#1F0D31] border w-full md:h-[380px] lg:h-[484px]">
          <div className="flex flex-col justify-center lg:gap-16 pt-5 lg:py-20 md:flex-row lg:justify-between">
            <div className="flex  flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left md:pl-14 lg:pl-20">
              <h1 className="lg:text-4xl font-bold leading-none sm:text-5xl">
                Our
                <span className="dark:text-red-700"> ArtiSta </span>
                history
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                Since 1990, we have been trying to make a better platfor
                <br className="hidden md:inline lg:hidden" /> for the talented
                artist.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start px-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold rounded bg-[#CFAE7A] dark:bg-violet-600 text-white dark:text-gray-50"
                >
                  Explore
                </a>
              </div>
            </div>
            <div className="flex  items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 ">
              <img
                src={s2}
                alt=""
                className="object-contain  h-72 sm:h-80 lg:h-[484px] "
              />
            </div>
          </div>
        </section>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <section className="dark:bg-gray-100 dark:bg-gradient-to-r from-[#3D155D] to-[#1F0D31] border w-full md:h-[380px] lg:h-[484px]">
          <div className="flex flex-col justify-center lg:gap-16 pt-5 lg:py-20 md:flex-row lg:justify-between">
            <div className="flex  flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left md:pl-14 lg:pl-20">
              <h1 className="lg:text-4xl font-bold leading-none sm:text-6xl">
                Latest painting
                <br />
                <span className=""> collection</span>
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                We have one of the best art & craft collections
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start px-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold rounded bg-[#CFAE7A] dark:bg-violet-600 text-white dark:text-gray-50"
                >
                  Explore
                </a>
              </div>
            </div>
            <div className="flex  items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 ">
              <img
                src={slider1}
                alt=""
                className="object-contain  h-72 sm:h-80 lg:h-[484px] "
              />
            </div>
          </div>
        </section>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
