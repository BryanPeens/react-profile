import React from "react";
import Card from "../components/Card";

import banana from "../assets/images/Banana.png";
import threeShirt from "../assets/images/threeShirt.png";
import summarizer from "../assets/images/summarizer.png";
import workImg1 from "../assets/images/workImg1.png";
import silky from "../assets/images/silky.png";
import spacetagram from "../assets/images/spacetagram.png";
import rebelStore from "../assets/images/RebelStore.png";
import bridging from "../assets/images/BridgingTheCanyon.png";
import empTracker from "../assets/images/EmpTracker.png";
import devsMind from "../assets/images/DevsMind.png";
import taskBoard from "../assets/images/TaskBoard.png";
import weatherDash from "../assets/images/WeatherDash.png";
import motionTracker from "../assets/images/MotionTracker.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full min-h-screen text-gray-300 py-20 md:py-40"
    >
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="pb-4">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-4 border-red-800 text-center">
            Some Projects
          </p>
        </div>

        {/* Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Grid Item 1 */}
          <Card
            title="Rebel Ecommerce"
            image={rebelStore}
            demoLink="https://rebel-store-sanity.vercel.app"
            codeLink="https://github.com/BryanPeens/rebel_store_sanity"
          />
          {/* Grid Item 2 */}
          <Card
            title="A Devs Mind"
            image={devsMind}
            demoLink="https://bryanpeens.github.io/personal-blog/index.html"
            codeLink="https://github.com/BryanPeens/personal-blog"
          />
          {/* Grid Item 3 */}
          <Card
            title="Bridging The Canyon"
            image={bridging}
            demoLink="https://bridging-the-canyon-blog.vercel.app"
            codeLink="https://github.com/BryanPeens/btc-blog"
          />
          {/* Grid Item 4 */}
          <Card
            title="Three Shirt Designer"
            image={threeShirt}
            demoLink="https://threejs-ai-client.onrender.com"
            codeLink="https://github.com/BryanPeens/threejs_ai"
          />
          {/* Grid Item 5 */}
          <Card
            title="AI Article Summarizer"
            image={summarizer}
            demoLink="https://ornate-selkie-56d420.netlify.app"
            codeLink="https://github.com/BryanPeens/Ai_Summarizer"
          />
          {/* Grid Item 6 */}
          <Card
            title="React Weather App"
            image={workImg1}
            demoLink="https://bryanpeens.github.io/weather-app-react"
            codeLink="https://github.com/BryanPeens/weather-app-react"
          />
          {/* Grid Item 7 */}
          <Card
            title="React JS Application"
            image={silky}
            demoLink="https://bryanpeens.github.io/Silky-Web-Design"
            codeLink="https://github.com/BryanPeens/Silky-Web-Design"
          />
          {/* Grid Item 8 */}
          <Card
            title="Polaris Application"
            image={spacetagram}
            demoLink="https://bryanpeens.github.io/spacetagram"
            codeLink="https://github.com/BryanPeens/spacetagram"
          />
          {/* Grid Item 9 */}
          <Card
            title="Banana Creative"
            image={banana}
            demoLink="https://dall-e-creator-client.onrender.com"
            codeLink="https://github.com/BryanPeens/dalle-e-creator"
          />
          {/* Grid Item 10 */}
          <Card
            title="Employee Tracker"
            image={empTracker}
            demoLink="https://bryanpeens.github.io/employee-payroll-tracker"
            codeLink="https://github.com/BryanPeens/employee-payroll-tracker"
          />
          {/* Grid Item 11 */}
          <Card
            title="Task Board"
            image={taskBoard}
            demoLink="https://bryanpeens.github.io/task-manager"
            codeLink="https://github.com/BryanPeens/task-manager"
          />
          {/* Grid Item 12 */}
          <Card
            title="Weather Dashboard"
            image={weatherDash}
            demoLink="https://bryanpeens.github.io/weather-dashboard"
            codeLink="https://github.com/BryanPeens/weather-dashboard"
          />
          {/* Grid Item 12 */}
          <Card
            title="AI Motion Tracker"
            image={motionTracker}
            demoLink="https://ai-motion-tracker.onrender.com"
            codeLink="https://github.com/BryanPeens/Motion-Tracker"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
