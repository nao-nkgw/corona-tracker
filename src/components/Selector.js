// Selector.js

import countriesJson from "../countries.json";

const Selector = () => {
  console.log(countriesJson); // 追加
  return (
    <div>
      <select>
        {/* countriesJson.map((x)=> {<option>x.slug</option>})  */}
      </select>
    </div>
  );
};

export default Selector;
