import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: card, start: "top bottom-=100" },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper " ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="ShipDrink.com" />
            </div>
            <div className="text-content">
              <h2>
                Making a simple website for Ordering drinks from any stores in
                the country called ShipDrink.com.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Vite, Shadcn, & TailwindCSS for a fast,
                user-friendly experience. NodeJS, Express.js and Mongo Atlas for
                API and database
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="overflow-hidden project-list-wrapper">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#363636]">
                <img src="/images/project2.png" alt="Tower Defence Game" />
              </div>
              <h2>Tower Defence Game</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#363636]">
                <img src="/images/project3.png" alt="Modern Login Page" />
              </div>
              <h2>Modern Login Page</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
