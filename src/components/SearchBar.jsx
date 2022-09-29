import React, { useState } from "react";
import "./SearchBar.css";
import { BsSearch } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { searchOptions } from "../data/dummy";



function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <BsSearch />
          ) : (
            <MdOutlineCancel id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {searchOptions?.map((item, index) => {
             <div key={index} className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer">
              <a className="dataItem" href={item.link} target="_blank">
                <p>{item.title} </p>
              </a>
        </div>
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;