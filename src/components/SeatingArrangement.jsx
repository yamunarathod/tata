// // // // SeatingArrangement.js
// // // import React from 'react';
// // // import Seat from './Seat';

// // // const SeatingArrangement = () => {
// // //   const rows = Array.from({ length: 12 }, (_, i) => i + 1);

// // //   const renderSeats = (rowNumber) => {
// // //     const isOddRow = rowNumber % 2 !== 0;
// // //     const seatCount = isOddRow ? 8 : 6;
// // //     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
// // //     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

// // //     return (
// // //       <div style={styles.row}>
// // //         <div style={styles.side}>
// // //           {leftSeats.map((num) => (
// // //             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} />
// // //           ))}
// // //         </div>
// // //         <div style={styles.space}></div>
// // //         <div style={styles.side}>
// // //           {rightSeats.map((num) => (
// // //             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       {rows.map((rowNumber) => (
// // //         <div key={rowNumber} style={styles.rowContainer}>
// // //           {renderSeats(rowNumber)}
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //     padding: '20px',
// // //   },
// // //   rowContainer: {
// // //     marginBottom: '15px',
// // //   },
// // //   row: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //   },
// // //   side: {
// // //     display: 'flex',
// // //     gap: '10px',
// // //   },
// // //   space: {
// // //     width: '40px', // space between left and right seats
// // //   },
// // // };

// // // export default SeatingArrangement;


// // import React from 'react';
// // import Seat from './Seat';

// // const SeatingArrangement = () => {
// //   const rows = Array.from({ length: 12 }, (_, i) => i + 1);

// //   const renderSeats = (rowNumber) => {
// //     const isOddRow = rowNumber % 2 !== 0;
// //     const seatCount = isOddRow ? 8 : 6;
// //     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
// //     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

// //     // Set extra space width for even rows
// //     const spaceWidth = isOddRow ? '40px' : '100px';

// //     return (
// //       <div style={styles.row}>
// //         <div style={styles.side}>
// //           {leftSeats.map((num) => (
// //             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} />
// //           ))}
// //         </div>
// //         <div style={{ ...styles.space, width: spaceWidth }}></div>
// //         <div style={styles.side}>
// //           {rightSeats.map((num) => (
// //             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} />
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div style={styles.container}>
// //       {rows.map((rowNumber) => (
// //         <div key={rowNumber} style={styles.rowContainer}>
// //           {renderSeats(rowNumber)}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     padding: '20px',
// //   },
// //   rowContainer: {
// //     marginBottom: '15px',
// //   },
// //   row: {
// //     display: 'flex',
// //     alignItems: 'center',
// //   },
// //   side: {
// //     display: 'flex',
// //     gap: '10px',
// //   },

// // };

// // export default SeatingArrangement;


// import React, { useState } from 'react';
// import Seat from './Seat';

// const SeatingArrangement = () => {
//   const rows = Array.from({ length: 12 }, (_, i) => i + 1);
//   const [flipSeats, setFlipSeats] = useState(false);

//   const handleFlipSeats = () => {
//     setFlipSeats(true);
//     setTimeout(() => setFlipSeats(false), 1000); // Reset after animation duration
//   };

//   const renderSeats = (rowNumber) => {
//     const isOddRow = rowNumber % 2 !== 0;
//     const seatCount = isOddRow ? 8 : 6;
//     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//     return (
//       <div style={styles.row}>
//         <div style={styles.side}>
//           {leftSeats.map((num) => (
//             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} shouldFlip={flipSeats} />
//           ))}
//         </div>
//         <div style={styles.space}></div>
//         <div style={styles.side}>
//           {rightSeats.map((num) => (
//             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} shouldFlip={flipSeats} />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={styles.container}>
//       <button onClick={handleFlipSeats} style={styles.button}>Flip All Seats</button>
//       {rows.map((rowNumber) => (
//         <div key={rowNumber} style={styles.rowContainer}>
//           {renderSeats(rowNumber)}
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//   },
//   button: {
//     marginBottom: '20px',
//     padding: '10px 20px',
//     fontSize: '16px',
//   },
//   rowContainer: {
//     marginBottom: '15px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   side: {
//     display: 'flex',
//     gap: '10px',
//   },
//   space: {
//     width: '40px',
//   },
// };

// export default SeatingArrangement;





// import React, { useState } from 'react';
// import Seat from './Seat';

// const SeatingArrangement = () => {
//   const rows = Array.from({ length: 12 }, (_, i) => i + 1);
//   const [flipSeats, setFlipSeats] = useState({});

//   const handleSequentialFlip = async () => {
//     const allSeats = [];
//     rows.forEach((rowNumber) => {
//       const isOddRow = rowNumber % 2 !== 0;
//       const seatCount = isOddRow ? 8 : 6;
//       const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//       const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//       // Add each seat ID to the list for sequential flipping
//       leftSeats.forEach((num) => allSeats.push(`R${rowNumber}S${num}`));
//       rightSeats.forEach((num) => allSeats.push(`R${rowNumber}S${num}`));
//     });

//     // Flip each seat one by one with a 2-second delay
//     for (let i = 0; i < allSeats.length; i++) {
//       const seatId = allSeats[i];
//       setFlipSeats({ [seatId]: true });

//       // Wait for 2 seconds before flipping the next seat
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       // Reset the current seat flip after 1 second (matching animation duration)
//       setFlipSeats({ [seatId]: false });
//     }
//   };

//   const renderSeats = (rowNumber) => {
//     const isOddRow = rowNumber % 2 !== 0;
//     const seatCount = isOddRow ? 8 : 6;
//     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);
//     const spaceWidth = isOddRow ? '40px' : '100px';

