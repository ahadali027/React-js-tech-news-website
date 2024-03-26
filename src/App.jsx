import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import Serach from "./components/Serach";
import Stories from "./components/Stories";

function App() {
  return (
    <>
      {/* <div>Welcom to News Website of </div> */}
      <Serach />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;

// the solution of the error is  const Data = useGlobalCustomHook(); is paranteisi ()

// import { useEffect, useState } from "react";
// import "./App.css";
// import Paginatio from "./components/Paginatio";
// import Serach from "./components/Serach";
// import Stories from "./components/Stories";
// import { useGlobalCustomHook } from "./components/Context";

// function App() {
//   // Call the custom hook function
//   const Data = useGlobalCustomHook();

//   return (
//     <>
//       <div>Welcome to News Website of {Data}</div>
//       <Serach />
//       <Paginatio />
//       <Stories />
//     </>
//   );
// }

// export default App;
