// // import React, { useState } from 'react';
// // import "../index.css";

// // export default function Component() {
// //   return (
// //     <div className="min-h-screen w-full bg-gradient-to-b from-[#001428] to-[#00091a] flex items-center justify-center p-4">
// //       <div className="w-full max-w-md space-y-12 -mt-12"> {/* Moves content up and increases vertical spacing */}
// //         <div className="text-center ml-[60px]">
// //           <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-[#FCEF52] to-[#BE782B] bg-clip-text">
// //             ENTER DETAILS
// //           </h1>
// //         </div>


// //         <form className="space-y-8 "> {/* Increases spacing between form elements */}
// //           <div className="space-y-8 m-8" >
// //             <div className="flex items-center space-x-4">
// //               <label htmlFor="fullName" className="text-white w-1/3 text-sm">
// //                 Full Name*
// //               </label>
// //               <input
// //                 type="text"
// //                 id="fullName"
// //                 className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2"
// //               />
// //             </div>

// //             <div className="flex items-center space-x-4">
// //               <label htmlFor="personalNumber" className="text-white w-1/3 text-sm">
// //                 Personal Number*
// //               </label>
// //               <input
// //                 type="text"
// //                 id="personalNumber"
// //                 className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2"
// //               />
// //             </div>
// //           </div>

// //           <div className="flex justify-center mr-[20px]"> {/* Moves button to align with inputs */}
// //             <button
// //               type="submit"
// //               className="w-1/3 bg-gradient-to-r from-[#FCEF52] to-[#7F431D] hover:from-[#BE782B] hover:to-[#FCEF52] text-black font-semibold py-2 px-4 transition-colors"
// //             >
// //               SUBMIT
// //             </button>

// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }





// // import React, { useState } from 'react';
// // import "../index.css";

// // export default function Component() {
// //   const [showForm, setShowForm] = useState(false); // State to toggle form visibility
// //   const [role, setRole] = useState(''); // State to store the selected role (Employee or Vendor)


// //   // Function to handle the button click and show the form
// //   const handleButtonClick = (role) => {
// //     setRole(role); // Set the selected role (Employee or Vendor)
// //     setShowForm(true); // Show the form
// //   };


// //   return (
// //     <div className="min-h-screen w-full bg-gradient-to-b from-[#001428] to-[#00091a] flex items-center justify-center p-4">
// //       <div className="w-full max-w-md space-y-12 -mt-12">
// //         {/* Initially showing Employee and Vendor buttons */}
// //         {!showForm && (
// //           <div className="space-y-8 m-4">



// //             <div className="flex flex-col gap-10 justify-center items-center">
// //               <button
// //                 onClick={() => handleButtonClick('Employee')}
// //                 className=""
// //                 style={{
// //                   backgroundImage: 'url(../employee.png)', // Replace with your actual image path
// //                   backgroundSize: 'cover',
// //                   backgroundPosition: 'center',
// //                   height: '60px',
// //                   width: '80%',
// //                   border: 'none',
// //                 }}
// //               >
// //               </button>
// //               <button
// //                 onClick={() => handleButtonClick('Vendor')}
// //                 className=""
// //                 style={{
// //                   backgroundImage: 'url(../vendor.png)', // Replace with your actual image path
// //                   backgroundSize: 'cover',
// //                   backgroundPosition: 'center',
// //                   height: '60px',
// //                   width: '80%',
// //                   border: 'none',
// //                 }}
// //               >
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {/* Form is displayed when showForm is true */}
// //         {showForm && (
// //           <div>
// //             <div className="text-center ml-[60px]">
// //               <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-[#FCEF52] to-[#BE782B] bg-clip-text">
// //                 ENTER DETAILS
// //               </h1>
// //             </div>

// //             <form className="space-y-8">
// //               <div className="space-y-8 m-8">
// //                 <div className="flex items-center space-x-4">
// //                   <label htmlFor="fullName" className="text-white w-1/3 text-sm">
// //                     Full Name*
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="fullName"
// //                     placeholder="Enter Name"
// //                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
// //                   />
// //                 </div>

// //                 <div className="flex items-center space-x-4">
// //                   <label htmlFor="personalNumber" className="text-white w-1/3 text-sm">
// //                     {role === 'Employee' ? 'Employee Code*' : 'Vendor Code*'}
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="personalNumber"
// //                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
// //                     placeholder={role === 'Employee' ? 'Enter Employee Code' : 'Enter Vendor Code'}
// //                   />
// //                 </div>
// //               </div>

// //               <div className="flex justify-center mr-[20px]">
// //                 <button
// //                   type="submit"
// //                   className="w-1/3 bg-gradient-to-r from-[#FCEF52] to-[#7F431D] hover:from-[#BE782B] hover:to-[#FCEF52] text-black font-semibold py-2 px-4 transition-colors"
// //                 >
// //                   SUBMIT
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }






// // import React, { useState } from 'react';
// // import axios from 'axios'; // We need axios to make HTTP requests
// // import "../index.css";

// // export default function Component() {
// //   const [showForm, setShowForm] = useState(false); // State to toggle form visibility
// //   const [role, setRole] = useState(''); // State to store the selected role (Employee or Vendor)
// //   const [code, setCode] = useState(''); // State to store the entered code
// //   const [fullName, setFullName] = useState(''); // State to store full name
// //   const [message, setMessage] = useState(''); // State to display the result message

// //   // Function to handle the button click and show the form
// //   const handleButtonClick = (role) => {
// //     setRole(role); // Set the selected role (Employee or Vendor)
// //     setShowForm(true); // Show the form
// //   };

// //   // Function to handle form submission
// //   const handleFormSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // Send a POST request to the backend API to verify the code
// //       const response = await axios.post('http://localhost:5000/verify-code', {
// //         role,
// //         code
// //       });

