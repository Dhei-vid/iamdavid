import anime from "animejs/lib/anime.es.js";
import { useEffect, useRef, useState } from "react";
import LogoSVG from "../logo-svg/logo_svg";
import Image from "next/image";
import SVGLogo from "../../../assets/logo/React logo.svg";

import "./splashScreen.scss";
import { url } from "inspector";

interface IFinishedLoading {
  finishedLoading: () => void;
}

const SplashScreen: React.FC<IFinishedLoading> = ({ finishedLoading }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const animate = () => {
    anime({
      targets: svgRef.current?.querySelectorAll("path, rect"),
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: anime.stagger(200),
      direction: "alternate",
      loop: false,
      complete: finishedLoading,
    });
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    if (isMounted) {
      animate();
    }
  }, [isMounted]);

  return (
    <div className="flex h-screen items-center justify-center">
      <LogoSVG ref={svgRef} />
      <div className="bg-black w-24 h-24 flex items-center justify-center">
        <Image src={SVGLogo} alt="Logo" width={60} height={60} />
      </div>
    </div>
  );
};

export default SplashScreen;
