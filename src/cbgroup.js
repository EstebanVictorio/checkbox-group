import React, { useState } from "react";
import CheckBox from "./checkbox";

const getArr = count => {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr[i] = i;
  }
  return arr;
};

const getInitialState = arr => {
  let initialState = {};
  arr.map(el => (initialState[el] = false));
  return initialState;
};

const CBGroup = ({ count = 0 }) => {
  const arr = getArr(count);
  const initialState = getInitialState(arr);
  const [checks, setChecks] = useState(initialState);

  return (
    <div>
      {arr.map(id => {
        return (
          <CheckBox
            belongs
            key={id}
            id={id}
            master={id == 1}
            checks={checks}
            setChecks={newChecks => {
              setChecks({ ...checks, ...newChecks });
            }}
          />
        );
      })}
    </div>
  );
};

export default CBGroup;