//     return (
//       <div style={styles.row}>
//         <div style={styles.side}>
//           {leftSeats.map((num) => (
//             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} shouldFlip={flipSeats[`R${rowNumber}S${num}`]} />
//           ))}
//         </div>
//         <div style={styles.space}></div>
//         <div style={styles.side}>
//         <div style={{ ...styles.space, width: spaceWidth }}></div>
//           {rightSeats.map((num) => (
//             <Seat key={`${rowNumber}-${num}`} seatNumber={`R${rowNumber}S${num}`} shouldFlip={flipSeats[`R${rowNumber}S${num}`]} />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={styles.container}>
//       <button onClick={handleSequentialFlip} style={styles.button}>Flip Seats Sequentially</button>
//       {rows.map((rowNumber) => (
//         <div key={rowNumber} style={styles.rowContainer}>
//           {renderSeats(rowNumber)}
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//   },
//   button: {
//     marginBottom: '20px',
//     padding: '10px 20px',
//     fontSize: '16px',
//   },
//   rowContainer: {
//     marginBottom: '15px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   side: {
//     display: 'flex',
//     gap: '10px',
//   },
//   space: {
//     width: '40px',
//   },
// };

// export default SeatingArrangement;








// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
// import Seat from './Seat';

// const SeatingArrangement = () => {
//   const rows = Array.from({ length: 12 }, (_, i) => i + 1);
//   const [flipSeats, setFlipSeats] = useState({});
//   const location = useLocation(); // Get the location object
//   const seatNumber = location.state?.seatNumber; // Retrieve the seat number from the state
//   const role = location.state?.role; // Retrieve the role from the state (Employee or Vendor)

//   useEffect(() => {
//     if (seatNumber) {
//       console.log('Seat number:', seatNumber); // Log seat number
//     }
//     if (role) {
//       console.log('Role:', role); // Log role
//     }
//   }, [seatNumber, role]);

//   const handleSequentialFlip = async () => {
//     const allSeats = [];
//     rows.forEach((rowNumber) => {
//       const isOddRow = rowNumber % 2 !== 0;
//       const seatCount = isOddRow ? 8 : 6;
//       const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//       const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//       leftSeats.forEach((num) => allSeats.push(`R${rowNumber}S${num}`));
//       rightSeats.forEach((num) => allSeats.push(`R${rowNumber}S${num}`));
//     });

//     for (let i = 0; i < allSeats.length; i++) {
//       const seatId = allSeats[i];
//       setFlipSeats({ [seatId]: true });

//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       setFlipSeats({ [seatId]: false });
//     }
//   };

//   const renderSeats = (rowNumber) => {
//     const isOddRow = rowNumber % 2 !== 0;
//     const seatCount = isOddRow ? 8 : 6;
//     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//     // Ensure that role is defined
//     const rolePrefix = role ? role[0].toUpperCase() : ''; // Default to empty string if role is undefined

//     return (
//       <div style={styles.row}>
//         <div style={styles.side}>
//           {leftSeats.map((num) => {
//             const seatNumberFormatted = `${rolePrefix}${num}`; // Use rolePrefix
//             console.log('Rendering seat:', seatNumberFormatted); // Log the seat being rendered
//             return (
//               <Seat
//                 key={`${rowNumber}-${num}`}
//                 seatNumber={seatNumberFormatted}
//                 shouldFlip={flipSeats[`R${rowNumber}S${num}`]}
//               />
//             );
//           })}
//         </div>
//         <div style={styles.space}></div>
//         <div style={styles.side}>
//           {rightSeats.map((num) => {
//             const seatNumberFormatted = `${rolePrefix}${num + seatCount / 2}`; // Use rolePrefix
//             console.log('Rendering seat:', seatNumberFormatted); // Log the seat being rendered
//             return (
//               <Seat
//                 key={`${rowNumber}-${num}`}
//                 seatNumber={seatNumberFormatted}
//                 shouldFlip={flipSeats[`R${rowNumber}S${num}`]}
//               />
//             );
//           })}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={styles.container}>
//       <button onClick={handleSequentialFlip} style={styles.button}>Flip Seats Sequentially</button>
//       {rows.map((rowNumber) => (
//         <div key={rowNumber} style={styles.rowContainer}>
//           {renderSeats(rowNumber)}
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//   },
//   button: {
//     marginBottom: '20px',
//     padding: '10px 20px',
//     fontSize: '16px',
//   },
//   rowContainer: {
//     marginBottom: '15px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   side: {
//     display: 'flex',
//     gap: '10px',
//   },
//   space: {
//     width: '40px',
//   },
// };

// export default SeatingArrangement;





// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';  // Import axios for API calls
// import Seat from './Seat';

// const SeatingArrangement = () => {
//   const rows = Array.from({ length: 12 }, (_, i) => i + 1);
//   const [flipSeats, setFlipSeats] = useState({});
//   const [bookedSeats, setBookedSeats] = useState({}); // To track which seats are booked
//   const [attendedSeats, setAttendedSeats] = useState([]); // State to store attended seats

//   const location = useLocation();
//   const seatNumber = location.state?.seatNumber; // Get seat number like E1, V1 from the location state

//   // Employee and Vendor seat number counters
//   let employeeSeatCount = 1;
//   let vendorSeatCount = 1;

//   useEffect(() => {
//     // Fetch attended seats on component mount
//     const fetchAttendedSeats = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/attended-seats', {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });

//         setAttendedSeats(response.data);
//         console.log(response.data, "Attended Seats Data");
//       } catch (error) {
//         console.error('Error fetching attended seats', error);
//       }
//     };

//     fetchAttendedSeats();
//   }, []);




//   useEffect(() => {
//     if (seatNumber) {
//       // Flip the specific seat passed in the location
//       flipSeat(seatNumber);
//     }
//   }, [seatNumber]);

//   const flipSeat = (seat) => {
//     // Flip the specific seat (turn it black)
//     setFlipSeats((prev) => ({
//       ...prev,
//       [seat]: true, // Mark the seat as flipped
//     }));

