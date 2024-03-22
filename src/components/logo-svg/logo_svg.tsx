import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";

const LogoSVG: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>> =
  forwardRef((props, ref) => {
    return (
      <svg
        ref={ref}
        width="153"
        height="153"
        viewBox="0 0 153 153"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="76.5"
          cy="76.5"
          r="75.5"
          fill="black"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M42.3945 45.25V70.75H64.412C66.0516 70.75 67.6759 70.4337 69.1957 69.8186C79.8174 65.5193 79.8174 50.4807 69.1957 46.1814C67.6759 45.5663 66.0516 45.25 64.412 45.25H42.3945Z"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M42.3945 81.75V107.75H67.1754C68.7256 107.75 70.2634 107.473 71.716 106.931C82.9952 102.727 82.9952 86.7732 71.716 82.5688C70.2634 82.0273 68.7256 81.75 67.1754 81.75H42.3945Z"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M98.5317 68.1743V105.75H110.057V68.1743"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M98.3945 56.9621V45.75H110.605V56.9621"
          stroke="white"
          strokeWidth="2"
        />
        <rect
          x="99.1644"
          y="60.1958"
          width="11"
          height="4.74463"
          fill="white"
        />
      </svg>
    );
  });

export default LogoSVG;
