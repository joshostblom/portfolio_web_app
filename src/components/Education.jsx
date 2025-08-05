import EducationCard from "./EducationCard";
import unlLogo from "/images/unl-logo.png";
import unoLogo from "/images/uno-logo.png";
import rhsLogo from "/images/rhs-logo.png";

function Education() {
  return (
    <div className="flex flex-col gap-5 py-5">
      <h1 className="title">EDUCATION</h1>
      <div className="flex flex-col justify-evenly gap-4">
        <EducationCard
          logos={[unlLogo]}
          title="M.S. Computer Science"
          locations={["University of Nebraska - Lincoln"]}
          dates="August 2023-December 2025"
        >
          <ul className="list-disc list-outside pl-4 space-y-2">
            <li>
              <strong>GPA:</strong> 3.99 (in-major GPA: 3.93)
            </li>
            <li>
              <strong>Coursework: </strong>
              Advanced Data Structures & Algorithms, Artificial Intelligence,
              Operating Systems, Automata, Communication Networks
            </li>
            <li>
              <strong>Achievements: </strong>
              Dean's List every semester
            </li>
          </ul>
        </EducationCard>

        <EducationCard
          logos={[unlLogo, unoLogo]}
          title="B.S. Computer Science"
          locations={["University of Nebraska - Lincoln/Omaha"]}
          dates="August 2020-December 2024"
        >
          <ul className="list-disc list-outside pl-4 space-y-2">
            <li>
              <strong>GPA:</strong> 3.99 (in-major GPA: 3.93)
            </li>
            <li>
              <strong>Minor:</strong> Mathematics
            </li>
            <li>
              <strong>Coursework: </strong>
              Data Structures & Algorithms, Artificial Intelligence, Operating
              Systems, Software Development, Automata, Systems Engineering,
              Bioinformatics
            </li>
            <li>
              <strong>Achievements: </strong>
              Dean's List every semester, Susan Buffett Scholar, Honors Program
            </li>
          </ul>
        </EducationCard>

        <EducationCard
          logos={[rhsLogo]}
          title="High School Diploma"
          locations={["Ralston High School"]}
          dates="August 2016-May 2020"
        >
          <ul className="list-disc list-outside pl-4 space-y-2">
            <li>
              <strong>GPA:</strong> 4.39
            </li>
            <li>
              <strong>Activities: </strong>
              Robotics, Band, Marching Band, Jazz Band, Show Choir Band, DECA,
              National Honors Society, Tennis, Golf, Track
            </li>
            <li>
              <strong>Achievements: </strong>
              Gold Honor Roll, Class Officer, National Honors Society, Drum
              Major
            </li>
          </ul>
        </EducationCard>
      </div>
    </div>
  );
}

export default Education;
