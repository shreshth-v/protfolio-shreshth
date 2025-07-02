import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper relative group cursor-pointer">
              {/* Project Image */}
              <img
                src="/images/nexachat.png"
                alt="NexaChat Screenshot"
                className="block w-full h-auto"
              />

              {/* Overlay with Buttons (shown on hover) */}
              <div
                className="
          absolute inset-0 flex items-center justify-center gap-4
          bg-black/60 opacity-0 transition-opacity duration-200
          group-hover:opacity-100
        "
              >
                {/* Live Demo Button */}
                <a
                  href="https://nexachat-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
            px-4 py-2 rounded-lg font-semibold
            bg-transparent ring-2 ring-white text-white
            hover:bg-white hover:text-gray-900 transition
            flex items-center gap-2
          "
                >
                  <HiOutlineExternalLink className="text-lg" />
                  <span>Live Demo</span>
                </a>

                {/* Source Code Button */}
                <a
                  href="https://github.com/shreshth-v/NEXACHAT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
            px-4 py-2 rounded-lg font-semibold
            bg-transparent ring-2 ring-white text-white
            hover:bg-white hover:text-gray-900 transition
            flex items-center gap-2
          "
                >
                  <FaGithub className="text-lg" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
            <div className="text-content">
              <h2>NexaChat | AI-Powered Real-Time Chat App</h2>
              <p className="text-white-50 md:text-xl">
                Built using the MERN stack and Socket.io, NexaChat delivers
                real-time chat with smart AI replies, media sharing, and secure
                JWT authentication.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/todo.png"
                  alt="Library Management Platform"
                  className="rounded-1"
                />
              </div>
              <h2>The Task Management Platform</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ffc2e8]">
                <img src="/images/map.png" alt="YC Directory App" />
              </div>
              <h2>
                PropVista | State-wise Real Estate Trends with Map & Charts
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
