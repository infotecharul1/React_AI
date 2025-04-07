import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Arulprakash Madhu</h1>
        <h2>QA Tester Engineer</h2>
        <p>
          +46 730269644 | infotecharul@gmail.com |{" "}
          <a href="https://arulprakash.netlify.app/">Portfolio</a> |
          Helsingborg, Sweden
        </p>
      </header>

      <section className="summary">
        <h3>Summary</h3>
        <p>
          With 14 years of experience as a QA Test Automation Engineer and
          Product Specialist, I focus on delivering high-quality and reliable
          software applications across diverse domains, including Retail,
          Banking, Telecom, and Transport & Logistics.
        </p>
      </section>

      <section className="skills">
        <h3>Skills & Qualifications</h3>
        <ul>
          <li>Python</li>
          <li>Cypress</li>
          <li>Postman</li>
          <li>SoapUI</li>
          <li>SQL</li>
          <li>CI/CD</li>
          <li>Jenkins</li>
          <li>Git</li>
          <li>REST APIs</li>
          <li>Agile</li>
          <li>DevOps mindset</li>
        </ul>
      </section>

      <section className="experience">
        <h3>Professional Experience</h3>
        <h4>
          SME and QA Test Engineer | Capgemini Sverige AB | Helsingborg, Sweden
        </h4>
        <p>June 2020 – December 2024</p>
        <p>
          Spearheaded the development and maintenance of automated test scripts,
          reducing regression test time by 50%.
        </p>

        <h4>Product Specialist | Capgemini Sverige AB | Helsingborg, Sweden</h4>
        <p>June 2020 – December 2024</p>
        <p>
          Acted as a bridge between IBeS products and customers, enhancing the
          shopping experience.
        </p>

        <h4>Automation Tester | Capgemini India Pvt Ltd | Bangalore, India</h4>
        <p>December 2014 – May 2020</p>
        <p>
          Developed and executed test automation scripts, achieving a 40%
          increase in test coverage.
        </p>
      </section>

      <section className="projects">
        <h3>Project Experience</h3>
        <ul>
          <li>IKANO Bank - Cards & Payments Squad</li>
          <li>IKEA e-Commerce Platforms</li>
          <li>MasterChef US Project</li>
        </ul>
      </section>

      <section className="certifications">
        <h3>Certifications</h3>
        <ul>
          <li>ISTQB Certified</li>
          <li>SAFe Scrum Master</li>
          <li>AWS Cloud Practitioner</li>
        </ul>
      </section>

      <section className="achievements">
        <h3>Achievements</h3>
        <ul>
          <li>Leadership Recognition in Gen AI Hackathon</li>
          <li>Bug Hunter Award at FedEx</li>
        </ul>
      </section>

      <section className="education">
        <h3>Education</h3>
        <p>
          Bachelor of Technology in Information Technology | Anna University,
          Chennai
        </p>
        <p>
          Diploma in Electrical & Electronics Engineering | State Board of Tamil
          Nadu
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
