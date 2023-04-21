import { useState } from "react";
// import BackIcon from "./BackIcon";
import Modal from "./Modal";

export default function UserCard(props) {
  const { fname, lname, status, dept, img_url } = props;
  const [isOpen, setIsOpen] = useState(false)

  const close = () => { setIsOpen(false) }
  const open = () => { setIsOpen(true) }
  
  return (
    <>
      <div
        className="w-64 flex items-center border-2 border-[#a6b1e1] rounded-xl font-roboto"
        onClick={open}>
        <div>
          <img
            className="h-[10vh] w-[10vh] m-[2vh] rounded-[50%] border-2 border-[#dcd6f7]"
            src={img_url} />
        </div>

        <div className="flex flex-col justify-center">
          <div>{fname} {lname}</div>
          <div className="flex justify-center align-middle">
            <div className="m-1">{dept.toUpperCase()}</div>
            <div className="m-1 py-0.5 bg-[#eed180] font-rajdhani">{status.toUpperCase()}</div>
          </div>
        </div>
      </div>

      {isOpen && <Modal {...props} close={close} />}
    </>
  )

}