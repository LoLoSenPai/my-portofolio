const SVGBackground = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z--10">
      <svg className="w-full h-full filter blur-2xl" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="25%"
          className="fill-light-blue-svg dark:fill-dark-blue-svg">
          <animate attributeName="r" values="25%;30%;25%" dur="10s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default SVGBackground;