import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Hero from "../components/Hero";
import Card from "../components/Card";
import rebelStore from "../assets/images/RebelStore.png";
import threeShirt from "../assets/images/threeShirt.png";
import summarizer from "../assets/images/summarizer.png";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section-block" id="selected-work">
        <div className="page-wrap">
          <div className="section-heading"><div><span className="eyebrow">Selected work</span><h2>Ideas, made real.</h2></div><p>A few projects that bring together product thinking, practical engineering, and a little bit of curiosity.</p></div>
          <div className="project-grid">
            <Card title="Rebel Ecommerce" image={rebelStore} demoLink="https://rebel-store-sanity.vercel.app" codeLink="https://github.com/BryanPeens/rebel_store_sanity" />
            <Card title="Three Shirt Designer" image={threeShirt} demoLink="https://threejs-ai-client.onrender.com" codeLink="https://github.com/BryanPeens/threejs_ai" />
            <Card title="AI Article Summarizer" image={summarizer} demoLink="https://ornate-selkie-56d420.netlify.app" codeLink="https://github.com/BryanPeens/Ai_Summarizer" />
            <div className="project-card project-more"><span className="eyebrow">13 projects</span><h3>There’s more to explore.</h3><p>Browse the full collection of experiments, tools, and shipped work.</p><Link className="text-link" to="/Portfolio">View all projects <FaArrowRight aria-hidden="true" /></Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
