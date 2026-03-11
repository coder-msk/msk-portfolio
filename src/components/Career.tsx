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
                <h4>ML Engineer Intern</h4>
                <h5>Buzzware Tech</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed generative AI solutions and built RAG pipelines for
              the company's core platform. Contributed to AI infrastructure,
              model integration, and automation workflows powering key
              product features.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and deploying AI-powered solutions for global clients,
              including RAG pipelines, intelligent chatbot systems, semantic
              search engines, AI agent automation workflows, and end-to-end
              full-stack AI applications using LangChain, FastAPI, and cloud
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
