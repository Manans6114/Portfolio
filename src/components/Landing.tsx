import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello!  I'm</h2>
            <h1>
              Manan
              <br />
              <span>Sharma</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Full Stack</h3>
            <h2 className="landing-info-h2">
              <span className="landing-h2-1">Developer</span>
              <span className="landing-h2-2">Engineer</span>
            </h2>
            <h2 className="landing-info-h2-white">
              <span className="landing-h2-info">Engineer</span>
              <span className="landing-h2-info-1">Developer</span>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
