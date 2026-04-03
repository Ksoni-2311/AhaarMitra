import React from "react";
import useVendorStore from "../stores/vendor.store";
import { useNavigate } from "react-router-dom";

const RegisterProvider1 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    profilePic: null, // ✅ store file
  });

  const fullName = `${formData.firstName} ${formData.lastName}`.trim();

  const { registerVendor } = useVendorStore();

  // 🔹 Handle Change (supports file)
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // 🔹 Handle Submit
  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("name", fullName);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("password", formData.password);

  // 🔥 IMAGE
  data.append("profilePic", formData.profilePic);

  const res = await registerVendor(data);

  if (res?.success) {
    alert("✅ Step 1 completed successfully!");
    navigate("/v2");
  }
};

  return (
    <div className="antialiased overflow-x-hidden min-h-screen bg-white text-black">
      <main className="min-h-[calc(100vh-160px)] grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SECTION */}
        <section className="p-8 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-blue-100 via-transparent to-transparent border-r border-black/5">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Empower Your Kitchen,
              <span className="text-blue-600"> Feed the Future.</span>
            </h1>
            <p className="text-black/60 text-lg">
              Join a community of local chefs and grow your business.
            </p>
          </div>
        </section>

        {/* RIGHT SECTION */}
        <section className="p-8 lg:p-20 flex items-center justify-center">
          <div className="max-w-md w-full">

            <div className="mb-10">
              <h2 className="text-3xl font-black">Personal Details</h2>
              <p className="text-black/40 text-sm">
                Step 1 of 3: Owner Identification
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 border-b border-gray-200 pb-12 mb-12"
            >

             {/* Profile Picture Upload (REQUIRED 🔥) */}
<div className="space-y-2">
  <label className="text-sm font-semibold text-black/70">
    Profile Picture <span className="text-red-500">*</span>
  </label>

  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-6 hover:border-blue-500 transition cursor-pointer">

    {formData.profilePic ? (
      <img
        src={URL.createObjectURL(formData.profilePic)}
        alt="preview"
        className="w-24 h-24 rounded-full object-cover mb-3"
      />
    ) : (
      <div className="text-center text-gray-500 mb-3">
        <p className="text-sm font-medium">Click to upload</p>
        <p className="text-xs">PNG, JPG (max 2MB)</p>
      </div>
    )}

    <input
      type="file"
      name="profilePic"
      accept="image/*"
      onChange={handleChange}
      className="hidden"
      id="profilePicInput"
    />

    <label
      htmlFor="profilePicInput"
      className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold cursor-pointer hover:bg-blue-500"
    >
      {formData.profilePic ? "Change Image" : "Upload Image"}
    </label>
  </div>

  {/* Error */}
  {!formData.profilePic && (
    <p className="text-red-500 text-xs">
      Profile picture is required
    </p>
  )}
</div>

              {/* First + Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl text-sm bg-gray-100 border border-black/10"
                  placeholder="First Name"
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl text-sm bg-gray-100 border border-black/10"
                  placeholder="Last Name"
                />
              </div>

              {/* Email */}
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl text-sm bg-gray-100 border border-black/10"
                placeholder="Email Address"
              />

              {/* Phone */}
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl text-sm bg-gray-100 border border-black/10"
                placeholder="+91 9876543210"
              />

              {/* Password */}
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl text-sm bg-gray-100 border border-black/10"
                placeholder="Password"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black uppercase"
              >
                Next Step
              </button>
            </form>

            {/* Footer */}
            <div className="text-center uppercase text-sm">
              Already a partner?{" "}
              <span className="text-blue-600 font-bold cursor-pointer">
                Log To Partner Portal
              </span>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default RegisterProvider1;