//     // Mark seat as booked
//     setBookedSeats((prev) => ({
//       ...prev,
//       [seat]: true, 
//     }));

//     // Optionally reset the flipped seat after a delay
//     setTimeout(() => {
//       setFlipSeats((prev) => ({
//         ...prev,
//         [seat]: false, // Reset the flipped seat
//       }));
//     }, 2000); // Adjust timeout duration as needed
//   };


//   const renderSeats = (rowNumber) => {
//     const isOddRow = rowNumber % 2 !== 0;
//     const seatCount = isOddRow ? 8 : 6;
//     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//     const seats = [];

//     const spaceStyle = { width: isOddRow ? '20px' : '60px' }; // Wider space for even rows

//     const mapSeatNumbers = (sideSeats, rolePrefix) => {
//       return sideSeats.map((num) => {
//         let seatId = rolePrefix === 'E' ? `E${employeeSeatCount++}` : `V${vendorSeatCount++}`;
//         const isAttended = attendedSeats.includes(seatId);

//         return (
//           <Seat
//             key={seatId}
//             seatNumber={seatId}
//             shouldFlip={flipSeats[seatId]}
//             isBooked={bookedSeats[seatId]}
//             isAttended={isAttended} // Pass if the seat is attended
//           />
//         );
//       });
//     };

//     seats.push(
//       <div style={styles.side} key={`left-${rowNumber}`}>
//         {mapSeatNumbers(leftSeats, 'E')}
//       </div>
//     );

//     seats.push(<div style={spaceStyle} key={`space-${rowNumber}`}></div>);

//     seats.push(
//       <div style={styles.side} key={`right-${rowNumber}`}>
//         {mapSeatNumbers(rightSeats, 'V')}
//       </div>
//     );

//     return seats;
//   };


//   return (
//     <div style={styles.container}>
//       {rows.map((rowNumber) => (
//         <div key={rowNumber} style={styles.rowContainer}>
//           <div style={styles.row}>
//           {renderSeats(rowNumber)} 
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '10px',
//     marginTop:'10vh'
//   },
//   button: {
//     marginBottom: '20px',
//     padding: '10px 20px',
//     fontSize: '16px',
//   },
//   rowContainer: {
//     marginBottom: '10px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   side: {
//     display: 'flex',
//     gap: '5px',
//   },
//   space: {
//     width: '40px',
//   },
// };

// export default SeatingArrangement;





// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';  // Import axios for API calls
// import Seat from './Seat';

// const SeatingArrangement = () => {
//   const rows = Array.from({ length: 12 }, (_, i) => i + 1);
//   const [flipSeats, setFlipSeats] = useState({});
//   const [bookedSeats, setBookedSeats] = useState({}); // To track which seats are booked
//   const [attendedSeats, setAttendedSeats] = useState([]); // State to store attended seats

//   const location = useLocation();
//   const seatNumber = location.state?.seatNumber; // Get seat number like E1, V1 from the location state

//   // Employee and Vendor seat number counters
//   let employeeSeatCount = 1;
//   let vendorSeatCount = 1;

//   useEffect(() => {
//     // Fetch attended seats on component mount
//     const fetchAttendedSeats = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/attended-seats', {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });

//         setAttendedSeats(response.data);
//         console.log(response.data, "Attended Seats Data");
//       } catch (error) {
//         console.error('Error fetching attended seats', error);
//       }
//     };

//     fetchAttendedSeats();
//   }, []);




//   useEffect(() => {
//     if (seatNumber) {
//       // Flip the specific seat passed in the location
//       flipSeat(seatNumber);
//     }
//   }, [seatNumber]);

//   const flipSeat = (seat) => {
//     // Flip the specific seat (turn it black)
//     setFlipSeats((prev) => ({
//       ...prev,
//       [seat]: true, // Mark the seat as flipped
//     }));

//     // Mark seat as booked
//     setBookedSeats((prev) => ({
//       ...prev,
//       [seat]: true, 
//     }));

//     // Optionally reset the flipped seat after a delay
//     setTimeout(() => {
//       setFlipSeats((prev) => ({
//         ...prev,
//         [seat]: false, // Reset the flipped seat
//       }));
//     }, 2000); // Adjust timeout duration as needed
//   };


//   const renderSeats = (rowNumber) => {
//     let seatCount = 8; // Default seat count for rows

//     // Adjust seat count dynamically for specific rows
//     if (rowNumber >= 5 && rowNumber <= 9) {
//       seatCount = 10; // Add one seat to each side
//     } else if (rowNumber === 10) {
//       seatCount = 2; // Only two seats (one on each side)
//     }

//     const isOddRow = rowNumber % 2 !== 0;
//     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//     const seats = [];
//     const spaceStyle = { width: isOddRow ? '20px' : '60px' }; // Adjust space width if necessary

//     const mapSeatNumbers = (sideSeats, rolePrefix) => {
//       return sideSeats.map(() => {
//         let seatId;
//         if (rolePrefix === 'E') {
//           seatId = `E${employeeSeatCount}`;
//           employeeSeatCount++;
//         } else {
//           seatId = `V${vendorSeatCount}`;
//           vendorSeatCount++;
//         }
//         const isAttended = attendedSeats.includes(seatId);

//         return (
//           <Seat
//             key={seatId}
//             seatNumber={seatId}
//             shouldFlip={flipSeats[seatId]}
//             isBooked={bookedSeats[seatId]}
//             isAttended={isAttended} // Pass if the seat is attended
//           />
//         );
//       });
//     };

//     seats.push(
//       <div style={styles.side} key={`left-${rowNumber}`}>
//         {mapSeatNumbers(leftSeats, 'E')}
//       </div>
//     );

//     seats.push(<div style={spaceStyle} key={`space-${rowNumber}`}></div>);

