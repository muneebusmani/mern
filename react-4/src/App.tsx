import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [initialValue:number,setNumber:function] =useState(0);
  return (
    <>
           <div className="container-fluid">
        <div className="row justify-content-center">
          {cardEntries.map((values: entry) => (
            <CardComponent key={values.id} {...values} />
          ))}
        </div>
      </div>
    </>
  );
};
export default App;