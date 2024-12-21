import { useEffect, useState } from "react";
import { getSkills } from "../Services/skillApi.js";

function Skills() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getSkills()
      .then((val) => {
        setData(val);
      })
      .catch((error) => {
        console.error("Error in getSkills:", error);
      });
  }, []);

  return (
    <>
      <div className="px-8 py-6 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {data.map((skill) => (
            <span
              key={skill.id}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
            >
              {skill.SKILLNAME}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