//     seats.push(
//       <div style={styles.side} key={`right-${rowNumber}`}>
//         {mapSeatNumbers(rightSeats, 'V')}
//       </div>
//     );

//     return seats;
//   };



//   return (
//     <div style={styles.container}>
//       {rows.map((rowNumber) => (
//         <div key={rowNumber} style={styles.rowContainer}>
//           <div style={styles.row}>
//           {renderSeats(rowNumber)} 
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '10px',
//     marginTop:'10vh'
//   },
//   button: {
//     marginBottom: '20px',
//     padding: '10px 20px',
//     fontSize: '16px',
//   },
//   rowContainer: {
//     marginBottom: '10px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   side: {
//     display: 'flex',
//     gap: '5px',
//   },
//   space: {
//     width: '40px',
//   },
// };

// export default SeatingArrangement;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios'; // Import axios for API calls
// import Seat from './Seat';

// const SeatingArrangement = () => {
//   const rows = Array.from({ length: 10 }, (_, i) => i + 1); // Only include rows 1 to 10
//   const [flipSeats, setFlipSeats] = useState({});
//   const [bookedSeats, setBookedSeats] = useState({}); // To track which seats are booked
//   const [attendedSeats, setAttendedSeats] = useState([]); // State to store attended seats

//   const location = useLocation();
//   const seatNumber = location.state?.seatNumber; // Get seat number like E1, V1 from the location state

//   // Employee and Vendor seat number counters
//   let employeeSeatCount = 1;
//   let vendorSeatCount = 1;

//   useEffect(() => {
//     // Fetch attended seats on component mount
//     const fetchAttendedSeats = async () => {
//       try {
//         const response = await axios.get('https://orca-app-zbdu3.ondigitalocean.app/api/attended-seats', {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });

//         setAttendedSeats(response.data);
//         console.log(response.data, 'Attended Seats Data');
//       } catch (error) {
//         console.error('Error fetching attended seats', error);
//       }
//     };

//     fetchAttendedSeats();
//   }, []);

//   useEffect(() => {
//     if (seatNumber) {
//       // Flip the specific seat passed in the location
//       flipSeat(seatNumber);
//     }
//   }, [seatNumber]);

//   const flipSeat = (seat) => {
//     // Flip the specific seat (turn it black)
//     setFlipSeats((prev) => ({
//       ...prev,
//       [seat]: true, // Mark the seat as flipped
//     }));

//     // Mark seat as booked
//     setBookedSeats((prev) => ({
//       ...prev,
//       [seat]: true,
//     }));

//     // Optionally reset the flipped seat after a delay
//     setTimeout(() => {
//       setFlipSeats((prev) => ({
//         ...prev,
//         [seat]: false, // Reset the flipped seat
//       }));
//     }, 2000); // Adjust timeout duration as needed
//   };

//   const renderSeats = (rowNumber) => {
//     let seatCount = 8; // Default seat count for rows

//     // Adjust seat count dynamically for specific rows
//     if (rowNumber >= 5 && rowNumber <= 9) {
//       seatCount = 10; // Add one seat to each side
//     } else if (rowNumber === 10) {
//       seatCount = 2; // Only two seats (one on each side)
//     }

//     const isOddRow = rowNumber % 2 !== 0;
//     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//     const seats = [];
//     const spaceStyle = { width: isOddRow ? '20px' : '60px' }; // Adjust space width if necessary

//     const mapSeatNumbers = (sideSeats, rolePrefix) => {
//       return sideSeats.map(() => {
//         let seatId;
//         if (rolePrefix === 'E') {
//           seatId = `E${employeeSeatCount}`;
//           employeeSeatCount++;
//         } else {
//           seatId = `V${vendorSeatCount}`;
//           vendorSeatCount++;
//         }
//         const isAttended = attendedSeats.includes(seatId);

//         return (
//           <Seat
//             key={seatId}
//             seatNumber={seatId}
//             shouldFlip={flipSeats[seatId]}
//             isBooked={bookedSeats[seatId]}
//             isAttended={isAttended} // Pass if the seat is attended
//           />
//         );
//       });
//     };

//     seats.push(
//       <div style={styles.side} key={`left-${rowNumber}`}>
//         {mapSeatNumbers(leftSeats, 'E')}
//       </div>
//     );

//     seats.push(<div style={spaceStyle} key={`space-${rowNumber}`}></div>);

//     seats.push(
//       <div style={styles.side} key={`right-${rowNumber}`}>
//         {mapSeatNumbers(rightSeats, 'V')}
//       </div>
//     );

//     return seats;
//   };

//   return (
//     <div style={styles.mainContainer}>
//        <div style={styles.textContainer}>
//     <h1 style={styles.heading}>FIND YOUR SEAT</h1>
//   </div>
//     <div style={styles.imageContainer}>
//       <img src="../stage.png" alt="Centered Image" style={styles.image} />
//     </div>
//     <div style={styles.container}>
//       {rows.map((rowNumber) => (
//         <div key={rowNumber} style={styles.rowContainer}>
//           <div style={styles.row}>{renderSeats(rowNumber)}</div>
//         </div>
//       ))}
//     </div>
//   </div>

//   );
// };
// const styles = {
//   mainContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: '10vh',
//   },
//   textContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: '18px', // Space between the text and the image
//   },
//   heading: {
//     fontSize: '24px', // Adjust as needed
//     fontWeight: 'bold',
//     color: '#ECB60D', // Adjust text color as needed
//   },
//   imageContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: '15px', // Space between the image and the seating arrangement
//   },
//   image: {
//     width: '200px', // Adjust as needed
//     height: 'auto',
//     objectFit: 'contain', // Ensures the image is not distorted
//   },
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '10px',
//     marginLeft: '20px',  // Add margin to the left
//     marginRight: '20px', // Add margin to the right
//   },
//   button: {
//     marginBottom: '20px',
//     padding: '10px 20px',
//     fontSize: '16px',
//   },
//   rowContainer: {
//     marginBottom: '10px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   side: {
//     display: 'flex',
//     gap: '5px',
//   },
//   space: {
//     width: '40px',
//   },
// };

