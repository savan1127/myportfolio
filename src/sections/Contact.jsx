// import React, { useState } from "react";
// import { toast } from "react-hot-toast";
// import SuccessCheck from "../animate/SuccessCheck";
// import Loader from "../animate/Loader"

// const Contact = () => {
//   const [loading, setLoading] = useState(false);
//   const [sent, setSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSent(false);

//     // Simulate form submission delay
//     setTimeout(() => {
//       setLoading(false);
//       setSent(true);
//       toast.success("Message sent successfully!");
//       e.target.reset();
//     }, 2000);
//   };

//   return (
//     <section id="contact" className="py-20 px-4 text-white dark:text-white">
//       <h2 className="text-3xl font-bold mb-14 text-center">Contact Me</h2>

//       {loading && <Loader/>}
//       {sent && <SuccessCheck/>}

//       <form
//         onSubmit={handleSubmit}
//         action="https://formspree.io/f/xwprjeog"
//         method="POST"
//         className="max-w-xl mx-auto space-y-4 text-gray-800"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           required
//           className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           required
//           className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
//         />
//         <textarea
//           name="message"
//           rows="5"
//           placeholder="Your Message"
//           required
//           className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 ${
//             loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import SuccessCheck from "../animate/SuccessCheck";
import Loader from "../animate/Loader";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xwprjeog", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setSent(true);
        toast.success("Message sent successfully!");
        e.target.reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (err) {
      toast.error("Error connecting to Formspree.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 text-white dark:text-white">
      <h2 className="text-3xl font-bold mb-14 text-center">Contact Me</h2>

      {loading && <Loader />}
      {sent && <SuccessCheck />}

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4 text-gray-800"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
        />
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
