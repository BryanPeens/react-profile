import React from "react";
import Card from "../components/Card";

import banana from "../assets/images/Banana.png";
import threeShirt from "../assets/images/threeShirt.png";
import summarizer from "../assets/images/summarizer.png";
import workImg1 from "../assets/images/workImg1.png";
import silky from "../assets/images/silky.png";
import spacetagram from "../assets/images/spacetagram.png";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item 1 */}
          <Card
            title="Banana Creative"
            image={banana}
            demoLink="https://dall-e-creator-client.onrender.com/"
            codeLink="https://github.com/BryanPeens/dalle-e-creator"
          />

          {/* Grid Item 2 */}
          <Card
            title="Three Shirt Designer"
            image={threeShirt}
            demoLink="https://threejs-ai-client.onrender.com/"
            codeLink="https://github.com/BryanPeens/threejs_ai"
          />

          {/* Grid Item 3 */}
          <Card
            title="AI Article Summarizer"
            image={summarizer}
            demoLink="https://ornate-selkie-56d420.netlify.app/"
            codeLink="https://github.com/BryanPeens/Ai_Summarizer"
          />

          {/* Grid Item 4 */}
          <Card
            title="React Weather App"
            image={workImg1}
            demoLink="https://bryanpeens.github.io/weather-app-react"
            codeLink="https://github.com/BryanPeens/weather-app-react"
          />

          {/* Grid Item 5 */}
          <Card
            title="React JS Application"
            image={silky}
            demoLink="https://bryanpeens.github.io/Silky-Web-Design/"
            codeLink="https://github.com/BryanPeens/Silky-Web-Design"
          />

          {/* Grid Item 6 */}
          <Card
            title="Polaris Application"
            image={spacetagram}
            demoLink="https://bryanpeens.github.io/spacetagram/"
            codeLink="https://github.com/BryanPeens/spacetagram"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
