import React, { useRef, useState } from "react";
// import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";

// import Editor from "../Editor/Editor";
// import Resume from "../Resume/Resume";

// import styles from './Body.modular.css?inline'

function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
//   const sections = {
//     basicInfo: "Basic Info",
//     workExp: "Work Experience",
//     project: "Projects",
//     education: "Education",
//     achievement: "Achievements",
//     summary: "Summary",
//     other: "Other",
//   };
//   const resumeRef = useRef();

//   const [activeColor, setActiveColor] = useState(colors[0]);
//   const [resumeInformation, setResumeInformation] = useState({
//     [sections.basicInfo]: {
//       id: sections.basicInfo,
//       sectionTitle: sections.basicInfo,
//       detail: {},
//     },
//     [sections.workExp]: {
//       id: sections.workExp,
//       sectionTitle: sections.workExp,
//       details: [],
//     },
//     [sections.project]: {
//       id: sections.project,
//       sectionTitle: sections.project,
//       details: [],
//     },
//     [sections.education]: {
//       id: sections.education,
//       sectionTitle: sections.education,
//       details: [],
//     },
//     [sections.achievement]: {
//       id: sections.achievement,
//       sectionTitle: sections.achievement,
//       points: [],
//     },
//     [sections.summary]: {
//       id: sections.summary,
//       sectionTitle: sections.summary,
//       detail: "",
//     },
//     [sections.other]: {
//       id: sections.other,
//       sectionTitle: sections.other,
//       detail: "",
//     },
//   });

  return (
    <div className="p-8 flex flex-col items-center pt-0">
      <p className="font-medium text-4xl">Resume Builder</p>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-[20px] px-[30px] py-0">
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className="h-8 w-8 bg-blue-500 rounded-full"
            />
          ))}
        </div>
        <button className="rounded bg-blue-500 text-white font-medium text-base flex items-center cursor-pointer py-[10px] px-[16px] border-0 leading-tight gap-[5px] outline-none">
          Download <ArrowDown className="h-5 w-5" />
        </button>
      </div>
      {/* <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div> */}
    </div>
  );
}

export default Body;
