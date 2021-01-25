const Footer = () => {
  return (
  <footer className="footer bg-white px-8 py-8">
    <div className="flex flex-col lg:flex-row">
      <div className="mt-8 sm:pr-12">
        <div className="mb-2 text-xl font-bold">About Us</div>
        <p>We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</p>
        <p>All copyrights reserved © 2020 -Health Explore </p>
      </div>
      <div className="mt-8 sm:pr-12">
        <h1 className="mb-2 text-xl font-bold">Sitemap</h1>
        <ul>
            <li className="py-2 hover:underline"><a href="#">Nurses</a></li>
            <li className="py-2 hover:underline"><a href="#">Employees</a></li>
            <li className="py-2 hover:underline"><a href="#">Social Networking</a></li>
            <li className="py-2 hover:underline"><a href="#">Jobs</a></li>
        </ul>
      </div>
      <div className="mt-8 sm:pr-12 text-grey-darker">
        <h1 className="mb-2 text-xl font-bold">Privacy</h1>
        <ul>
            <li className="py-2 hover:underline"><a href="#">Term of Use</a></li>
            <li className="py-2 hover:underline"><a href="#">Privacy Policy</a></li>
            <li className="py-2 hover:underline"><a href="#">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer


