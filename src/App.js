import React, { useState } from "react";
// we are using select library
import Select from "react-select";
import "./App.css";
// Dropdown Options
const options = [
  { value: "Information Technology", label: "IT" },
  { value: "Computer Science", label: "CS" },
  { value: "Bio Technology", label: "Bio-Tech" },
  { value: "Mechanical Engineering", label: "ME" },
];
export default function App() {
  // we also can pass default value by using useState and put initial null
  const [value, setValue] = useState(null);
  return (
    <div className="app">
      <h1 className="heading">Choose your branch</h1>
      <div className="dropdown-selector">
        <Select
          options={options}
          defaultValue={value}
          placeholder="Search or Select from Options"
          onChange={setValue}
          // you also can use multiple selection in options
          isMulti
          // for making the input field searchable
          isSearchable
          // for desabling the dropdown
          //isDisabled
        />
      </div>
    </div>
  );
}