// //       if (response.data.success) {
// //         setMessage('Code verified successfully!');
// //       } else {
// //         setMessage('Invalid code');
// //       }
// //     } catch (error) {
// //       setMessage('Error occurred while verifying the code');
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen w-full bg-gradient-to-b from-[#001428] to-[#00091a] flex items-center justify-center p-4">
// //       <div className="w-full max-w-md space-y-12 -mt-12">
// //         {/* Initially showing Employee and Vendor buttons */}
// //         {!showForm && (
// //           <div className="space-y-8 m-4">
// //             <div className="flex flex-col gap-10 justify-center items-center">
// //               <button
// //                 onClick={() => handleButtonClick('Employee')}
// //                 className=""
// //                 style={{
// //                   backgroundImage: 'url(../employee.png)', // Replace with your actual image path
// //                   backgroundSize: 'cover',
// //                   backgroundPosition: 'center',
// //                   height: '60px',
// //                   width: '80%',
// //                   border: 'none',
// //                 }}
// //               >
// //               </button>
// //               <button
// //                 onClick={() => handleButtonClick('Vendor')}
// //                 className=""
// //                 style={{
// //                   backgroundImage: 'url(../vendor.png)', // Replace with your actual image path
// //                   backgroundSize: 'cover',
// //                   backgroundPosition: 'center',
// //                   height: '60px',
// //                   width: '80%',
// //                   border: 'none',
// //                 }}
// //               >
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {/* Form is displayed when showForm is true */}
// //         {showForm && (
// //           <div>
// //             <div className="text-center ml-[60px]">
// //               <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-[#FCEF52] to-[#BE782B] bg-clip-text">
// //                 ENTER DETAILS
// //               </h1>
// //             </div>

// //             <form className="space-y-8" onSubmit={handleFormSubmit}>
// //               <div className="space-y-8 m-8">
// //                 <div className="flex items-center space-x-4">
// //                   <label htmlFor="fullName" className="text-white w-1/3 text-sm">
// //                     Full Name*
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="fullName"
// //                     value={fullName}
// //                     onChange={(e) => setFullName(e.target.value)}
// //                     placeholder="Enter Name"
// //                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
// //                   />
// //                 </div>

// //                 <div className="flex items-center space-x-4">
// //                   <label htmlFor="personalNumber" className="text-white w-1/3 text-sm">
// //                     {role === 'Employee' ? 'Employee Code*' : 'Vendor Code*'}
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="personalNumber"
// //                     value={code}
// //                     onChange={(e) => setCode(e.target.value)}
// //                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
// //                     placeholder={role === 'Employee' ? 'Enter Employee Code' : 'Enter Vendor Code'}
// //                   />
// //                 </div>
// //               </div>

// //               <div className="flex justify-center mr-[20px]">
// //                 <button
// //                   type="submit"
// //                   className="w-1/3 bg-gradient-to-r from-[#FCEF52] to-[#7F431D] hover:from-[#BE782B] hover:to-[#FCEF52] text-black font-semibold py-2 px-4 transition-colors"
// //                 >
// //                   SUBMIT
// //                 </button>
// //               </div>
// //             </form>

// //             {/* Display the verification message */}
// //             {message && (
// //               <div className={`text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
// //                 <p>{message}</p>
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }






// // import React, { useState } from 'react';
// // import axios from 'axios'; // We need axios to make HTTP requests
// // import "../index.css";
// // import { useNavigate } from 'react-router-dom'; 

// // const SearchForm = () => {
// //   const [showForm, setShowForm] = useState(false); // State to toggle form visibility
// //   const [role, setRole] = useState(''); // State to store the selected role (Employee or Vendor)
// //   const [code, setCode] = useState(''); // State to store the entered code
// //   const [fullName, setFullName] = useState(''); // State to store full name
// //   const [message, setMessage] = useState(''); // State to display the result message
// //   const [seatNumber, setSeatNumber] = useState(''); // State to store the allocated seat number
// //   const [isAttended, setIsAttended] = useState(false); // State to store the attendance status
// //   const navigate = useNavigate();



// //   // Function to handle the button click and show the form
// //   const handleButtonClick = (role) => {
// //     setRole(role); // Set the selected role (Employee or Vendor)
// //     setShowForm(true); // Show the form
// //   };

// //   const handleFormSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = { role, code };
// //     console.log("Form data:", formData);

// //     try {
// //       const response = await axios.post('https://orca-app-zbdu3.ondigitalocean.app/verify-code', formData, {
// //         headers: { 'Content-Type': 'application/json' },
// //       });

// //       if (response.data.success) {
// //         setSeatNumber(response.data.seatNumber);
// //         setIsAttended(response.data.isAttended);
// //         setMessage('Code verified successfully!');
// //         navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
// //       } else {
// //         setMessage(response.data.message || 'Invalid code');
// //       }
// //     } catch (error) {
// //       setMessage('Error occurred while verifying the code');
// //       console.error("Verification error:", error.response?.data || error.message);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen w-full  flex items-center justify-center p-4">
// //       <div className="w-full max-w-md space-y-12 -mt-12">
// //         {/* Initially showing Employee and Vendor buttons */}
// //         {!showForm && (
// //           <div className="space-y-8 m-4">
// //             <div className="flex flex-col gap-10 justify-center items-center">
// //               <button
// //                 onClick={() => handleButtonClick('Employee')}
// //                 className=""
// //                 style={{
// //                   backgroundImage: 'url(../employee.png)', // Replace with your actual image path
// //                   backgroundSize: 'cover',
// //                   backgroundPosition: 'center',
// //                   height: '60px',
// //                   width: '80%',
// //                   border: 'none',
// //                 }}
// //               >
// //               </button>
// //               <button
// //                 onClick={() => handleButtonClick('Vendor')}
// //                 className=""
// //                 style={{
// //                   backgroundImage: 'url(../vendor.png)', // Replace with your actual image path
// //                   backgroundSize: 'cover',
// //                   backgroundPosition: 'center',
// //                   height: '60px',
// //                   width: '80%',
// //                   border: 'none',
// //                 }}
// //               >
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {/* Form is displayed when showForm is true */}
// //         {showForm && (
// //           <div>
// //             <div className="text-center ml-[60px]">
// //               <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-[#FCEF52] to-[#BE782B] bg-clip-text">
// //                 ENTER DETAILS
// //               </h1>
// //             </div>

// //             <form className="space-y-8" onSubmit={handleFormSubmit}>
// //               <div className="space-y-8 m-8">
// //                 <div className="flex items-center space-x-4">
// //                   <label htmlFor="fullName" className="text-white w-1/3 text-sm">
// //                     Full Name*
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="fullName"
// //                     value={fullName}
// //                     onChange={(e) => setFullName(e.target.value)}
// //                     placeholder="Enter Name"
// //                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
// //                   />
// //                 </div>

// //                 <div className="flex items-center space-x-4">
// //                   <label htmlFor="personalNumber" className="text-white w-1/3 text-sm">
// //                     {role === 'Employee' ? 'Employee Code*' : 'Vendor Code*'}
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="personalNumber"
// //                     value={code}
// //                     onChange={(e) => setCode(e.target.value)}
// //                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
// //                     placeholder={role === 'Employee' ? 'Enter Employee Code' : 'Enter Vendor Code'}
// //                   />
// //                 </div>
// //               </div>

// //               <div className="flex justify-center mr-[20px]">
// //                 <button
// //                   type="submit"
// //                   className="w-1/3 bg-gradient-to-r from-[#FCEF52] to-[#7F431D] hover:from-[#BE782B] hover:to-[#FCEF52] text-black font-semibold py-2 px-4 transition-colors"
// //                 >
// //                   SUBMIT
// //                 </button>
// //               </div>
// //             </form>

// //             {/* Display the verification message */}
// //             {message && (
// //               <div className={`text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
// //                 <p>{message}</p>
// //               </div>
// //             )}

// //             {/* Display seat number if successfully verified */}
// //             {seatNumber && (
// //               <div className="text-center mt-4">
// //                 <p className="text-lg font-semibold text-white">Your Allocated Seat Number:</p>
// //                 <p className="text-xl text-yellow-400">{seatNumber}</p>
// //                 <p className={`text-sm ${isAttended ? 'text-green-500' : 'text-red-500'}`}>
// //                   Attendance Status: {isAttended ? 'Attended' : 'Not Attended'}
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// // export default SearchForm;







// // import React, { useState } from 'react';
// // import axios from 'axios'; // We need axios to make HTTP requests
// // import "../index.css";
// // import { useNavigate } from 'react-router-dom'; 

