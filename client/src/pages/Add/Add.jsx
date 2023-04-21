import { useState } from "react";
import DropdownList from '../../components/DropdownList';
import FormInput from "../../components/FormInput";
import fields from "./fields.js"
import newRequest from '../../utils/newRequest';

export default function Add() {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    phone: "",
    age: "",
    dept: "HR",
    status: "Contract",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    img_url: "https://picsum.photos/200/300"
  });

  const [check, setCheck] = useState(true);
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(values);
      const path = (check) ? "/update" : "/add";
      const data = (check) ? { values, id } : { values };
      // console.log(path, data);
      const res = await newRequest.post(path, data);
      console.log(res);
    }
    catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="ml-16 flex flex-col justify-center items-center
                    h-screen">

      {/* Toggle Switch */}
      <div className="flex items-center gap-x-1">
        <div>Add</div>
        <div className="my-1">
          <label className="switch">
            <input
              type="checkbox"
              checked={check}
              onChange={(e) => setCheck(!check)} />
            <span className="slider round"></span>
          </label>
        </div>
        <div>Edit</div>
      </div>


      <form
        className="flex flex-col justify-center w-fit p-4 bg-gray-500 rounded-xl"
        onSubmit={handleSubmit}>

        <div className="flex justify-center gap-10">
          <div>
          {(!check) ||
              (<FormInput
                label="ID"
                value={id}
                onChange={e => setId(e.target.value)}
              />)
            }
            
            {fields.aboutFields.map(field =>

              field.form ?
                (<DropdownList
                  {...field}
                  value={values[field.name]}
                  onChange={onChange}
                />)
                :
                (<FormInput
                  {...field}
                  value={values[field.name]}
                  onChange={onChange} />)
            )}
          </div>
          <div>
            {fields.addressFields.map(field =>
                (<FormInput
                  {...field}
                  value={values[field.name]}
                  onChange={onChange} />)
            )}

          </div>
        </div>
        <button
          className="border-2 border-black text-lg font-bold cursor-poiner rounded-md">Submit</button>
      </form>
    </div>
  );
}