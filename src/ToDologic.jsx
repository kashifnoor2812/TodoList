import React, { useState } from "react";

const ToDologic = ({ submit }) => {
  const [data, setdata] = useState({
    Day: "",
    Task: "",
  });

  const onchanging = (e) => {
    const { value, name } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <div className="cantainer">
        <div className="form">
          <form>
            <div className="formdiv">
              <div className="inputTags">
                <input
                  type="text"
                  name="Day"
                  value={data.Day}
                  placeholder="Enter Day"
                  onChange={onchanging}
                />
              </div>
              <div className="inputTags">
                <input
                  type="text"
                  name="Task"
                  value={data.Task}
                  placeholder="Enter Task"
                  onChange={onchanging}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="submitBtn">
          <button onClick={() => submit(data)}>+</button>
        </div>
      </div>
    </>
  );
};

export default ToDologic;
