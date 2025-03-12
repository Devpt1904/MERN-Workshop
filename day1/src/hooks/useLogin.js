import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          formData
        );

        const { token } = response.data;

        // Store token in localStorage or sessionStorage
        localStorage.setItem("authToken", token);

        alert("Login successful!");
      } catch (err) {
        setErrors({ apiError: err.response?.data?.message || "Login failed!" });
      } finally {
        setLoading(false);
      }
    }
  };

  return { formData, errors, handleChange, handleSubmit, loading };
};

export default useLogin;
