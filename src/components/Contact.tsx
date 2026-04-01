import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:Siddharthrastogi221@mail.com" data-cursor="disable">
                Siddharthrastogi221@mail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+1 716 468 9710" data-cursor="disable">
                +1 716 468 9710
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://archinect.com/people/cover/150523123/siddharth-rastogi"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Archinect <MdArrowOutward />
            </a>
            <a
              href="https://heyzine.com/flip-book/55411cc796.html"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Heyzine <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Siddharth Rastogi</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
