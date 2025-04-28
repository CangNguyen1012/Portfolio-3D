import AnimatedCounter from "../components/AnimatedCounter.jsx";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { words } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center w-screen px-5 md:w-full md:px-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center gap-1 pb-2 md:gap-3"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="p-1 bg-purple-500 rounded-full xl:size-12 md:size-10 size-7 md:p-2"
                        />
                        <span className="text-purple-300">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="relative z-10 pointer-events-none text-white-50 md:text-xl">
              Hi, I'm Cang, a chill mid-level developer based in Vietnam <br />
              with a passion of coding for fun and make drinks.
            </p>
            <Button
              className="h-12 md:w-80 md:h-16 w-60"
              id="button"
              text="See my work"
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
