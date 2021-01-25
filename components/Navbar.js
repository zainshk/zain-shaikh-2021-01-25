import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center p-1 justify-between bg-white shadow-xs px-8">
      <div>
        <i className="w-6 inline-block lg:hidden"><FiMenu/></i>
        <h2 className="inline-block text-blue-500 text-xl font-bold cursor-pointer">
            HEALTH EXPLORE
        </h2>
      </div>
      <div className="font-semibold hidden lg:block">
        <a className="px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">PROFILE</a>
        <a className="px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">JOBS</a>
        <a className="px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">PROFESSIONAL NETWORK</a>
        <a className="px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">LOUNGE</a>
        <a className="px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">SALARY</a>
      </div>
      <div>
        <div className="hidden md:inline-block">
            <button className="rounded-lg font-bold text-blue-500 text-center border-2 border-blue-500 px-3 py-1 m-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                CREATE JOB
            </button>
        </div>
        <div className="bg-blue-500 rounded-full w-9 h-9 inline-block mx-5 cursor-pointer relative">
            <p className="text-white pt-1 text-center">ZS</p>
            <div className="bg-red-600 rounded-full w-4 h-4 cursor-pointer absolute -top-1 -right-1">
                <p className="text-white text-center text-xs">2</p>
            </div>
        </div>
        <span className="font-semibold hidden md:inline-block cursor-pointer">
            <a href="/logout">LOGOUT</a>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
