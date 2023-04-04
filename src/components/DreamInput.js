import React, { useState } from "react";
import axios from "axios";

const DreamInput = () => {
  const [dreamText, setDreamText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dreamText.trim()) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/engines/text-davinci-003/completions",
          {
            prompt: `Please interpret this dream: ${dreamText}`,
            max_tokens: 150,
            n: 1,
            stop: null,
            temperature: 0.5,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
          }
        );

        const interpretedDream = response.data.choices[0].text;
        setResponseText(interpretedDream);
      } catch (error) {
        console.error("Error interpreting dream:", error);
        setResponseText("Error interpreting dream. Please try again.");
      } finally {
        setIsLoading(false);
      }
      setDreamText("");
    }
  };

  return (
    <div className="dream-input-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/clouds.mp4" type="video/mp4" />
      </video> 
      <div className="w-full max-w-md pt-10 mx-auto my-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-8 pt-10 pb-8 mt-20 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dreamText"
            >
              Describe your dream:
            </label>
            <textarea
              id="dreamText"
              rows="5"
              value={dreamText}
              onChange={(e) => setDreamText(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Interpret Dream
            </button>
          </div>

          {isLoading && (
            <p className="text-center mt-4 text-gray-500">
              Interpreting dream...
            </p>
          )}
          {responseText && (
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">Interpretation:</h2>
              <p className="text-gray-700">{responseText}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DreamInput;

// import React, { useState } from 'react';
// import axios from 'axios';

// const DreamInput = () => {
//     const [dreamText, setDreamText] = useState('');
//     const [responseText, setResponseText] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (dreamText.trim()) {
//             setIsLoading(true);
//             try {
//                 const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
//                     prompt: `Please interpret this dream: ${dreamText}`,
//                     max_tokens: 150,
//                     n: 1,
//                     stop: null,
//                     temperature: 0.5,
//                 }, {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
//                     }
//                 });

//                 const interpretedDream = response.data.choices[0].text;
//                 setResponseText(interpretedDream);
//             } catch (error) {
//                 console.error('Error interpreting dream:', error);
//                 console.log(error)
//                 setResponseText('Error interpreting dream. Please try again.');
//             } finally {
//                 setIsLoading(false);
//             }
//             setDreamText('');
//         }
//     };

//     return (
//         <div className="w-full max-w-md">
//           <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dreamText">
//                 Describe your dream:
//               </label>
//               <textarea
//                 id="dreamText"
//                 rows="5"
//                 value={dreamText}
//                 onChange={(e) => setDreamText(e.target.value)}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               ></textarea>
//             </div>
//             <div className="flex items-center justify-between">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//                 Interpret Dream
//               </button>
//             </div>

//             {isLoading && <p className="text-center mt-4 text-gray-500">Interpreting dream...</p>}
//             {responseText && (
//               <div className="mt-4">
//                 <h2 className="text-xl font-bold mb-2">Interpretation:</h2>
//                 <p className="text-gray-700">{responseText}</p>
//               </div>
//             )}
//           </form>
//         </div>
//       );
//     };

//     export default DreamInput;
