import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Rings Wedding', 'Bracelets', 'necklaces'];

const AboutUs = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="flex justify-center text-black items-center text-3xl md:text-7xl font-bold">
        <div className="">
         <span className="text-900 text-lg rotate-12">Welcome to our exquisite jewelry store in Morocco</span>
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </div>
        <div className="">
        </div>
    </div>
  );
};
export default AboutUs