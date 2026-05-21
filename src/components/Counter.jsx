// import React, { useEffect, useState } from "react";
// function Counter() {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState(1);

//   function Increment() {
//      setCount(count + Number(value));
//   }

//   function Decrement() {
//     if (count > 0) {
//       setCount(count - Number(value));
//     }
//   }

//   function Reset() {
//     setCount(0);
//   }
// useEffect(() => {
//     console.log('count changed to ',[count]);
//   },[count]);

//   return (
//     <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6">

//       {/* Main Card */}
//       <div className="relative w-full max-w-sm rounded-[35px] bg-gradient-to-br from-slate-800 via-slate-900 to-black p-8 shadow-[0_0_60px_rgba(0,0,0,0.7)] border border-white/10 overflow-hidden">

//         {/* Neon Glow */}
//         <div className="absolute -top-16 -left-16 w-56 h-56 bg-cyan-500/20 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl"></div>

//         {/* Title */}
//         <h1 className="relative text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-8">
//           Counter
//         </h1>

//         {/* Counter Display */}
//         <div className="relative flex justify-center mb-10">
//           <div className="w-36 h-36 rounded-full border-4 border-cyan-400/30 bg-white/5 backdrop-blur-lg flex items-center justify-center shadow-inner">
            
//             <h2 className="text-6xl font-black text-white">
//               {count}
//             </h2>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="relative flex flex-col gap-4">

//           {/* Increment */}
//           <button
//             onClick={Increment}
//             className="py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold tracking-wide transition-all duration-300 hover:scale-105"
//           >
//             Increment
//           </button>

//           {/* Decrement */}
//           <button
//             onClick={Decrement}
//             className="py-3 rounded-2xl bg-pink-500 hover:bg-pink-400 text-white font-bold tracking-wide transition-all duration-300 hover:scale-105"
//           >
//             Decrement
//           </button>

//           {/* Reset */}
//           <button
//             onClick={Reset}
//             className="py-3 rounded-2xl border border-white/20 bg-white/5 text-white font-bold tracking-wide hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
//           >
//             Reset
//           </button>
//         </div>

//         {/* Bottom Decoration */}
//         <div className="relative mt-8 flex justify-center">
//           <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Counter;
