import React from 'react';
import Card from '../components/Card';

import banana from '../assets/images/Banana.png';
import threeShirt from '../assets/images/threeShirt.png';
import summarizer from '../assets/images/summarizer.png';
import workImg1 from '../assets/images/workImg1.png';
import silky from '../assets/images/silky.png';
import spacetagram from '../assets/images/spacetagram.png';
import rebelStore from '../assets/images/RebelStore.png';
import bridging from '../assets/images/BridgingTheCanyon.png';
import empTracker from '../assets/images/EmpTracker.png';
import devsMind from '../assets/images/DevsMind.png';
import taskBoard from '../assets/images/TaskBoard.png';
import weatherDash from '../assets/images/WeatherDash.png';
import motionTracker from '../assets/images/MotionTracker.png';

const projects = [
  ['Rebel Ecommerce', rebelStore, 'https://rebel-store-sanity.vercel.app', 'https://github.com/BryanPeens/rebel_store_sanity'],
  ['A Devs Mind', devsMind, 'https://bryanpeens.github.io/personal-blog/index.html', 'https://github.com/BryanPeens/personal-blog'],
  ['Bridging The Canyon', bridging, 'https://bridging-the-canyon-blog.vercel.app', 'https://github.com/BryanPeens/btc-blog'],
  ['Three Shirt Designer', threeShirt, 'https://threejs-ai-client.onrender.com', 'https://github.com/BryanPeens/threejs_ai'],
  ['AI Article Summarizer', summarizer, 'https://ornate-selkie-56d420.netlify.app', 'https://github.com/BryanPeens/Ai_Summarizer'],
  ['React Weather App', workImg1, 'https://bryanpeens.github.io/weather-app-react', 'https://github.com/BryanPeens/weather-app-react'],
  ['Silky Web Design', silky, 'https://bryanpeens.github.io/Silky-Web-Design', 'https://github.com/BryanPeens/Silky-Web-Design'],
  ['Spacetagram', spacetagram, 'https://bryanpeens.github.io/spacetagram', 'https://github.com/BryanPeens/spacetagram'],
  ['Banana Creative', banana, 'https://dall-e-creator-client.onrender.com', 'https://github.com/BryanPeens/dalle-e-creator'],
  ['Employee Tracker', empTracker, 'https://bryanpeens.github.io/employee-payroll-tracker', 'https://github.com/BryanPeens/employee-payroll-tracker'],
  ['Task Board', taskBoard, 'https://bryanpeens.github.io/task-manager', 'https://github.com/BryanPeens/task-manager'],
  ['Weather Dashboard', weatherDash, 'https://bryanpeens.github.io/weather-dashboard', 'https://github.com/BryanPeens/weather-dashboard'],
  ['AI Motion Tracker', motionTracker, 'https://ai-motion-tracker.onrender.com', 'https://github.com/BryanPeens/Motion-Tracker'],
];

export default function Portfolio() {
  return (
    <>
      <section className="page-intro">
        <div className="page-wrap">
          <span className="eyebrow">Portfolio · 13 projects</span>
          <h1 className="display-title">A collection of <span>things I’ve built.</span></h1>
          <p>Selected experiments and products across commerce, creative tools, integrations, and the everyday web.</p>
        </div>
      </section>
      <section className="project-listing page-wrap" aria-label="Project list">
        <div className="project-grid">
          {projects.map(([title, image, demoLink, codeLink]) => <Card key={title} title={title} image={image} demoLink={demoLink} codeLink={codeLink} />)}
        </div>
      </section>
    </>
  );
}