// // const SearchForm = () => {
// //   const [showVendorForm, setShowVendorForm] = useState(false); // State to show the vendor form if clicked
// //   const [code, setCode] = useState(''); // State to store the entered code (for Employee or Vendor)
// //   const [fullName, setFullName] = useState(''); // State to store full name (only for Vendor)
// //   const [message, setMessage] = useState(''); // State to display the result message
// //   const [seatNumber, setSeatNumber] = useState(''); // State to store the allocated seat number
// //   const [isAttended, setIsAttended] = useState(false); // State to store the attendance status
// //   const navigate = useNavigate();

// //   // Function to handle the form submission
// //   const handleFormSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = { code };
// //     console.log("Form data:", formData);

// //     try {
// //       const response = await axios.post('http://localhost:5000/verify-code', formData, {
// //         headers: { 'Content-Type': 'application/json' },
// //       });

// //       if (response.data.success) {
// //         setSeatNumber(response.data.seatNumber);
// //         setIsAttended(response.data.isAttended);
// //         setMessage('Code verified successfully!');
// //         navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
// //       } else {
// //         setMessage(response.data.message || 'Invalid code');
// //       }
// //     } catch (error) {
// //       setMessage('Error occurred while verifying the code');
// //       console.error("Verification error:", error.response?.data || error.message);
// //     }
// //   };

// //   // Function to handle vendor form submission
// //   const handleVendorFormSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = { code, fullName };
// //     console.log("Vendor form data:", formData);

// //     try {
// //       const response = await axios.post('http://localhost:5000/verify-code', formData, {
// //         headers: { 'Content-Type': 'application/json' },
// //       });

// //       if (response.data.success) {
// //         setSeatNumber(response.data.seatNumber);
// //         setIsAttended(response.data.isAttended);
// //         setMessage('Code verified successfully!');
// //         navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
// //       } else {
// //         setMessage(response.data.message || 'Invalid code');
// //       }
// //     } catch (error) {
// //       setMessage('Error occurred while verifying the code');
// //       console.error("Verification error:", error.response?.data || error.message);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen w-full flex items-center justify-center p-4">
// //       <div className="w-full max-w-md space-y-12 -mt-12">
// //         {/* Single input for Personal Number */}
// //         {!showVendorForm && (
// //           <div className="space-y-8 m-4">
// //             <div className="flex flex-col gap-10 justify-center items-center">
// //               <form className="w-full" onSubmit={handleFormSubmit}>
// //                 <div className="flex flex-col gap-4 items-center">
// //                   <label htmlFor="personalNumber" className="text-white text-sm">
// //                     Personal Number*
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="personalNumber"
// //                     value={code}
// //                     onChange={(e) => setCode(e.target.value)}
// //                     placeholder="Enter Personal Number"
// //                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
// //                   />
// //                 </div>

// //                 <div className="text-center mt-4">
// //                   <button
// //                     type="submit"
// //                     className="w-1/3 bg-gradient-to-r from-[#FCEF52] to-[#7F431D] hover:from-[#BE782B] hover:to-[#FCEF52] text-black font-semibold py-2 px-4 transition-colors"
// //                   >
// //                     SUBMIT
// //                   </button>
// //                 </div>
// //               </form>

// //               {/* Vendor-specific option */}
// //               <p className="text-white text-sm mt-4">
// //                 In case of Vendor,{' '}
// //                 <span
// //                   onClick={() => setShowVendorForm(true)}
// //                   className="text-yellow-400 underline cursor-pointer"
// //                 >
// //                   click here
// //                 </span>
// //               </p>
// //             </div>
// //           </div>
// //         )}

// //         {/* Vendor-specific form */}
// //         {showVendorForm && (
// //           <div>
// //             <div className="text-center ml-[60px]">
// //               <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-[#FCEF52] to-[#BE782B] bg-clip-text">
// //                 ENTER DETAILS (Vendor)
// //               </h1>
// //             </div>

// //             <form className="space-y-8" onSubmit={handleVendorFormSubmit}>
// //               <div className="space-y-8 m-8">
// //                 <div className="flex items-center space-x-4">
// //                   <label htmlFor="fullName" className="text-white w-1/3 text-sm">
// //                     Full Name*
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="fullName"
// //                     value={fullName}
// //                     onChange={(e) => setFullName(e.target.value)}
// //                     placeholder="Enter Name"
// //                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
// //                   />
// //                 </div>

// //                 <div className="flex items-center space-x-4">
// //                   <label htmlFor="vendorCode" className="text-white w-1/3 text-sm">
// //                     Vendor Code*
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="vendorCode"
// //                     value={code}
// //                     onChange={(e) => setCode(e.target.value)}
// //                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
// //                     placeholder="Enter Vendor Code"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="flex justify-center mr-[20px]">
// //                 <button
// //                   type="submit"
// //                   className="w-1/3 bg-gradient-to-r from-[#FCEF52] to-[#7F431D] hover:from-[#BE782B] hover:to-[#FCEF52] text-black font-semibold py-2 px-4 transition-colors"
// //                 >
// //                   SUBMIT
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         )}

// //         {/* Display the verification message */}
// //         {message && (
// //           <div className={`text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
// //             <p>{message}</p>
// //           </div>
// //         )}

// //         {/* Display seat number if successfully verified */}
// //         {seatNumber && (
// //           <div className="text-center mt-4">
// //             <p className="text-lg font-semibold text-white">Your Allocated Seat Number:</p>
// //             <p className="text-xl text-yellow-400">{seatNumber}</p>
// //             <p className={`text-sm ${isAttended ? 'text-green-500' : 'text-red-500'}`}>
// //               Attendance Status: {isAttended ? 'Attended' : 'Not Attended'}
// //             </p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SearchForm;






// // import React, { useState } from 'react';
// // import axios from 'axios'; // We need axios to make HTTP requests
// // import "../index.css";
// // import { useNavigate } from 'react-router-dom';

// // const SearchForm = () => {
// //   const [showVendorForm, setShowVendorForm] = useState(false); // State to show the vendor form if clicked
// //   const [code, setCode] = useState(''); // State to store the entered code (for Employee or Vendor)
// //   const [fullName, setFullName] = useState(''); // State to store full name (only for Vendor)
// //   const [message, setMessage] = useState(''); // State to display the result message
// //   const [seatNumber, setSeatNumber] = useState(''); // State to store the allocated seat number
// //   const [isAttended, setIsAttended] = useState(false); // State to store the attendance status
// //   const navigate = useNavigate();

// //   // Function to handle the form submission for employees
// //   const handleFormSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = { code };
// //     console.log("Form data:", formData);

// //     try {
// //       const response = await axios.post('http://localhost:5000/verify-code', formData, {
// //         headers: { 'Content-Type': 'application/json' },
// //       });

// //       if (response.data.success) {
// //         setSeatNumber(response.data.seatNumber);
// //         setIsAttended(response.data.isAttended);
// //         setMessage('Code verified successfully!');
// //         navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
// //       } else {
// //         setMessage(response.data.message || 'Invalid code');
// //       }
// //     } catch (error) {
// //       setMessage('Error occurred while verifying the code');
// //       console.error("Verification error:", error.response?.data || error.message);
// //     }
// //   };