// export default SeatingArrangement;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios'; // Import axios for API calls
// import Seat from './Seat';

// const SeatingArrangement = () => {
//   const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']; // Extended with J and K rows
//   const rows = Array.from({ length: 11 }, (_, i) => i + 1); // Now covers up to row K
//   const [flipSeats, setFlipSeats] = useState({});
//   const [bookedSeats, setBookedSeats] = useState({}); // To track which seats are booked
//   const [attendedSeats, setAttendedSeats] = useState([]); // State to store attended seats

//   const location = useLocation();
//   const seatNumber = location.state?.seatNumber; // Get seat number like E1, V1 from the location state

//   useEffect(() => {
//     // Fetch attended seats on component mount
//     const fetchAttendedSeats = async () => {
//       try {
//         const response = await axios.get('https://orca-app-zbdu3.ondigitalocean.app/api/attended-seats', {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         // Combine employees and vendors into a single array
//         const combinedSeats = [...response.data.employees, ...response.data.vendors];
//         setAttendedSeats(combinedSeats);

//         console.log(response.data, 'Attended Seats Data');
//       } catch (error) {
//         console.error('Error fetching attended seats', error);
//       }
//     };

//     fetchAttendedSeats();
//   }, []);

//   useEffect(() => {
//     if (seatNumber) {
//       // Flip the specific seat passed in the location
//       flipSeat(seatNumber);
//     }
//   }, [seatNumber]);

//   const flipSeat = (seat) => {
//     // Flip the specific seat (turn it black)
//     setFlipSeats((prev) => ({
//       ...prev,
//       [seat]: true, // Mark the seat as flipped
//     }));

//     // Mark seat as booked
//     setBookedSeats((prev) => ({
//       ...prev,
//       [seat]: true,
//     }));

//     // Optionally reset the flipped seat after a delay
//     setTimeout(() => {
//       setFlipSeats((prev) => ({
//         ...prev,
//         [seat]: false, // Reset the flipped seat
//       }));
//     }, 2000); // Adjust timeout duration as needed
//   };

//   const renderSeats = (rowNumber) => {
//     let seatCount = 8; // Default seat count for rows
//     const rowLabel = rowLabels[rowNumber - 1];

//     // Adjust seat count dynamically for specific rows
//     if (rowNumber >= 5 && rowNumber <= 10) {
//       seatCount = 10; // 6 on each side
//     } else if (rowNumber === 11) {
//       seatCount = 2; // Only two seats (one on each side)
//     } 

//     const isOddRow = rowNumber % 2 !== 0;
//     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//     const seats = [];
//     const spaceStyle = { width: isOddRow ? '15px' : '50px' }; // Adjust space width if necessary

//     const mapSeatNumbers = (sideSeats) => {
//       return sideSeats.map((seatIndex) => {
//         const seatId = `${rowLabel}${seatIndex}`;
//         const isAttended = attendedSeats.includes(seatId); // Now this works!

//         return (
//           <Seat
//             key={seatId}
//             seatNumber={seatId}
//             shouldFlip={flipSeats[seatId]}
//             isBooked={bookedSeats[seatId]}
//             isAttended={isAttended} // Pass if the seat is attended
//           />
//         );
//       });
//     };

//     seats.push(
//       <div style={styles.side} key={`left-${rowNumber}`}>
//         {mapSeatNumbers(leftSeats)}
//       </div>
//     );

//     seats.push(<div style={spaceStyle} key={`space-${rowNumber}`}></div>);

//     seats.push(
//       <div style={styles.side} key={`right-${rowNumber}`}>
//         {mapSeatNumbers(rightSeats)}
//       </div>
//     );

//     return seats;
//   };

//   return (
//     <div style={styles.mainContainer}>
//       <div style={styles.textContainer}>
//         <h1 style={styles.heading}>FIND YOUR SEAT</h1>
//       </div>
//       <div style={styles.imageContainer}>
//         <img src="../stage.png" alt="Centered Image" style={styles.image} />
//       </div>
//       <div style={styles.container}>
//         {rows.map((rowNumber) => (
//           <div key={rowNumber} style={styles.rowContainer}>
//             <div style={styles.row}>{renderSeats(rowNumber)}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// const styles = {
//   mainContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: '10vh',
//   },
//   textContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: '18px',
//   },
//   heading: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#ECB60D',
//   },
//   imageContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: '15px',
//   },
//   image: {
//     width: '200px',
//     height: 'auto',
//     objectFit: 'contain',
//   },
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '10px',
//     marginLeft: '20px',
//     marginRight: '20px',
//     height: '55vh', // Set a fixed height for the container
//     overflowY: 'scroll', // Allow vertical scrolling if content overflows
//   },
//   rowContainer: {
//     marginBottom: '10px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   side: {
//     display: 'flex',
//     gap: '5px',
//   },
//   space: {
//     width: '40px',
//   },
// };

// export default SeatingArrangement;









// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios'; // Import axios for API calls
// import Seat from './Seat';

// const SeatingArrangement = () => {
//   const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']; // Extended with J and K rows
//   const rows = Array.from({ length: 11 }, (_, i) => i + 1); // Now covers up to row K
//   const [flipSeats, setFlipSeats] = useState({});
//   const [bookedSeats, setBookedSeats] = useState({}); // To track which seats are booked
//   const [attendedSeats, setAttendedSeats] = useState([]); // State to store attended seats

//   const location = useLocation();
//   const seatNumber = location.state?.seatNumber; // Get seat number like E1, V1 from the location state
//   const containerRef = useRef(null); // Ref for the scrollable container

