import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Architect</h4>
                <h5>Opame Architects</h5>
                <h5>Jaipur, India</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
Supported the design and documentation of residential, commercial, and community-based projects across schematic design, design development, and construction documentation phases. Assisted with zoning studies, spatial planning, detailed drawings, and graphic presentations. Conducted site visits, prepared hand-drawn and digital drawings, coordinated with vendors, and contributed to material research, cost analysis, and proposal preparation using Revit, AutoCAD, SketchUp, Rhino, Enscape, and Adobe Creative Suite.
          </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Architect</h4>
                <h5>Incube Design Associates</h5>
                <h5>Gorakhpur, India</h5>               
              </div>
              <h3>2023</h3>
            </div>
             <p>
Led and delivered residential, mixed-use, and institutional projects from design development through construction. Oversaw zoning layouts, circulation strategies, and construction documentation while supervising architects, consultants, and subcontractors. Managed client coordination, site execution, and interdisciplinary collaboration (structural, MEP, and contractors) to ensure design intent, quality, and schedule adherence. Mentored junior architects, reviewed drawings, and contributed to project optimization through research-driven design and cost-conscious material selection.
</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduate Assistant</h4>
                <h5>Instructional Facilities</h5>
                <h5>University at Buffalo, NY</h5>               
              </div>
              <h3>2025</h3>
            </div>
             <p>
Conducted classroom audits and managed issue triage to ensure timely resolution and compliance with university standards. Maintained and updated learning-space inventory databases, improving accuracy and operational efficiency. Supported project management efforts through vendor coordination,
documentation, and learning space design enhancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