// //   // Function to handle vendor form submission
// //   const handleVendorFormSubmit = async (e) => {
// //     e.preventDefault();

// //     // Frontend validation
// //     if (fullName && code.match(/^[A-Za-z0-9]+$/)) {
// //       setMessage('Error: This is the vendor form. Go back to the employee form.');
// //       return;
// //     }
// //     if (!fullName && code.match(/^[0-9]+$/)) {
// //       setMessage('Error: This is an employee code. Click below for the vendor form.');
// //       return;
// //     }

// //     const formData = { code, fullName };
// //     console.log("Vendor form data:", formData);

// //     try {
// //       const response = await axios.post('http://localhost:5000/verify-code', formData, {
// //         headers: { 'Content-Type': 'application/json' },
// //       });

// //       if (response.data.success) {
// //         setSeatNumber(response.data.seatNumber);
// //         setIsAttended(response.data.isAttended);
// //         setMessage('Code verified successfully!');
// //         navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
// //       } else {
// //         setMessage(response.data.message || 'Invalid code');
// //       }
// //     } catch (error) {
// //       setMessage('Error occurred while verifying the code');
// //       console.error("Verification error:", error.response?.data || error.message);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen w-full flex items-center justify-center p-4">
// //       <div className="w-full max-w-md space-y-12 -mt-12">
// //         {/* Single input for Employee Form */}
// //         {!showVendorForm && (
// //           <div className="space-y-8 m-4">
// //             <div className="flex flex-col gap-10 justify-center items-center">
// //               <form className="w-full" onSubmit={handleFormSubmit}>
// //                 <div className="flex flex-col gap-4 items-center">
// //                   <label htmlFor="personalNumber" className="text-white text-sm">
// //                     Personal Number*
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="personalNumber"
// //                     value={code}
// //                     onChange={(e) => setCode(e.target.value)}
// //                     placeholder="Enter Personal Number"
// //                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
// //                   />
// //                 </div>

// //                 <div className="text-center mt-4">
// //                   <button
// //                     type="submit"
// //                     className="w-1/3 bg-gradient-to-r from-[#FCEF52] to-[#7F431D] hover:from-[#BE782B] hover:to-[#FCEF52] text-black font-semibold py-2 px-4 transition-colors"
// //                   >
// //                     SUBMIT
// //                   </button>
// //                 </div>
// //               </form>

// //               {/* Vendor-specific option */}
// //               <p className="text-white text-sm mt-4">
// //                 In case of Vendor,{' '}
// //                 <span
// //                   onClick={() => setShowVendorForm(true)}
// //                   className="text-yellow-400 underline cursor-pointer"
// //                 >
// //                   click here
// //                 </span>
// //               </p>
// //             </div>
// //           </div>
// //         )}

// //         {/* Vendor-specific form */}
// //         {showVendorForm && (
// //           <div>
// //             <div className="text-center ml-[60px]">
// //               <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-[#FCEF52] to-[#BE782B] bg-clip-text">
// //                 ENTER DETAILS (Vendor)
// //               </h1>
// //             </div>

// //             <form className="space-y-8" onSubmit={handleVendorFormSubmit}>
// //               <div className="space-y-8 m-8">
// //                 <div className="flex items-center space-x-4">
// //                   <label htmlFor="fullName" className="text-white w-1/3 text-sm">
// //                     Full Name*
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="fullName"
// //                     value={fullName}
// //                     onChange={(e) => setFullName(e.target.value)}
// //                     placeholder="Enter Name"
// //                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
// //                   />
// //                 </div>

// //                 <div className="flex items-center space-x-4">
// //                   <label htmlFor="vendorCode" className="text-white w-1/3 text-sm">
// //                     Vendor Code*
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="vendorCode"
// //                     value={code}
// //                     onChange={(e) => setCode(e.target.value)}
// //                     className="w-full border-2 border-amber-400 bg-transparent text-white placeholder-amber-400/50 focus:ring-amber-400 rounded-none p-2 outline-none"
// //                     placeholder="Enter Vendor Code"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="flex justify-center mr-[20px]">
// //                 <button
// //                   type="submit"
// //                   className="w-1/3 bg-gradient-to-r from-[#FCEF52] to-[#7F431D] hover:from-[#BE782B] hover:to-[#FCEF52] text-black font-semibold py-2 px-4 transition-colors"
// //                 >
// //                   SUBMIT
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         )}

// //         {/* Display the verification message */}
// //         {message && (
// //           <div className={`text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
// //             <p>{message}</p>
// //           </div>
// //         )}

// //         {/* Display seat number if successfully verified */}
// //         {seatNumber && (
// //           <div className="text-center mt-4">
// //             <p className="text-lg font-semibold text-white">Your Allocated Seat Number:</p>
// //             <p className="text-xl text-yellow-400">{seatNumber}</p>
// //             <p className={`text-sm ${isAttended ? 'text-green-500' : 'text-red-500'}`}>
// //               Attendance Status: {isAttended ? 'Attended' : 'Not Attended'}
// //             </p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SearchForm;


// // import React, { useState } from 'react';
// // import axios from 'axios'; // For HTTP requests
// // import "../index.css";
// // import { useNavigate } from 'react-router-dom';


// // const SearchForm = () => {
// //   const [showVendorForm, setShowVendorForm] = useState(false); // Toggle vendor form
// //   const [code, setCode] = useState(''); // Employee or vendor code
// //   const [fullName, setFullName] = useState(''); // Vendor name
// //   const [message, setMessage] = useState(''); // Result message
// //   const [seatNumber, setSeatNumber] = useState(''); // Allocated seat
// //   const [isAttended, setIsAttended] = useState(false); // Attendance status
// //   const navigate = useNavigate();

// //   // Handle Employee Form Submission
// //   const handleEmployeeFormSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = { code };
// //     console.log("Employee Form Data:", formData);

// //     try {
// //       const response = await axios.post('http://localhost:5000/verify-code', formData, {
// //         headers: { 'Content-Type': 'application/json' },
// //       });

// //       if (response.data.success) {
// //         setSeatNumber(response.data.seatNumber);
// //         setIsAttended(response.data.isAttended);
// //         setMessage('Code verified successfully!');
// //         navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
// //       } else {
// //         setMessage("In case of vendor, click below.");
// //       }
// //     } catch (error) {
// //       setMessage("The Vendor ID cannot be entered in the Employee field. Please use a valid Employee ID..");
// //       console.error("Employee Verification Error:", error.response?.data || error.message);
// //     }
// //   };

// //   // Handle Vendor Form Submission
// //   const handleVendorFormSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!fullName) {
// //       setMessage('Vendor name is required. If you are an employee, log in using the first input box.');
// //       return;
// //     }

// //     const formData = { code, fullName };
// //     console.log("Vendor Form Data Sent to Backend:", formData);

// //     try {
// //       const response = await axios.post('http://localhost:5000/verify-vendor', formData, {
// //         headers: { 'Content-Type': 'application/json' },
// //       });

