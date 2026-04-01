import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-grid">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Vimukti Sansthan</h4>
                  <p>Community-based Institutional Project</p>
                </div>
              </div>

              <p>EMPOWERING EDUCATION FOR UNDERPRIVILEGED GIRLS</p>
            </div>

            <WorkImage
              image="/images/featured.jpg"
              alt="Vimukti Sansthan Girls School"
            />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Queensline</h4>
                  <p>Interior Project</p>
                </div>
              </div>

              <p>Floating Restaurant, Mumbai</p>
            </div>

            <WorkImage
              image="/images/cam.jpg"
              alt="CAM Restaurant Interior"
            />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>NEXUS</h4>
                  <p>Academic Project</p>
                </div>
              </div>

              <p>Buffalo Art Museum, NY</p>
            </div>

            <WorkImage
              image="/images/museum.png"
              alt="Nexus Buffalo Museum"
            />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Lily Plate</h4>
                  <p>Academic Project</p>
                </div>
              </div>

              <p>MECHANICAL OBJECT | SPATIAL GENERATOR</p>
            </div>

            <WorkImage
              image="/images/tet.jpg"
              alt="TET Structural Pavilion"
            />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>Porosity</h4>
                  <p>Inclusive Design</p>
                </div>
              </div>

              <p>Design For Everybody</p>
            </div>

            <WorkImage
              image="/images/porosity.png"
              alt="Porosity Housing Project"
            />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>Modern Villa</h4>
                  <p>Residential Project</p>
                </div>
              </div>

              <p>Tranquil Escape to Nature</p>
            </div>

            <WorkImage
              image="/images/resi.png"
              alt="Residential Architecture Project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