//   useEffect(() => {
//     // Fetch attended seats on component mount
//     const fetchAttendedSeats = async () => {
//       try {
//         const response = await axios.get('https://orca-app-zbdu3.ondigitalocean.app/api/attended-seats', {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         // Combine employees and vendors into a single array
//         const combinedSeats = [...response.data.employees, ...response.data.vendors];
//         setAttendedSeats(combinedSeats);

//         console.log(response.data, 'Attended Seats Data');

//         // Scroll to the first attended seat
//         scrollToAttendedSeat(combinedSeats);
//       } catch (error) {
//         console.error('Error fetching attended seats', error);
//       }
//     };

//     fetchAttendedSeats();
//   }, []);

//   useEffect(() => {
//     if (seatNumber) {
//       // Flip the specific seat passed in the location
//       flipSeat(seatNumber);
//     }
//   }, [seatNumber]);

//   const scrollToAttendedSeat = (seats) => {
//     if (containerRef.current && seats.length > 0) {
//       // Find the first attended seat in the list
//       const firstAttendedSeat = seats[0];

//       // Find the element corresponding to the first attended seat
//       const attendedElement = document.getElementById(firstAttendedSeat);
//       if (attendedElement) {
//         // Scroll the container to the attended seat
//         attendedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       }
//     }
//   };

//   const flipSeat = (seat) => {
//     // Flip the specific seat (turn it black)
//     setFlipSeats((prev) => ({
//       ...prev,
//       [seat]: true, // Mark the seat as flipped
//     }));

//     // Mark seat as booked
//     setBookedSeats((prev) => ({
//       ...prev,
//       [seat]: true,
//     }));

//     // Optionally reset the flipped seat after a delay
//     setTimeout(() => {
//       setFlipSeats((prev) => ({
//         ...prev,
//         [seat]: false, // Reset the flipped seat
//       }));
//     }, 2000); // Adjust timeout duration as needed
//   };

//   const renderSeats = (rowNumber) => {
//     let seatCount = 8; // Default seat count for rows
//     const rowLabel = rowLabels[rowNumber - 1];

//     // Adjust seat count dynamically for specific rows
//     if (rowNumber >= 5 && rowNumber <= 10) {
//       seatCount = 10; // 6 on each side
//     } else if (rowNumber === 11) {
//       seatCount = 2; // Only two seats (one on each side)
//     }

//     const isOddRow = rowNumber % 2 !== 0;
//     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//     const seats = [];
//     const spaceStyle = { width: isOddRow ? '15px' : '50px' }; // Adjust space width if necessary

//     const mapSeatNumbers = (sideSeats) => {
//       return sideSeats.map((seatIndex) => {
//         const seatId = `${rowLabel}${seatIndex}`;
//         const isAttended = attendedSeats.includes(seatId);

//         return (
//           <Seat
//             key={seatId}
//             seatNumber={seatId}
//             shouldFlip={flipSeats[seatId]}
//             isBooked={bookedSeats[seatId]}
//             isAttended={isAttended}
//             id={seatId} // Add id to the element for scrolling
//           />
//         );
//       });
//     };

//     seats.push(
//       <div style={styles.side} key={`left-${rowNumber}`}>
//         {mapSeatNumbers(leftSeats)}
//       </div>
//     );

//     seats.push(<div style={spaceStyle} key={`space-${rowNumber}`}></div>);

//     seats.push(
//       <div style={styles.side} key={`right-${rowNumber}`}>
//         {mapSeatNumbers(rightSeats)}
//       </div>
//     );

//     return seats;
//   };

//   return (
//     <div style={styles.mainContainer}>
//       <div style={styles.textContainer}>
//         <h1 style={styles.heading}>FIND YOUR SEAT</h1>
//       </div>
//       <div style={styles.imageContainer}>
//         <img src="../stage.png" alt="Centered Image" style={styles.image} />
//       </div>
//       <div style={styles.container} ref={containerRef}>
//         {rows.map((rowNumber) => (
//           <div key={rowNumber} style={styles.rowContainer}>
//             <div style={styles.row}>{renderSeats(rowNumber)}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// const styles = {
//   mainContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: '10vh',
//   },
//   textContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: '18px',
//   },
//   heading: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#ECB60D',
//   },
//   imageContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: '15px',
//   },
//   image: {
//     width: '200px',
//     height: 'auto',
//     objectFit: 'contain',
//   },
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '10px',
//     marginLeft: '20px',
//     marginRight: '20px',
//     height: '55vh', // Set a fixed height for the container
//     overflowY: 'scroll', // Allow vertical scrolling if content overflows
//   },
//   rowContainer: {
//     marginBottom: '10px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   side: {
//     display: 'flex',
//     gap: '5px',
//   },
//   space: {
//     width: '40px',
//   },
// };

// export default SeatingArrangement;






// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Seat from './Seat';

// const SeatingArrangement = () => {
//   const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']; // Extended with J and K rows
//   const rows = Array.from({ length: 11 }, (_, i) => i + 1); // Now covers up to row K
//   const [flipSeats, setFlipSeats] = useState({});
//   const [bookedSeats, setBookedSeats] = useState({}); // To track which seats are booked
//   const [attendedSeats, setAttendedSeats] = useState([]); // State to store attended seats
//   const [activeSeat, setActiveSeat] = useState(null); // State to track the active seat

//   const location = useLocation();
//   const seatNumber = location.state?.seatNumber; // Get seat number like E1, V1 from the location state
//   const containerRef = useRef(null); // Ref for the scrollable container

//   useEffect(() => {
//     // Fetch attended seats on component mount
//     const fetchAttendedSeats = async () => {
//       try {
//         const response = await axios.get('https://orca-app-zbdu3.ondigitalocean.app/api/attended-seats', {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         // Combine employees and vendors into a single array
//         const combinedSeats = [...response.data.employees, ...response.data.vendors];
//         setAttendedSeats(combinedSeats);

