import React from "react";
import PalmEmoji from "./PalmEmoji";

const Contact = () => {
  // Function to copy email to clipboard
  const copyEmail = () => {
    const email = "parajuli.monsoon2001@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!"); // Optional: You can show a message or a tooltip
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div
      name="contact"
      className="w-full h-auto flex justify-center items-center bg-[#0a192f] pt-20"
      id="contact"
    >
      <form
        method="POST"
        action="https://getform.io/f/pagxqolb"
        className="flex flex-col max-w-[600px] w-full p-2"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 flex items-center">
            <span>
              <PalmEmoji emoji="✉️" />
            </span>
            {"  "}
            Submit the form or shoot me an emai -
            <span
              className="text-pink-600 cursor-pointer hover:text-pink-400"
              onClick={copyEmail} // Trigger copyEmail function on click
            >
              parajuli.monsoon2001@gmail.com
            </span>
          </p>
        </div>
        <input
          className="my-4 p-2 bg-[#ccd6f6] placeholder:text-black"
          type="text"
          placeholder="Name..."
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] placeholder:text-black"
          type="email"
          placeholder="Email..."
          name="email"
          required
        />
        <textarea
          className="my-4 p-2 bg-[#ccd6f6] placeholder:text-black"
          name="message"
          id=""
          rows="10"
          placeholder="Message..."
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
