const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        await axios.post("http://localhost:5000/api/auth/signup", formData);
        setSuccessMessage("Sign-up successful!");
      } catch (err) {
        setErrors({ apiError: err.response?.data?.message || "Something went wrong!" });
      } finally {
        setLoading(false);
      }
    }
  };
  