//         console.log(response.data, 'Attended Seats Data');

//         // Scroll to the first attended seat
//         scrollToAttendedSeat(combinedSeats);
//       } catch (error) {
//         console.error('Error fetching attended seats', error);
//       }
//     };

//     fetchAttendedSeats();
//   }, []);

//   useEffect(() => {
//     if (seatNumber) {
//       // Flip the specific seat passed in the location
//       flipSeat(seatNumber);
//     }
//   }, [seatNumber]);

//   // Scroll to the active seat when it changes
//   useEffect(() => {
//     if (activeSeat) {
//       scrollToSeat(activeSeat);
//     }
//   }, [activeSeat]);

//   const scrollToAttendedSeat = (seats) => {
//     if (containerRef.current && seats.length > 0) {
//       // Find the first attended seat in the list
//       const firstAttendedSeat = seats[0];

//       // Find the element corresponding to the first attended seat
//       const attendedElement = document.getElementById(firstAttendedSeat);
//       if (attendedElement) {
//         // Scroll the container to the attended seat
//         attendedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       }
//     }
//   };

//   const scrollToSeat = (seatId) => {
//     setTimeout(() => {
//       const seatElement = document.getElementById(seatId);
//       if (seatElement && containerRef.current) {
//         const container = containerRef.current;
  
//         // Calculate the seat's position relative to the container
//         const containerRect = container.getBoundingClientRect();
//         const seatRect = seatElement.getBoundingClientRect();
//         const isSeatAbove = seatRect.top < containerRect.top;
//         const isSeatBelow = seatRect.bottom > containerRect.bottom;
  
//         // If the seat is outside the visible container, scroll to it
//         if (isSeatAbove || isSeatBelow) {
//           seatElement.scrollIntoView({
//             behavior: 'smooth', // Smooth scrolling effect
//             block: 'center',    // Center the element in the container
//           });
//         }
  
//         // Optional: Highlight the seat briefly after scrolling
//         seatElement.style.transition = 'background-color 0.3s';
//         seatElement.style.backgroundColor = '#ffeb3b';
//         setTimeout(() => {
//           seatElement.style.backgroundColor = '';
//         }, 1000);
//       }
//     }, 100);
//   };
  


//   const flipSeat = (seat) => {
//     // Flip the specific seat (turn it black)
//     setFlipSeats((prev) => ({
//       ...prev,
//       [seat]: true, // Mark the seat as flipped
//     }));

//     // Mark seat as booked
//     setBookedSeats((prev) => ({
//       ...prev,
//       [seat]: true,
//     }));

//     // Optionally reset the flipped seat after a delay
//     setTimeout(() => {
//       setFlipSeats((prev) => ({
//         ...prev,
//         [seat]: false, // Reset the flipped seat
//       }));
//     }, 2000); // Adjust timeout duration as needed
//   };

//   const renderSeats = (rowNumber) => {
//     let seatCount = 8; // Default seat count for rows
//     const rowLabel = rowLabels[rowNumber - 1];

//     // Adjust seat count dynamically for specific rows
//     if (rowNumber >= 5 && rowNumber <= 10) {
//       seatCount = 10; // 6 on each side
//     } else if (rowNumber === 11) {
//       seatCount = 2; // Only two seats (one on each side)
//     }

//     const isOddRow = rowNumber % 2 !== 0;
//     const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
//     const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

//     const seats = [];
//     const spaceStyle = { width: isOddRow ? '15px' : '50px' }; // Adjust space width if necessary

//     const mapSeatNumbers = (sideSeats) => {
//       return sideSeats.map((seatIndex) => {
//         const seatId = `${rowLabel}${seatIndex}`;
//         const isAttended = attendedSeats.includes(seatId);

//         return (
//           <Seat
//             key={seatId}
//             seatNumber={seatId}
//             shouldFlip={flipSeats[seatId]}
//             isBooked={bookedSeats[seatId]}
//             isAttended={isAttended}
//             id={seatId} // Add id to the element for scrolling
//             onClick={() => setActiveSeat(seatId)} // Set active seat on click
//           />
//         );
//       });
//     };

//     seats.push(
//       <div style={styles.side} key={`left-${rowNumber}`}>
//         {mapSeatNumbers(leftSeats)}
//       </div>
//     );

//     seats.push(<div style={spaceStyle} key={`space-${rowNumber}`}></div>);

//     seats.push(
//       <div style={styles.side} key={`right-${rowNumber}`}>
//         {mapSeatNumbers(rightSeats)}
//       </div>
//     );

//     return seats;
//   };

//   return (
//     <div style={styles.mainContainer}>
//       <div style={styles.textContainer}>
//         <h1 style={styles.heading}>FIND YOUR SEAT</h1>
//       </div>
//       <div style={styles.imageContainer}>
//         <img src="../stage.png" alt="Centered Image" style={styles.image} />
//       </div>
//       <div style={styles.container} ref={containerRef}>
//         {rows.map((rowNumber) => (
//           <div key={rowNumber} style={styles.rowContainer}>
//             <div style={styles.row}>{renderSeats(rowNumber)}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   mainContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: '10vh',
//   },
//   textContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: '18px',
//   },
//   heading: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#ECB60D',
//   },
//   imageContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: '15px',
//   },
//   image: {
//     width: '200px',
//     height: 'auto',
//     objectFit: 'contain',
//   },
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '10px',
//     marginLeft: '20px',
//     marginRight: '20px',
//     height: '55vh', // Set a fixed height for the container
//     overflowY: 'auto', // Allow vertical scrolling if content overflows
//   },
//   rowContainer: {
//     marginBottom: '10px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   side: {
//     display: 'flex',
//   },
// };

// export default SeatingArrangement;


import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Seat from './Seat';

