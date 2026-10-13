import React from 'react';
import { Link } from 'react-router-dom';
import resumePdf from '../resumefile/BRYAN_PEENS_Resume_2026-10-12.pdf';

const experience = [
  {
    role: 'Overnight Associate',
    company: 'Walmart',
    place: 'Ontario',
    dates: 'Dec 2022 — 2023',
    details: [
      'Operated pallet jacks and forklifts to move products efficiently.',
      'Scanned incoming orders and placed products in designated locations.',
      'Organized inventory and stocked shelves to maintain store cleanliness and product availability.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'EPI-USE',
    place: 'Ontario',
    dates: 'Dec 2020 — Jul 2022',
    details: [
      'Built backend API integrations for applicant tracking systems, including SAP SuccessFactors for iCIMS ATS.',
      'Used Cloud Elements and JavaScript formulas for field mapping and orchestration; developed custom transformations.',
      'Developed web and desktop applications, including responsive interfaces and mobile UI integrations through APIs.',
      'Created technical documentation, tested software, reviewed code, troubleshot issues, and provided application support.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Eclipse Technologies CC',
    place: 'South Africa',
    dates: 'Dec 2018 — Nov 2020',
    details: [
      'Developed and maintained web and desktop applications with a focus on UI and UX.',
      'Researched and developed responsive interfaces for desktop applications using APIs.',
      'Collaborated across teams on project requirements, Agile sprints, and continuous integration; contributed code reviews and support.',
    ],
  },
  {
    role: 'Customer Service Logistics Co-Ordinator',
    company: 'CHEP',
    place: 'South Africa',
    dates: 'Dec 2012 — Nov 2015',
    details: [
      'Managed warehouse and off-site stock levels, supplier stock audits, and shipment logistics.',
      'Supervised onsite team operations and quality control for incoming parcels and RFID infrastructure setup.',
      'Participated in KPI meetings and customer feedback sessions to identify improvements.',
    ],
  },
  {
    role: 'Production Team Leader',
    company: 'Schnellecke Logistics · Ford Assembly Plant',
    place: 'South Africa',
    dates: 'Dec 2010 — Nov 2012',
    details: [
      'Led a small team supplying assembly-line components and maintaining timely delivery.',
      'Used pick-to-light systems for accurate order fulfillment and performed quality inspections on incoming parts and parcels.',
      'Managed warehouse receiving operations and inspected incoming parcel quality.',
    ],
  },
];

const skills = [
  'Software & Web Engineering',
  'API Development',
  'Software Testing',
  'Quality Control',
  'Inventory Management',
  'Warehousing & Production',
  'Forklift Operation',
  'Preventive Auto Maintenance',
  'Lawn & Grounds Maintenance',
  'Building & Construction Labour',
  'Basic Electrical Knowledge',
  'Mechanical Aptitude',
  'Effective Communication',
];

export default function Resume() {
  return (
    <>
      <section className="page-intro">
        <div className="page-wrap">
          <span className="eyebrow">Resume · Bryan Peens</span>
          <h1 className="display-title">A hands-on background in <span>technology and operations.</span></h1>
          <p>Experience across software development, logistics, warehousing, and production, supported by technical training and a practical, team-focused approach.</p>
          <a className="button-secondary" href={resumePdf} download="Bryan-Peens-Resume.pdf">Download resume PDF <span aria-hidden="true">↓</span></a>
        </div>
      </section>
      <section className="resume-content page-wrap">
        <div className="resume-layout">
          <aside className="resume-aside">
            <h2>Summary</h2>
            <p>Hardworking and reliable, with experience in maintenance, repairs, web development, and warehousing. Enjoys learning new skills, solving problems, and working with others. Takes pride in doing a good job and being someone others can count on.</p>
            <div className="skills-strip">{skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
            <div className="contact-detail"><span>Phone</span><a href="tel:+16132957781">613 295 7781</a></div>
            <div className="contact-detail"><span>Email</span><a href="mailto:peensbryan75@gmail.com">peensbryan75@gmail.com</a></div>
            <div className="contact-detail"><span>Location</span><strong>Spencerville, ON K0E 1X0</strong></div>
            <div className="contact-detail"><span>Additional</span><strong>Valid Ontario driver’s license · Reliable transportation</strong></div>
            <Link className="button-primary" to="/Contact">Contact Bryan <span aria-hidden="true">↗</span></Link>
          </aside>
          <div>
            <section className="resume-group">
              <h2>Professional experience</h2>
              {experience.map((item) => <article className="resume-entry" key={item.role}><h3>{item.role}</h3><div className="resume-meta">{item.company} · {item.place} · {item.dates}</div><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>)}
            </section>
            <section className="resume-group">
              <h2>Education</h2>
              <article className="resume-entry"><h3>Software Engineering · Coding Boot Camp</h3><div className="resume-meta">University of Toronto, School of Continuing Studies · Jun 2024 · Ontario</div></article>
              <article className="resume-entry"><h3>Diploma in Information Technology</h3><div className="resume-meta">Belgium Campus ITversity · Dec 2019 · South Africa</div></article>
              <article className="resume-entry"><h3>Matric · Grade 12</h3><div className="resume-meta">High School Akasia · Dec 2010 · South Africa</div></article>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}