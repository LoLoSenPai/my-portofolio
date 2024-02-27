import { useRef, useState } from 'react';

const ButtonAnimatedGradient = ({ href, children }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <a href={href} target="_blank" className="inline-block">
      <button
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative inline-flex items-center justify-center h-12 pl-2 pr-4 overflow-hidden font-medium transition-colors border rounded-md shadow-2xl border-border-ui dark:border-dark-border-ui bg-gradient-to-r from-slate-200 to-slate-250 dark:from-[#0d2847] dark:to-[#00001f] text-text-high dark:text-dark-text-high focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 min-w-[124px]'
      >
        <div
          className='absolute transition duration-300 opacity-0 pointer-events-none -inset-px'
          style={{
            opacity,
            background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), #0000000f)`,
          }}
        />
        {children}
      </button>
    </a>
      );
};

      export default ButtonAnimatedGradient;