import React, { useEffect, useState } from "react";
 
function Shifter(props) {
  const [leftList, setLeftList] = useState([1, 2, 3, 4]);
  const [rightList, setRightList] = useState([5, 6, 7, 8]);
  const [checkedList, setCheckedList] = useState([]);
 
  //To put selected items in check list which is used for shifting
  const handleCheck = (e) => {
    const { value } = e.target;
    const newValue = parseInt(value);
    if (checkedList.includes(newValue)) {
      setCheckedList(checkedList.filter((item) => item !== newValue));  //if already unchecks it
    } else {
      setCheckedList([...checkedList, newValue]);
    }
  };
 
  //To shift all to right
  const handleShiftAllToRight = () => {
    setRightList([...rightList, ...leftList]);
    console.log(rightList);
    setLeftList([]);
    setCheckedList([]);
  };
 
  //To shift all to left
  const handleShiftAllToLeft = () => {
    setLeftList([...leftList, ...rightList]);
    setRightList([]);
    setCheckedList([]);
  };
 
  //To shift checked to right
  const shiftCheckedToRight = () => {
    const newRightList = [
      ...rightList,
      ...checkedList.filter((item) => leftList.includes(item)),
    ];
    const newLeftList = leftList.filter((item) => !checkedList.includes(item));
    setRightList(newRightList);
    setLeftList(newLeftList);
    setCheckedList([]);
  };
 
  //To shift checked to left
  const shiftCheckedToLeft = () => {
    const newRightList = rightList.filter(
      (item) => !checkedList.includes(item)  // return true if item not found in checkedlist
    );
    const newLeftList = [
      ...leftList,
      ...checkedList.filter((item) => rightList.includes(item)),
    ];
    setRightList(newRightList);
    setLeftList(newLeftList);
    setCheckedList([]);
  };
 
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <p>Left List</p>
          <ul style={{ listStyle: "none" }}>
            {leftList.map((i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  value={i}
                  checked={checkedList.includes(i)} //To uncheck the boxes when the checkedList becomes empty
                  onChange={(e) => {
                    handleCheck(e); //To add to checked List
                  }}
                />{" "}
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-6">
          <p>Right List</p>
          <ul style={{ listStyle: "none" }}>
            {rightList.map((i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  value={i}
                  checked={checkedList.includes(i)}  //To uncheck the boxes when the checkedList becomes empty
                  onChange={(e) => {
                    handleCheck(e);  //To add to checked List
                  }}
                />{" "}
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" d-flex gap-3 ">
        <button className="btn btn-primary" onClick={handleShiftAllToRight}>
          {">>"}
        </button>
        <button className="btn btn-primary" onClick={shiftCheckedToRight}>
          {">"}
        </button>
        <button className="btn btn-primary" onClick={shiftCheckedToLeft}>
          {"<"}
        </button>
        <button className="btn btn-primary" onClick={handleShiftAllToLeft}>
          {"<<"}
        </button>
      </div>
      {checkedList.join(", ")}
    </div>
  );
}
 
export default Shifter;