// //       if (response.data.success) {
// //         setSeatNumber(response.data.seatNumber);
// //         setIsAttended(response.data.isAttended);
// //         setMessage('Vendor verified successfully!');
// //         navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
// //       } else {
// //         setMessage("The Employee ID cannot be entered in the Vendor field. Please use a valid Vendor ID.");
// //       }
// //     } catch (error) {
// //       setMessage("Error verifying vendor details. If you are an employee, log in using the first input box.");
// //       console.error("Vendor Verification Error:", error.response?.data || error.message);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen w-full flex items-center justify-center p-4">
// //   <div className="w-full max-w-md space-y-12 -mt-12">
// //     {/* Employee Form */}
// //     {!showVendorForm && (
// //       <div className="space-y-8 m-4 flex flex-col items-center justify-center">
// //         <h1 className="text-yellow-500 text-3xl font-semibold tracking-wide mb-6">ENTER DETAILS</h1>
// //         <form className="w-full max-w-sm" onSubmit={handleEmployeeFormSubmit}>
// //           <div className="flex flex-col gap-1 items-start">
// //             <label htmlFor="employeeCode" className="text-yellow-300 text-sm">
// //               Personal Number*
// //             </label>
// //             <div className="relative w-full">
// //               <input
// //                 type="text"
// //                 id="employeeCode"
// //                 value={code}
// //                 onChange={(e) => setCode(e.target.value)}
// //                 placeholder="Enter Valid Personal Number"
// //                 className="w-full border border-yellow-400 bg-transparent text-yellow-300 placeholder-yellow-300/70 focus:ring-yellow-400 rounded-none p-2 pl-10 outline-none"
// //               />
// //               <span className="absolute left-2 top-2.5 text-red-500 text-sm"></span>
// //             </div>
// //             {message && (
// //               <p className="flex items-center text-red-500 text-sm mt-1">
// //                 <span className="text-lg mr-1">⚠️</span> {message}
// //               </p>
// //             )}
// //           </div>
// //           <div className="text-center mt-[2rem]">
// //             <button
// //               type="submit"
// //               className="w-[40%] bg-gradient-to-r from-yellow-300 to-yellow-700 hover:from-yellow-500 hover:to-yellow-300 text-black font-semibold py-2 px-4 rounded-none transition-colors"
// //             >
// //               SUBMIT
// //             </button>
// //           </div>
// //         </form>
// //         <p className="text-white text-sm mt-4 w-60 text-center">
// //           For an invitee from a vendor partner,{' '}
// //           <span
// //             onClick={() => setShowVendorForm(true)}
// //             className="text-white font-bold cursor-pointer border-b-2 border-white"
// //           >
// //             Click here to register
// //           </span>
// //         </p>
// //       </div>
// //     )}

// //     {/* Vendor Form */}
// //     {showVendorForm && (
// //       <div className="space-y-8 m-4 flex flex-col items-center justify-center">
// //         <h1 className="text-yellow-500 text-3xl font-semibold tracking-wide mb-6">ENTER DETAILS (Vendor)</h1>
// //         <form className="w-full max-w-sm" onSubmit={handleVendorFormSubmit}>
// //           {/* Full Name Field */}
// //           <div className="flex flex-col gap-1 items-start">
// //             <label htmlFor="vendorName" className="text-yellow-300 text-sm">
// //               Full Name*
// //             </label>
// //             <div className="relative w-full">
// //               <input
// //                 type="text"
// //                 id="vendorName"
// //                 value={fullName}
// //                 onChange={(e) => setFullName(e.target.value)}
// //                 placeholder="Enter Vendor Name"
// //                 className="w-full border border-yellow-400 bg-transparent text-yellow-300 placeholder-yellow-300/70 focus:ring-yellow-400 rounded-none p-2 pl-10 outline-none"
// //               />
// //               <span className="absolute left-2 top-2.5 text-red-500 text-sm"></span>
// //             </div>
// //           </div>

// //           {/* Vendor Code Field */}
// //           <div className="flex flex-col gap-1 items-start mt-4">
// //             <label htmlFor="vendorCode" className="text-yellow-300 text-sm">
// //               Vendor Code*
// //             </label>
// //             <div className="relative w-full">
// //               <input
// //                 type="text"
// //                 id="vendorCode"
// //                 value={code}
// //                 onChange={(e) => setCode(e.target.value)}
// //                 placeholder="Enter Vendor Code"
// //                 className="w-full border border-yellow-400 bg-transparent text-yellow-300 placeholder-yellow-300/70 focus:ring-yellow-400 rounded-none p-2 pl-10 outline-none"
// //               />
// //               <span className="absolute left-2 top-2.5 text-red-500 text-sm"></span>
// //             </div>
// //             {message && (
// //               <p className="flex items-center text-red-500 text-sm mt-1">
// //                 <span className="text-lg mr-1">⚠️</span> {message}
// //               </p>
// //             )}
// //           </div>

// //           <div className="text-center mt-[2rem]">
// //             <button
// //               type="submit"
// //               className="w-[40%] bg-gradient-to-r from-yellow-300 to-yellow-700 hover:from-yellow-500 hover:to-yellow-300 text-black font-semibold py-2 px-4 rounded-none transition-colors"
// //             >
// //               SUBMIT
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     )}

// //     {/* Success/Error Message Display */}
// //     {seatNumber && (
// //       <div className="text-center mt-4">
// //         <p className="text-lg font-semibold text-white">Your Allocated Seat Number:</p>
// //         <p className="text-xl text-yellow-400">{seatNumber}</p>
// //         <p className={`text-sm ${isAttended ? 'text-green-500' : 'text-red-500'}`}>
// //           Attendance Status: {isAttended ? 'Attended' : 'Not Attended'}
// //         </p>
// //       </div>
// //     )}
// //   </div>
// // </div>

// //   );
// // };

// // export default SearchForm;


// import React, { useState } from 'react';
// import axios from 'axios'; // For HTTP requests
// import "../index.css";
// import { useNavigate } from 'react-router-dom';

// const SearchForm = () => {
//   const [showVendorForm, setShowVendorForm] = useState(false); // Toggle vendor form
//   const [code, setCode] = useState(''); // Employee or vendor code
//   const [fullName, setFullName] = useState(''); // Vendor name
//   const [message, setMessage] = useState(''); // Result message
//   const [seatNumber, setSeatNumber] = useState(''); // Allocated seat
//   const [isAttended, setIsAttended] = useState(false); // Attendance status
//   const [hasError, setHasError] = useState(false); // Track if there's an error
//   const navigate = useNavigate();

//   // Function to handle switching forms and resetting error message
//   const toggleForm = () => {
//     setShowVendorForm(!showVendorForm);
//     setMessage(''); // Clear error message when switching forms
//     setCode(''); // Optionally clear code to avoid cross-form data leakage
//     setFullName(''); // Clear vendor full name if switching from vendor to employee
//     setHasError(false); // Reset error state
//   };

//   // Handle Employee Form Submission
//   const handleEmployeeFormSubmit = async (e) => {
//     e.preventDefault();

//     const formData = { code };
//     console.log("Employee Form Data:", formData);

//     try {
//       const response = await axios.post('https://orca-app-zbdu3.ondigitalocean.app/verify-code', formData, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.data.success) {
//         setSeatNumber(response.data.seatNumber);
//         setIsAttended(response.data.isAttended);
//         setMessage('Code verified successfully!');
//         setHasError(false);
//         navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
//       } else {
//         setMessage("The Vendor ID cannot be entered in the Employee field. Please use a valid Employee ID.");
//         setHasError(true);
//       }
//     } catch (error) {
//       setMessage("⚠️ Enter Valid Personal Number");
//       setHasError(true);
//       console.error("Employee Verification Error:", error.response?.data || error.message);
//     }
//   };

