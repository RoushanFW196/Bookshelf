// import React from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// const signup = () => {
//   const formik = useFormik({
//     initialValues: {
//       first_name: "",
//       last_name: "",
//       mobile: "",
//       email: "",
//       password: "",
//       cpassword: "",
//       profile_pic: "",
//     },

//     onSubmit: (values) => {
//       console.log("value", values);
//       handlesignup(values);
//     },
//   });

//   const handlesignup = async (data) => {
//     // const value = {
//     //   first_name: "Rohan",
//     //   last_name: "panday",
//     //   mobile: 9876543210,
//     //   email: "rohan@gmail",
//     //   password: "1234@1234",
//     //   cpassword: "1234@1234",
//     //   profile_pic: "rohan123",
//     // };

//     const response = await axios.post(
//       `http://localhost:1200/user/signup`,

//       data,
//       {
//         headers: {
//           crossorigin: "true",
//           "Access-Control-Allow-Origin": "*",
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const respdata = await response["data"];
//     console.log("respdata", respdata);
//   };

//   return (
//     <div
//       style={{
//         margin: "auto",
//         width: "400px",
//         height: "600px",
//         border: "1px solid red",
//       }}
//     >
//       <form
//         className="w-full max-w-sm"
//         style={{ marginTop: "20px" }}
//         onSubmit={(e) => {
//           e.preventDefault();
//           formik.handleSubmit();
//         }}
//       >
//         <div className="md:flex md:items-center mb-6">
//           <div className="md:w-1/3">
//             <label
//               className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//               for="inline-full-name"
//             >
//               First Name
//             </label>
//           </div>
//           <div className="md:w-2/3">
//             <input
//               className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//               id="first_name"
//               name="first_name"
//               type="text"
//               placeholder="Enter Your First Name"
//               onChange={formik.handleChange}
//               value={formik.values.first_name}
//             />
//           </div>
//         </div>

//         <div className="md:flex md:items-center mb-6">
//           <div className="md:w-1/3">
//             <label
//               className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//               for="inline-full-name"
//             >
//               Last Name
//             </label>
//           </div>
//           <div className="md:w-2/3">
//             <input
//               className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//               id="last_name"
//               name="last_name"
//               type="text"
//               placeholder="Enter your Last Name"
//               onChange={formik.handleChange}
//               value={formik.values.last_name}
//             />
//           </div>
//         </div>

//         <div className="md:flex md:items-center mb-6">
//           <div className="md:w-1/3">
//             <label
//               className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//               for="inline-full-name"
//             >
//               Email
//             </label>
//           </div>
//           <div className="md:w-2/3">
//             <input
//               className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Enter Your Email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//             />
//           </div>
//         </div>

//         <div className="md:flex md:items-center mb-6">
//           <div className="md:w-1/3">
//             <label
//               className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//               for="inline-full-name"
//             >
//               Mobile
//             </label>
//           </div>
//           <div className="md:w-2/3">
//             <input
//               className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//               id="mobile"
//               name="mobile"
//               type="mobile"
//               placeholder="Enter Your mobile"
//               onChange={formik.handleChange}
//               value={formik.values.mobile}
//             />
//           </div>
//         </div>

//         <div className="md:flex md:items-center mb-6">
//           <div className="md:w-1/3">
//             <label
//               className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//               for="inline-full-name"
//             >
//               Password
//             </label>
//           </div>
//           <div className="md:w-2/3">
//             <input
//               className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//               id="password"
//               name="password"
//               type="password"
//               placeholder="Enter Your Password"
//               onChange={formik.handleChange}
//               value={formik.values.password}
//             />
//           </div>
//         </div>

//         <div className="md:flex md:items-center mb-6">
//           <div className="md:w-1/3">
//             <label
//               className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//               for="inline-full-name"
//             >
//               Confirm Password
//             </label>
//           </div>
//           <div className="md:w-2/3">
//             <input
//               className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//               id="cpassword"
//               name="cpassword"
//               type="password"
//               placeholder="Confirm Password"
//               onChange={formik.handleChange}
//               value={formik.values.cpassword}
//             />
//           </div>
//         </div>

//         <div className="md:flex md:items-center mb-6">
//           <div className="md:w-1/3">
//             <label
//               className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//               for="inline-full-name"
//             >
//               Upload Pic
//             </label>
//           </div>
//           <label className="md:w-2/3 block text-gray-500 font-bold">
//             <input className="mr-2 leading-tight" type="file" />
//             <span className="text-sm"></span>
//           </label>
//         </div>
//         <div className="md:flex md:items-center">
//           <div className="md:w-1/3"></div>
//           <div className="md:w-2/3">
//             <button
//               className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//               type="button"
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default signup;

// const value = {
//   first_name: "Rohan",
//   last_name: "panday",
//   mobile: 9876543210,
//   email: "rohan@gmail",
//   password: "1234@1234",
//   cpassword: "1234@1234",
//   profile_pic: "rohan123",
// };

// const handlesignup = async (data) => {
//   const response = await axios.post(
//     `http://localhost:1200/user/signup`,
//     data,
//     {
//       headers: {
//         "crossorigin": "true",
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const respdata = await response["data"];
//   console.log("respdata", respdata);
// };

import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { openNotificationWithIcon } from "../../utils/commonfunction";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [logindata, setLogindata] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogindata({ ...logindata, [name]: value });
  };

  const handlelogin = async (data) => {
    const response = await axios.post(
      `http://localhost:1200/user/signin`,
      data,
      {
        headers: {
          crossorigin: "true",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    const respdata = await response["data"];
    if (respdata["data"]) {
      openNotificationWithIcon(
        "success",
        "Congrats , You have successfully signed up.",
        3
      );
    }
    console.log("respdata", respdata);
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "400px",
        height: "250px",
        border: "1px solid red",
      }}
    >
      <form
        className="w-full max-w-sm"
        style={{ marginTop: "20px" }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submit", logindata);
          handlelogin(logindata);
        }}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              value={logindata.email}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="password"
              name="password"
              type="password"
              placeholder="Enter Your Password"
              onChange={handleChange}
              value={logindata.password}
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              SignIn
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
