import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import TitleHeader from "../components/TitleHeader";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  const handleDownload = () => {
    console.log("hiii");
    const link = document.createElement("a");
    link.href = "/Resume_Shreshth.pdf";
    link.download = "Resume_Shreshth.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Turning ideas into</h1>
              <h1>full-stack solutions</h1>

              <h1>
                using
                <span className="slide">
                  <span className="wrapper">
                    {words.map(({ text, Icon, className }, i) => (
                      <span
                        key={i}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <Icon className={className} />
                        <span>{text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Shreshth, a MERN stack developer with 1+ year of
              experience
            </p>

            <div
              onClick={handleDownload}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleDownload()}
              className="cta-wrapper md:w-80 md:h-16 w-60 h-12"
            >
              <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">Resume</p>
                <div className="arrow-wrapper">
                  <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <TitleHeader
        title="Featured Projects"
        sub="🚀 Real-World Builds & Case Studies"
      />
    </section>
  );
};

export default Hero;