//   // Handle Vendor Form Submission
//   const handleVendorFormSubmit = async (e) => {
//     e.preventDefault();

//     if (!fullName) {
//       setMessage('Vendor name is required. If you are an employee, log in using the first input box.');
//       setHasError(true);
//       return;
//     }

//     const formData = { code, fullName };
//     console.log("Vendor Form Data Sent to Backend:", formData);

//     try {
//       const response = await axios.post('https://orca-app-zbdu3.ondigitalocean.app/verify-vendor', formData, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.data.success) {
//         setSeatNumber(response.data.seatNumber);
//         setIsAttended(response.data.isAttended);
//         setMessage('Vendor verified successfully!');
//         setHasError(false);
//         navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
//       } else {
//         setMessage("The Employee ID cannot be entered in the Vendor field. Please use a valid Vendor ID.");
//         setHasError(true);
//       }
//     } catch (error) {
//       setMessage("⚠️ Enter Valid Vendor code");
//       setHasError(true);
//       console.error("Vendor Verification Error:", error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center p-4">
//       <div className="w-full max-w-md space-y-12 -mt-12">
//         {/* Employee Form */}
//         {!showVendorForm && (
//           <div className="space-y-8 m-4 flex flex-col items-center justify-center">
//             <h1 className="text-yellow-500 text-3xl font-semibold tracking-wide mb-6">ENTER DETAILS</h1>
//             <form className="w-full max-w-sm" onSubmit={handleEmployeeFormSubmit}>
//               <div className="flex flex-col gap-1 items-start">
//                 <label htmlFor="employeeCode" className="text-yellow-300 text-sm">
//                   Personal Number*
//                 </label>
//                 <div className="relative w-full">
//                   <input
//                     type="text"
//                     id="employeeCode"
//                     value={code}
//                     onChange={(e) => {
//                       setCode(e.target.value);
//                       setHasError(false); // Reset error state when typing
//                     }}
//                     placeholder={hasError ? message : "Enter Valid Personal Number"}
//                     className={`w-full border ${
//                       hasError ? 'border-red-500' : 'border-yellow-400'
//                     } bg-transparent text-yellow-300 placeholder-${hasError ? 'red-500' : 'yellow-300/70'} focus:ring-yellow-400 rounded-none p-2 pl-10 outline-none`}
//                   />
//                   {hasError && (
//                     <span className="absolute right-2 top-2.5 text-red-500 text-lg">⚠️</span>
//                   )}
//                 </div>
//               </div>
//               <div className="text-center mt-[2rem]">
//                 <button
//                   type="submit"
//                   className="w-[40%] bg-gradient-to-r from-yellow-300 to-yellow-700 hover:from-yellow-500 hover:to-yellow-300 text-black font-semibold py-2 px-4 rounded-none transition-colors"
//                 >
//                   SUBMIT
//                 </button>
//               </div>
//             </form>
//             <p className="text-white text-sm mt-4 w-60 text-center">
//               For an invitee from a vendor partner,{' '}
//               <span
//                 onClick={toggleForm}
//                 className="text-white font-bold cursor-pointer border-b-2 border-white"
//               >
//                 Click here to register
//               </span>
//             </p>
//           </div>
//         )}

//         {/* Vendor Form */}
//         {showVendorForm && (
//           <div className="space-y-8 m-4 flex flex-col items-center justify-center">
//             <h1 className="text-yellow-500 text-3xl font-semibold tracking-wide mb-6">ENTER DETAILS (Vendor)</h1>
//             <form className="w-full max-w-sm" onSubmit={handleVendorFormSubmit}>
//               {/* Full Name Field */}
//               <div className="flex flex-col gap-1 items-start">
//                 <label htmlFor="vendorName" className="text-yellow-300 text-sm">
//                   Full Name*
//                 </label>
//                 <div className="relative w-full">
//                   <input
//                     type="text"
//                     id="vendorName"
//                     value={fullName}
//                     onChange={(e) => {
//                       setFullName(e.target.value);
//                       setHasError(false); // Reset error state when typing
//                     }}
//                     placeholder={hasError && !fullName ? message : "Enter Vendor Name"}
//                     className={`w-full border ${
//                       hasError && !fullName ? 'border-red-500' : 'border-yellow-400'
//                     } bg-transparent text-yellow-300 placeholder-${
//                       hasError && !fullName ? 'red-500' : 'yellow-300/70'
//                     } focus:ring-yellow-400 rounded-none p-2 pl-10 outline-none`}
//                   />
//                   {hasError && !fullName && (
//                     <span className="absolute right-2 top-2.5 text-red-500 text-lg">⚠️</span>
//                   )}
//                 </div>
//               </div>

//               {/* Vendor Code Field */}
//               <div className="flex flex-col gap-1 items-start mt-4">
//                 <label htmlFor="vendorCode" className="text-yellow-300 text-sm">
//                   Vendor Code*
//                 </label>
//                 <div className="relative w-full">
//                   <input
//                     type="text"
//                     id="vendorCode"
//                     value={code}
//                     onChange={(e) => {
//                       setCode(e.target.value);
//                       setHasError(false); // Reset error state when typing
//                     }}
//                     placeholder={hasError && code ? message : "Enter Vendor Code"}
//                     className={`w-full border ${
//                       hasError && code ? 'border-red-500' : 'border-yellow-400'
//                     } bg-transparent text-yellow-300 placeholder-${
//                       hasError && code ? 'red-500' : 'yellow-300/70'
//                     } focus:ring-yellow-400 rounded-none p-2 pl-10 outline-none`}
//                   />
//                   {hasError && code && (
//                     <span className="absolute right-2 top-2.5 text-red-500 text-lg">⚠️</span>
//                   )}
//                 </div>
//               </div>

//               <div className="text-center mt-[2rem]">
//                 <button
//                   type="submit"
//                   className="w-[40%] bg-gradient-to-r from-yellow-300 to-yellow-700 hover:from-yellow-500 hover:to-yellow-300 text-black font-semibold py-2 px-4 rounded-none transition-colors"
//                 >
//                   SUBMIT
//                 </button>
//               </div>
//             </form>
//             <p className="text-white text-sm mt-4 w-60 text-center">
//               If you are an employee,{' '}
//               <span
//                 onClick={toggleForm}
//                 className="text-white font-bold cursor-pointer border-b-2 border-white"
//               >
//                 Click here to register
//               </span>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchForm;







// import React, { useState } from 'react';
// import axios from 'axios'; // For HTTP requests
// import "../index.css";
// import { useNavigate } from 'react-router-dom';

// const SearchForm = () => {
//   const [showVendorForm, setShowVendorForm] = useState(false); // Toggle vendor form
//   const [code, setCode] = useState(''); // Employee or vendor code
//   const [fullName, setFullName] = useState(''); // Vendor name
//   const [message, setMessage] = useState(''); // Result message
//   const [seatNumber, setSeatNumber] = useState(''); // Allocated seat
//   const [isAttended, setIsAttended] = useState(false); // Attendance status
//   const [hasError, setHasError] = useState(false); // Track if there's an error
//   const navigate = useNavigate();

