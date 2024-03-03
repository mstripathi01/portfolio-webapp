import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // To handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    fetch("https://getform.io/f/d719d0cb-d578-457a-9115-7417b21c87a5", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
          console.log("Form submitted successfully");
        } else {
          // Handle errors
          console.error("Error submitting form");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear the error message if user starts typing again
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.name && "border-red-500"
              }`}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.email && "border-red-500"
              }`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="5"
              className={`w-full mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.message && "border-red-500"
              }`}
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}

            <button
              type="submit"
              className="w-full mt-6 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 text-white rounded-md hover:scale-105 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
