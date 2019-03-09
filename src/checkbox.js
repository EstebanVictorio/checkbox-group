import React, { useState } from "react";

const CheckBox = ({ master, belongs, id, checks, setChecks }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        checked={belongs ? checks[id] : checked}
        onClick={e => {
          if (belongs) {
            let newChecks = {};
            if (master) {
              Object.keys(checks).map(key => (newChecks[key] = !checks[id]));
            } else {
              newChecks[id] = !checks[id];
            }
            setChecks(newChecks);
          } else {
            setChecked(!checked);
          }
        }}
      />
      <label>Text</label>
    </div>
  );
};

export default CheckBox;