//   // Function to handle switching forms and resetting error message
//   const toggleForm = () => {
//     setShowVendorForm(!showVendorForm);
//     setMessage(''); // Clear error message when switching forms
//     setCode(''); // Optionally clear code to avoid cross-form data leakage
//     setFullName(''); // Clear vendor full name if switching from vendor to employee
//     setHasError(false); // Reset error state
//   };

//   // Handle Employee Form Submission
//   const handleEmployeeFormSubmit = async (e) => {
//     e.preventDefault();

//     const formData = { code };
//     console.log("Employee Form Data:", formData);

//     try {
//       const response = await axios.post('https://orca-app-zbdu3.ondigitalocean.app/verify-code', formData, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.data.success) {
//         setSeatNumber(response.data.seatNumber);
//         setIsAttended(response.data.isAttended);
//         setMessage('Code verified successfully!');
//         setHasError(false);
//         navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
//       }
//     } catch (error) {
//       setMessage("⚠️ Enter Valid Personal Number");
//       setHasError(true);
//       setCode(''); // Empty the input field on error
//       console.error("Employee Verification Error:", error.response?.data || error.message);
//     }
//   };

//   // Handle Vendor Form Submission
//   const handleVendorFormSubmit = async (e) => {
//     e.preventDefault();

//     if (!code) {
//       setMessage('Vendor code is required.');
//       setHasError(true);
//       return;
//     }

//     const formData = { code, fullName };
//     console.log("Vendor Form Data Sent to Backend:", formData);

//     try {
//       const response = await axios.post('https://orca-app-zbdu3.ondigitalocean.app/verify-vendor', formData, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.data.success) {
//         setSeatNumber(response.data.seatNumber);
//         setIsAttended(response.data.isAttended);
//         setMessage('Vendor verified successfully!');
//         setHasError(false);
//         navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
//       }
//     } catch (error) {
//       setMessage("⚠️ Enter Valid Vendor code");
//       setHasError(true);
//       setCode(''); // Empty the input field on error
//       console.error("Vendor Verification Error:", error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center p-4">
//       <div className="w-full max-w-md space-y-12 -mt-12">
//         {/* Employee Form */}
//         {!showVendorForm && (
//           <div className="space-y-8 m-4 flex flex-col items-center justify-center">
//             <h1 className="text-yellow-500 text-3xl font-semibold tracking-wide mb-6">ENTER DETAILS</h1>
//             <form className="w-full max-w-sm" onSubmit={handleEmployeeFormSubmit}>
//               <div className="flex flex-col gap-1 items-start">
//                 <label htmlFor="employeeCode" className="text-yellow-300 text-sm">
//                   Personal Number*
//                 </label>
//                 <div className="relative w-full">
//                   <input
//                     type="text"
//                     id="employeeCode"
//                     value={code}
//                     onChange={(e) => {
//                       // Restrict input to only numbers
//                       const value = e.target.value;
//                       if (/^[0-9]*$/.test(value)) {
//                         setCode(value);
//                         setHasError(false); // Reset error state when typing
//                       } else {
//                         setHasError(true); // Set error if input contains letters
//                       }
//                     }}
//                     placeholder={hasError ? "Enter Valid Personal Number" : "Enter Valid Personal Number"}
//                     className={`w-full border ${hasError ? 'border-red-500' : 'border-yellow-400'
//                       } bg-transparent text-yellow-300 placeholder-${hasError ? 'red-500' : 'yellow-300/70'
//                       } focus:ring-yellow-400 rounded-none p-2 pl-10 outline-none`}
//                   />
//                   {hasError && (
//                     <span className="absolute right-2 top-2.5 text-red-500 text-lg">⚠️</span>
//                   )}
//                 </div>
//               </div>

//               <div className="text-center mt-[2rem]">
//                 <button
//                   type="submit"
//                   className="w-[40%] bg-gradient-to-r from-yellow-300 to-yellow-700 hover:from-yellow-500 hover:to-yellow-300 text-black font-semibold py-2 px-4 rounded-none transition-colors"
//                 >
//                   SUBMIT
//                 </button>
//               </div>
//             </form>
//             <p className="text-white text-sm mt-4 w-60 text-center">
//               For an invitee from a vendor partner,{' '}
//               <span
//                 onClick={toggleForm}
//                 className="text-white font-bold cursor-pointer border-b-2 border-white"
//               >
//                 Click here to register
//               </span>
//             </p>
//           </div>
//         )}

//         {/* Vendor Form */}
//         {showVendorForm && (
//           <div className="space-y-8 m-4 flex flex-col items-center justify-center">
//             <h1 className="text-yellow-500 text-3xl font-semibold tracking-wide mb-6">ENTER DETAILS (Vendor)</h1>
//             <form className="w-full max-w-sm" onSubmit={handleVendorFormSubmit}>
//               {/* Full Name Field */}
//               <div className="flex flex-col gap-1 items-start">
//                 <label htmlFor="vendorName" className="text-yellow-300 text-sm">
//                   Full Name*
//                 </label>
//                 <div className="relative w-full">
//                   <input
//                     type="text"
//                     id="vendorName"
//                     value={fullName}
//                     onChange={(e) => {
//                       setFullName(e.target.value);
//                       setHasError(false); // Reset error state when typing
//                     }}
//                     placeholder="Enter Vendor Name"
//                     className="w-full border border-yellow-400 bg-transparent text-yellow-300 placeholder-yellow-300/70 focus:ring-yellow-400 rounded-none p-2 pl-10 outline-none"
//                   />
//                 </div>
//               </div>

//               {/* Vendor Code Field */}
//               <div className="flex flex-col gap-1 items-start mt-4">
//                 <label htmlFor="vendorCode" className="text-yellow-300 text-sm">
//                   Vendor Code*
//                 </label>
//                 <div className="relative w-full">
//                   <input
//                     type="text"
//                     id="vendorCode"
//                     value={code}
//                     onChange={(e) => {
//                       setCode(e.target.value);
//                       setHasError(false); // Reset error state when typing
//                     }}
//                     placeholder={hasError ? message : "Enter Vendor Code"}
//                     className={`w-full border ${hasError ? 'border-red-500' : 'border-yellow-400'
//                       } bg-transparent text-yellow-300 placeholder-${hasError ? 'red-500' : 'yellow-300/70'
//                       } focus:ring-yellow-400 rounded-none p-2 pl-10 outline-none`}
//                   />
//                   {hasError && code && (
//                     <span className="absolute right-2 top-2.5 text-red-500 text-lg">⚠️</span>
//                   )}
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="text-center mt-[2rem]">
//                 <button
//                   type="submit"
//                   className="w-[40%] bg-gradient-to-r from-yellow-300 to-yellow-700 hover:from-yellow-500 hover:to-yellow-300 text-black font-semibold py-2 px-4 rounded-none transition-colors"
//                 >
//                   SUBMIT
//                 </button>
//               </div>
//             </form>
//             <p className="text-white text-sm mt-4 w-60 text-center">
//               If you are an employee,{' '}
//               <span
//                 onClick={toggleForm}
//                 className="text-white font-bold cursor-pointer border-b-2 border-white"
//               >
//                 Click here to login
//               </span>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchForm;






