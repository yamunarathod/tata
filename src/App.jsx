// import { useState } from 'react';
// import './App.css';
// import Seat from './components/Seat';
// import SeatingArrangement from './components/SeatingArrangement';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <BrowserRouter>
//       <div>
//         <Routes>
//           {/* Define unique paths for each component */}
//           <Route path="/" element={<Seat />} />
//           <Route path="/seating-arrangement" element={<SeatingArrangement />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;








import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm'; // Your component
import SeatingArrangement from './components/SeatingArrangement'; // Your seating component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchForm />} />
        <Route path="/seating" element={<SeatingArrangement />} />
      </Routes>
    </Router>
  );
}

export default App;
