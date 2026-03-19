import "./styles/Certificate.css";
import { MdVerified, MdOpenInNew } from "react-icons/md";

const certificates = [
  {
    id: 1,
    title: "Alpha Data Structures & Algorithms with Java",
    organization: "Apna College",
    date: "Aug 2025",
    description: "Comprehensive course on DSA fundamentals and problem-solving techniques using Java",
    credentialId: "659e5ab5c8da0ee07e075b56",
    url: "https://drive.google.com/file/d/18HpRSZY6-p5JWttAV4OsP7HeIwkdeesL/view?usp=sharing",
    color: "#5eead4"
  },
  {
    id: 2,
    title: "Java Spring Framework 6, Spring Boot 3, Spring AI",
    organization: "Telusko / Udemy",
    date: "Jun 2025",
    description: "Advanced Spring Framework and Spring Boot development with modern AI integration",
    credentialId: "UC-da7d6558-23b1-4e5a-b219-7a75e941d3bc",
    url: "https://ude.my/UC-da7d6558-23b1-4e5a-b219-7a75e941d3bc",
    color: "#14b8a6"
  },
  {
    id: 3,
    title: "Python Bootcamp",
    organization: "Udemy",
    date: "Sep 2025",
    description: "Comprehensive Python programming course covering fundamentals and practical applications",
    credentialId: "UC-44e4f715-00e4-48db-b784-67068b40d8ae",
    url: "http://ude.my/UC-44e4f715-00e4-48db-b784-67068b40d8ae",
    color: "#a78bfa"
  }
];

const Certificate = () => {
  return (
    <div className="certificate-section" id="certificates">
      <div className="certificate-container section-container">
        <h2>
          My <span>Certificates</span>
        </h2>
        
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-header" style={{ borderLeftColor: cert.color }}>
                <div className="certificate-icon">
                  <MdVerified />
                </div>
                <h3>{cert.title}</h3>
              </div>
              
              <div className="certificate-body">
                <div className="certificate-meta">
                  <p className="organization">{cert.organization}</p>
                  <p className="date">{cert.date}</p>
                </div>
                
                <p className="description">{cert.description}</p>
                
                <div className="credential-section">
                  <p className="credential-label">Credential ID</p>
                  <p className="credential-id">{cert.credentialId}</p>
                </div>
              </div>
              
              <div className="certificate-footer">
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certificate-link"
                  style={{ '--accent-color': cert.color } as React.CSSProperties}
                >
                  <span>View Certificate</span>
                  <MdOpenInNew />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