const SeatingArrangement = () => {
  const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  const rows = Array.from({ length: 11 }, (_, i) => i + 1);
  const [flipSeats, setFlipSeats] = useState({});
  const [bookedSeats, setBookedSeats] = useState({});
  const [attendedSeats, setAttendedSeats] = useState([]);
  const [activeSeat, setActiveSeat] = useState(null);

  const location = useLocation();
  const seatNumber = location.state?.seatNumber;
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchAttendedSeats = async () => {
      try {
        const response = await axios.get(
          'https://orca-app-zbdu3.ondigitalocean.app/api/attended-seats',
          { headers: { 'Content-Type': 'application/json' } }
        );
        const combinedSeats = [...response.data.employees, ...response.data.vendors];
        setAttendedSeats(combinedSeats);
        scrollToAttendedSeat(combinedSeats);
      } catch (error) {
        console.error('Error fetching attended seats', error);
      }
    };

    fetchAttendedSeats();
  }, []);

  useEffect(() => {
    if (seatNumber) {
      flipSeat(seatNumber);
    }
  }, [seatNumber]);

  useEffect(() => {
    if (activeSeat) {
      scrollToSeat(activeSeat);
    }
  }, [activeSeat]);

  const scrollToAttendedSeat = (seats) => {
    if (containerRef.current && seats.length > 0) {
      const firstAttendedSeat = seats[0];
      const attendedElement = document.getElementById(firstAttendedSeat);
      if (attendedElement) {
        attendedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const scrollToSeat = (seatId) => {
    setTimeout(() => {
      const seatElement = document.getElementById(seatId);
      if (seatElement && containerRef.current) {
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();
        const seatRect = seatElement.getBoundingClientRect();
        const isSeatAbove = seatRect.top < containerRect.top;
        const isSeatBelow = seatRect.bottom > containerRect.bottom;

        if (isSeatAbove || isSeatBelow) {
          seatElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        seatElement.style.transition = 'background-color 0.3s';
        seatElement.style.backgroundColor = '#ffeb3b';
        setTimeout(() => {
          seatElement.style.backgroundColor = '';
        }, 1000);
      }
    }, 100);
  };

  const scrollToRowIfNeeded = (rowId) => {
    setTimeout(() => {
      const rowElement = document.getElementById(rowId);
      if (rowElement && containerRef.current) {
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();
        const rowRect = rowElement.getBoundingClientRect();
        const isRowAbove = rowRect.top < containerRect.top;
        const isRowBelow = rowRect.bottom > containerRect.bottom;

        if (isRowAbove || isRowBelow) {
          rowElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, 100);
  };

  const flipSeat = (seat) => {
    setFlipSeats((prev) => ({
      ...prev,
      [seat]: true,
    }));

    setBookedSeats((prev) => ({
      ...prev,
      [seat]: true,
    }));

    const rowId = seat[0];
    if (rowId === 'J' || rowId === 'K') {
      scrollToRowIfNeeded(rowId);
    }

    setTimeout(() => {
      setFlipSeats((prev) => ({
        ...prev,
        [seat]: false,
      }));
    }, 2000);
  };

  const renderSeats = (rowNumber) => {
    let seatCount = 8;
    const rowLabel = rowLabels[rowNumber - 1];

    if (rowNumber >= 5 && rowNumber <= 10) {
      seatCount = 10;
    } else if (rowNumber === 11) {
      seatCount = 2;
    }

    const leftSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1);
    const rightSeats = Array.from({ length: seatCount / 2 }, (_, i) => i + 1 + seatCount / 2);

    const seats = [];
    const spaceStyle = { width: rowNumber % 2 !== 0 ? '15px' : '50px' };

    seats.push(
      <div style={styles.side} key={`left-${rowNumber}`}>
        {leftSeats.map((seatIndex) => {
          const seatId = `${rowLabel}${seatIndex}`;
          const isAttended = attendedSeats.includes(seatId);

          return (
            <Seat
              key={seatId}
              seatNumber={seatId}
              shouldFlip={flipSeats[seatId]}
              isBooked={bookedSeats[seatId]}
              isAttended={isAttended}
              id={seatId}
              onClick={() => setActiveSeat(seatId)}
            />
          );
        })}
      </div>
    );

    seats.push(<div style={spaceStyle} key={`space-${rowNumber}`}></div>);

    seats.push(
      <div style={styles.side} key={`right-${rowNumber}`}>
        {rightSeats.map((seatIndex) => {
          const seatId = `${rowLabel}${seatIndex}`;
          const isAttended = attendedSeats.includes(seatId);

          return (
            <Seat
              key={seatId}
              seatNumber={seatId}
              shouldFlip={flipSeats[seatId]}
              isBooked={bookedSeats[seatId]}
              isAttended={isAttended}
              id={seatId}
              onClick={() => setActiveSeat(seatId)}
            />
          );
        })}
      </div>
    );

    return (
      <div
      id={rowLabel}
      style={{ ...styles.row, marginTop: rowNumber === 1 ? '20px' : '0px' }} // Apply marginTop only to the first row
      key={rowLabel}
    >
      {seats}
    </div>
    );
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>FIND YOUR SEAT</h1>
      </div>
      <div style={styles.imageContainer}>
        <img src="../stage.png" alt="Centered Image" style={styles.image} />
      </div>
      <div style={styles.container} ref={containerRef}>
        {rows.map((rowNumber) => (
          <div key={rowNumber} style={styles.rowContainer}>
            <div>{renderSeats(rowNumber)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10vh',

  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '18px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ECB60D',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '200px',
    height: 'auto',
    objectFit: 'contain',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    marginLeft: '20px',
    marginRight: '20px',
    height: '55vh',
    overflowY: 'auto',

  },
  rowContainer: {
    marginBottom: '10px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    
  },
  side: {
    display: 'flex',
  },
};

export default SeatingArrangement;
