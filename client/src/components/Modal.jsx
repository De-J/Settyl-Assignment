import { useEffect } from "react";
import Map from "./Map";

export default function Modal(props) {
  const { _id, fname, lname, age, phone, status, dept, close, coordinates } = props;

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    }
  }, [])
  return (
    <div
      className="absolute inset-0 ml-16 opacity-90 border-black border-4 bg-[#bdbdbd]"> {/*modal-wrapper*/}
      <div
        className="h-fit w-fit flex flex-col items-center justify-center 
        relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        font-roboto opacity-100 border-black border-4 bg-white p-4 rounded-md"> {/*modal-container*/}
        
        {/* <BackIcon className="w-5 h-5 mr-2" />Back */}
        <ul>
          <li>Employee ID: {_id}</li>
          <li>Name: {fname} {lname}</li>
          <li>Department: {dept}</li>
          <li>Status: {status}</li>
          <li>Age: {age}</li>
          <li>Phone: {phone}</li>
        </ul>
        <Map coord={coordinates}/>
        <button
          className="h-10 px-5 mt-5 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
          onClick={close}>
          Close
        </button>
      </div>
    </div>
  )
}