import React, { useState } from 'react';
import axios from 'axios'; // For HTTP requests
import "../index.css";
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [showVendorForm, setShowVendorForm] = useState(false); // Toggle vendor form
  const [code, setCode] = useState(''); // Employee or vendor code
  const [fullName, setFullName] = useState(''); // Vendor name
  const [message, setMessage] = useState(''); // Result message
  const [seatNumber, setSeatNumber] = useState(''); // Allocated seat
  const [isAttended, setIsAttended] = useState(false); // Attendance status
  const [hasError, setHasError] = useState(false); // Track if there's an error
  const navigate = useNavigate();

  // Function to handle switching forms and resetting error message
  const toggleForm = () => {
    setShowVendorForm(!showVendorForm);
    setMessage(''); // Clear error message when switching forms
    setCode(''); // Optionally clear code to avoid cross-form data leakage
    setFullName(''); // Clear vendor full name if switching from vendor to employee
    setHasError(false); // Reset error state
  };

  // Handle Employee Form Submission
  const handleEmployeeFormSubmit = async (e) => {
    e.preventDefault();

    const formData = { code };
    console.log("Employee Form Data:", formData);

    try {
      const response = await axios.post('https://orca-app-zbdu3.ondigitalocean.app/verify-code', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data.success) {
        setSeatNumber(response.data.seatNumber);
        setIsAttended(response.data.isAttended);
        setMessage('Code verified successfully!');
        setHasError(false);
        navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
      }
    } catch (error) {
      setMessage("⚠️ Enter Valid Personal Number");
      setHasError(true);
      setCode(''); // Empty the input field on error
      console.error("Employee Verification Error:", error.response?.data || error.message);
    }
  };

  // Handle Vendor Form Submission
  const handleVendorFormSubmit = async (e) => {
    e.preventDefault();

    if (!code) {
      setMessage('Vendor code is required.');
      setHasError(true);
      return;
    }

    // Convert the code to uppercase
    const upperCaseCode = code.toUpperCase();

    const formData = { code: upperCaseCode, fullName };
    console.log("Vendor Form Data Sent to Backend:", formData);

    try {
      const response = await axios.post('https://orca-app-zbdu3.ondigitalocean.app/verify-vendor', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data.success) {
        setSeatNumber(response.data.seatNumber);
        setIsAttended(response.data.isAttended);
        setMessage('Vendor verified successfully!');
        setHasError(false);
        navigate('/seating', { state: { seatNumber: response.data.seatNumber } });
      }
    } catch (error) {
      setMessage("⚠️ Enter Valid Vendor code");
      setHasError(true);
      setCode(''); // Empty the input field on error
      console.error("Vendor Verification Error:", error.response?.data || error.message);
    }
  };


  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-12 -mt-12">
        {/* Employee Form */}
        {!showVendorForm && (
          <div className="space-y-8 m-4 flex flex-col items-center justify-center">
            <h1 className="text-yellow-500 text-3xl font-semibold tracking-wide mb-6">ENTER DETAILS</h1>
            <form className="w-full max-w-sm" onSubmit={handleEmployeeFormSubmit}>
              <div className="flex flex-col gap-1 items-start">
                <label htmlFor="employeeCode" className="text-yellow-300 text-sm">
                  Personal Number*
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="employeeCode"
                    value={code}
                    onChange={(e) => {
                      // Restrict input to only numbers
                      const value = e.target.value;
                      if (/^[0-9]*$/.test(value)) {
                        setCode(value);
                        setHasError(false); // Reset error state when typing
                      } else {
                        setHasError(true); // Set error if input contains letters
                      }
                    }}
                    placeholder={hasError ? "Enter Valid Personal Number" : "Enter Valid Personal Number"}
                    className={`w-full border ${hasError ? 'border-red-500' : 'border-yellow-400'
                      } bg-transparent text-yellow-300 placeholder-${hasError ? 'red-500' : 'yellow-300/70'
                      } focus:ring-yellow-400 rounded-none p-2 pl-10 outline-none`}
                  />
                  {hasError && (
                    <span className="absolute right-2 top-2.5 text-red-500 text-lg">⚠️</span>
                  )}
                </div>
              </div>

              <div className="text-center mt-[2rem]">
                <button
                  type="submit"
                  className="w-[40%] bg-gradient-to-r from-yellow-300 to-yellow-700 hover:from-yellow-500 hover:to-yellow-300 text-black font-semibold py-2 px-4 rounded-none transition-colors"
                >
                  SUBMIT
                </button>
              </div>
            </form>
            <p className="text-white text-sm mt-4 w-60 text-center">
              For an invitee from a vendor partner,{' '}
              <span
                onClick={toggleForm}
                className="text-white font-bold cursor-pointer border-b-2 border-white"
              >
                Click here to register
              </span>
            </p>
          </div>
        )}

        {/* Vendor Form */}
        {showVendorForm && (
          <div className="space-y-8 m-4 flex flex-col items-center justify-center">
            <h1 className="text-yellow-500 text-3xl font-semibold tracking-wide mb-6">ENTER DETAILS (Vendor)</h1>
            <form className="w-full max-w-sm" onSubmit={handleVendorFormSubmit}>
              {/* Full Name Field */}
              <div className="flex flex-col gap-1 items-start">
                <label htmlFor="vendorName" className="text-yellow-300 text-sm">
                  Full Name*
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="vendorName"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      setHasError(false); // Reset error state when typing
                    }}
                    placeholder="Enter Vendor Name"
                    className="w-full border border-yellow-400 bg-transparent text-yellow-300 placeholder-yellow-300/70 focus:ring-yellow-400 rounded-none p-2 pl-10 outline-none"
                  />
                </div>
              </div>

              {/* Vendor Code Field */}
              <div className="flex flex-col gap-1 items-start mt-4">
                <label htmlFor="vendorCode" className="text-yellow-300 text-sm">
                  Vendor Code*
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="vendorCode"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value.toUpperCase());
                      setHasError(false); // Reset error state when typing
                    }}
                    placeholder={hasError ? message : "Enter Vendor Code"}
                    className={`w-full border ${hasError ? 'border-red-500' : 'border-yellow-400'
                      } bg-transparent text-yellow-300 placeholder-${hasError ? 'red-500' : 'yellow-300/70'
                      } focus:ring-yellow-400 rounded-none p-2 pl-10 outline-none`}
                  />
                  {hasError && code && (
                    <span className="absolute right-2 top-2.5 text-red-500 text-lg">⚠️</span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-[2rem]">
                <button
                  type="submit"
                  className="w-[40%] bg-gradient-to-r from-yellow-300 to-yellow-700 hover:from-yellow-500 hover:to-yellow-300 text-black font-semibold py-2 px-4 rounded-none transition-colors"
                >
                  SUBMIT
                </button>
              </div>
            </form>
            <p className="text-white text-sm mt-4 w-80 text-center">
              If you are an employee,{' '}
              <span
                onClick={toggleForm}
                className="text-white font-bold cursor-pointer border-b-2 border-white"
              >
                Click here to login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
