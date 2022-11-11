import React from "react";
import EdBundle from "./EdBundle";

function Education({ cvData, handleChange }) {
  // console.log(cvData.education)
  return (
    <>
      <div className="education">
        <h1>Education</h1>
        {cvData.education.map((degree) => {
          return (
            <EdBundle
              degree={degree}
              handleChange={handleChange}
              key={degree.key}
            />
          );
        })}
        <button class="add-btn add-education-btn">Add Education</button>
      </div>
    </>
  );
}

export default Education;
