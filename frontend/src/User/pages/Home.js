import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 mx-8 px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Create your Own Form now
              <br />
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transforming Visions into Forms: Unleashing Connections, One Idea
              at a Time.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to={"/forms/new-form"}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Create now
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-10 w-full lg:w-[45rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="images/coverImage.jpeg"
              alt=""
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
