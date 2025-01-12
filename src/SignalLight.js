import React, { useState, useEffect, use } from "react";

const colorConfig = {
  red: {
    backgroundColor: "red",
    duration: 5000,
    next: "orange",
  },
  orange: {
    backgroundColor: "orange",
    duration: 1000,
    next: "green",
  },
  green: {
    backgroundColor: "green",
    duration: 3000,
    next: "red",
  },
};

export default function SignalLight() {
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(() => {
    const { duration, next } = colorConfig[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);


  const SignalLightComponent = ({ backgroundStyle }) => {
    return (
      <div class="black-box">
      <div className="sig" style={{ backgroundColor: backgroundStyle }}></div>
      </div>
    );
  };


  return (
    <div>
      {Object.keys(colorConfig).map((color) => (
        <SignalLightComponent
          key={color}
          backgroundStyle={color===currentColor ? colorConfig[color].backgroundColor:undefined}

        />
      ))}
    </div>
  );
}

