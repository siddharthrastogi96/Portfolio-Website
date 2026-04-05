import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { withBase } from "../utils/basePath";

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
                  <p>Institutional Project</p>
                </div>
              </div>

              <div className="work-copy">
                <p className="work-tagline">
                  Empowering education for underprivileged girls
                </p>
                <p className="work-description">
                  An institutional campus proposal centered on safe learning
                  spaces, open courtyards, and a nurturing environment that
                  supports education with dignity.
                </p>
              </div>
            </div>

            <WorkImage
              image={withBase("images/featured.jpg")}
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

              <div className="work-copy">
                <p className="work-tagline">Floating Restaurant, Mumbai</p>
                <p className="work-description">
                  A hospitality interior envisioned as a refined floating dining
                  experience, shaped by panoramic waterfront views, warm
                  materiality, and fluid spatial sequencing.
                </p>
              </div>
            </div>

            <WorkImage
              image={withBase("images/cam.jpg")}
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

              <div className="work-copy">
                <p className="work-tagline">Buffalo Art Museum, NY</p>
                <p className="work-description">
                  An academic museum proposal exploring civic presence, gallery
                  circulation, and a contemporary cultural landmark for the
                  Buffalo urban fabric.
                </p>
              </div>
            </div>

            <WorkImage
              image={withBase("images/museum.png")}
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

              <div className="work-copy">
                <p className="work-tagline">
                  Mechanical object | spatial generator
                </p>
                <p className="work-description">
                  An experimental academic study translating a mechanical system
                  into spatial form, structural rhythm, and an immersive light
                  driven experience.
                </p>
              </div>
            </div>

            <WorkImage
              image={withBase("images/tet.jpg")}
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

              <div className="work-copy">
                <p className="work-tagline">Design for everybody</p>
                <p className="work-description">
                  An inclusive design proposal focused on accessibility,
                  permeability, and everyday comfort, creating architecture that
                  welcomes users of all abilities.
                </p>
              </div>
            </div>

            <WorkImage
              image={withBase("images/porosity.png")}
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

              <div className="work-copy">
                <p className="work-tagline">Tranquil escape to nature</p>
                <p className="work-description">
                  A residential project balancing privacy, daylight, and strong
                  indoor outdoor connections to create a calm retreat rooted in
                  everyday living.
                </p>
              </div>
            </div>

            <WorkImage
              image={withBase("images/resi.png")}
              alt="Residential Architecture Project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
