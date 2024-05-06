const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-4">
        <div className="sm:flex mt-4 lg:mt-0 md:mt-0 sm:mt-0 justify-between">
          <div className="mb-6 md:mb-0 ml-8 flex items-center sm:mb-4">
            <img src="images/myForms.png" className="h-8 me-3" alt="" />
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              MyForms
            </span>
          </div>
          <div className="sm:text-right sm:mt-4 ml-8 mb-2 mr-12">
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact Us
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">myforms@gmail.com</li>
              <li>+91 9876543210</li>
            </ul>
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 MyForms™ . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
