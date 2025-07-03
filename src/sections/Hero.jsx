// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { PerspectiveCamera } from "@react-three/drei";
// import HackerRoom from "../components/HackerRoom.jsx";
// // import CanvasLoader from "../components/CanvasLoader.jsx";
// import { useMediaQuery } from "react-responsive";
// import { calculateSizes } from "../constants/index.js";
// import Target from "../components/Target.jsx";
// import ReactLogo from "../components/ReactLogo.jsx";
// import Cube from "../components/Cube.jsx";
// import Rings from "../components/Rings.jsx";
// import HeroCamera  from "../components/HeroCamera.jsx";
// import Button from "../components/Button.jsx";

// const Hero = () => {
//   const isSmall = useMediaQuery({ maxWidth: 440 });
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

//   const sizes = calculateSizes(isSmall, isMobile, isTablet);

//   return (
//     <section className="min-h-screen w-full flex flex-col relative">
//       <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 lg:pb-40">
//         <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
//           Hi, I am Khathir
//           <span className="waving-hand">👋👋</span>
//         </p>
//         <p className="hero_tag text-gray_gradient">
//           Building Products & Brands
//         </p>
//       </div>

//       <div className="w-full h-full absolute inset-0">
//         {/* <Leva /> */}
//         <Canvas className={"w-full h-full"}>
//           <Suspense>
//             <PerspectiveCamera makeDefault position={[0, 0, 20]} />

//             <HeroCamera>
//               {/* <HackerRoom
//                 position={sizes.deskPosition}
//                 rotation={[0, -Math.PI, 0]}
//                 scale={sizes.deskScale}
//               /> */}
//             </HeroCamera>
//           {/* <p>No be by force</p> */}

//             <group>
//               <Target position={sizes.targetPosition} />
//               <ReactLogo position={sizes.reactLogoPosition} />
//               <Cube position={sizes.cubePosition} />
//               <Rings position={sizes.ringPosition} />
//             </group>

//             <ambientLight intensity={1} />

//             <directionalLight position={[10, 10, 10]} intensity={0.5} />
//           </Suspense>
//         </Canvas>
//       </div>

//         <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
//             <a href="#About" className="w-fit">
//                 <Button name="Let's work together" isBeam containerClass={"sm:w-fit w-full sm:min-w-96"}></Button>
//             </a>
//         </div>

//     </section>
//   );
// };
// export default Hero;

// import { useEffect, useRef } from "react";
// import Typewriter from 'typewriter-effect/dist/core';
// import Button from "../components/Button.jsx";

// const Hero = () => {
//   const typewriterRef = useRef(null);

//   useEffect(() => {
//     const typewriter = new Typewriter(typewriterRef.current, {
//       strings: [
//         'Full Stack Software Developer',
//         'Sui Blockchain developer',
//         'Techinical Consultant',
//         'Creating Digital Experiences',
//       ],
//       autoStart: true,
//       loop: true,
//       delay: 75,
//       deleteSpeed: 60,
//       pauseFor: 1000,
//     });

//     return () => {
//       typewriter.stop();
//     };
//   }, []);

//   return (
//     <section className="min-h-screen w-full flex flex-col relative bg-black">
//       <div className="w-full mx-auto flex flex-col justify-center items-center min-h-screen c-space gap-8">
//         <div className="text-center">
//           <p className="sm:text-5xl text-4xl font-medium text-white font-generalsans mb-4">
//             Hi, I am Khathir
//             <span className="waving-hand ml-4">👋👋</span>
//           </p>
          
//           <div className="sm:text-3xl text-2xl font-medium text-gray_gradient min-h-[60px] flex items-center justify-center">
//             <span ref={typewriterRef}></span>
//           </div>
//         </div>

//         <div className="mt-8">
//           <a href="#About" className="w-fit">
//             <Button 
//               name="Let's work together" 
//               isBeam 
//               containerClass="sm:w-fit w-full sm:min-w-96"
//             />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

        

import { useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import Button from "../components/Button.jsx";
import { User, Code, Database, Cpu, Layers, Zap } from 'lucide-react';

const Hero = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        'Full-Stack Software Developer',
        'Sui Blockchain Developer',
        'Techinical Consultant',
        'Creating Digital Experiences',
      ],
      autoStart: true,
      loop: true,
      delay: 60,
      deleteSpeed: 40,
      pauseFor: 1000,
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative bg-black overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* React Icon */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
            <Code className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        
        {/* User Icon */}
        <div className="absolute top-32 right-16 animate-pulse hidden md:block">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/30">
            <User className="w-6 h-6 text-green-400" />
          </div>
        </div>
        
        {/* Database Icon (representing backend) */}
        <div className="absolute bottom-40 left-20 animate-bounce delay-500 hidden md:block">
          <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
            <Database className="w-7 h-7 text-purple-400" />
          </div>
        </div>
        
        {/* CPU Icon (representing performance) */}
        <div className="absolute top-40 right-32 animate-pulse delay-1000 sm:hidden">
          <div className="w-18 h-18 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-500/30">
            <Cpu className="w-9 h-9 text-orange-400" />
          </div>
        </div>
        
        {/* Layers Icon (representing Next.js/frameworks) */}
        <div className="absolute bottom-60 right-10 animate-bounce delay-700">
          <div className="w-13 h-13 bg-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-500/30">
            <Layers className="w-7 h-7 text-cyan-400" />
          </div>
        </div>
        
        {/* Zap Icon (representing fast development) */}
        <div className="absolute top-60 left-32 animate-pulse delay-300 hidden lg:block">
          <div className="w-15 h-15 bg-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-500/30">
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        
        {/* Additional floating elements for mobile */}
        <div className="absolute bottom-20 left-8 animate-bounce delay-1200 sm:hidden">
          <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-pink-500/30">
            <Code className="w-5 h-5 text-pink-400" />
          </div>
        </div>
        
        <div className="absolute top-16 right-8 animate-pulse delay-800 sm:hidden">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-indigo-500/30">
            <Database className="w-6 h-6 text-indigo-400" />
          </div>
        </div>
      </div>

      <div className="w-full mx-auto flex flex-col justify-center items-center min-h-screen c-space gap-8 relative z-10">
        <div className="text-center">
          <p className="sm:text-5xl text-4xl font-medium text-white font-generalsans mb-4">
            Hi, I am Khathir
            <span className="waving-hand ml-4">👋👋</span>
          </p>
          
          <div className="sm:text-3xl text-2xl font-semibold text-gray_gradient min-h-[60px] flex items-center justify-center">
            <span ref={typewriterRef}></span>
          </div>
        </div>

        <div className="mt-8">
          <a href="#contact" className="w-fit">
            <Button 
              name="Let's work together" 
              isBeam 
              containerClass="sm:w-fit w-full sm:min-w-96"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;