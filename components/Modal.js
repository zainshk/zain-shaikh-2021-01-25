const Modal = ({ department, setShowModal }) => {
    const numberWithCommas = (num) =>
      String(num)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return (
      <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-200 bg-opacity-75 z-50 ">
        <div className="bg-white rounded-lg w-1/2">
          <div className="flex flex-col items-start p-4">
            <div className="flex items-center w-full">
              <h6 className="font-semibold mb-2">DEPARTMENT</h6>
              <svg 
              className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 18 18"  
              onClick={() => setShowModal(false)} 
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
              </svg>
            </div>
            <hr/>
            <div className="">
            {department.map((dept, index) => (
              <p className="text-sm my-2 inline-block mr-8" key={index}>
                {dept?.key}
                <span className="text-xs text-gray-400 ml-1">
                  {numberWithCommas(dept?.doc_count)}
                </span>
              </p>
            ))}
            </div>
            <hr/>
          </div>
        </div>
      </div>
    )
  }
  
export default Modal
  