import { IoBagAdd } from "react-icons/io5";
import ExperienceCard from "./ExperienceCard";
import QualificationCard from "./QualificationCard";
const ExperiencePage = () => {
  return (
    <>
      <div className="about-top">
        <IoBagAdd />
        Experience
      </div>
      <div className="experince-heading">My Journey</div>
      <p id="my-intro-experience">
        A timeline of my professional experience,education and my growth as
        developer.
      </p>
      <ExperienceCard />
      <QualificationCard />
    </>
  );
};
export default ExperiencePage;
