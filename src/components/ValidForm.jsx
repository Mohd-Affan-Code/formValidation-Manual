import React, { useState } from "react";

const ValidForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      alert("Form submitted:");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className=" h-screen flex justify-center items-center">
      <form
        className="bg-green-200 py-6 px-4 flex flex-col gap-4 rounded-xl"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="text-xl">Name:</label> <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Your name"
            className="p-2 text-xl rounded"
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label className="text-xl">Email:</label> <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Your Email"
            className="p-2 text-xl rounded"
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label className="text-xl">Password:</label> <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter Your Password"
            className="p-2 text-xl rounded"
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <button className="py-1 px-3 text-xl text-white font-bold bg-blue-400">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ValidForm;
