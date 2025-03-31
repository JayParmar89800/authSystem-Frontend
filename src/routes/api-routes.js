const path = (base, ...params) => {
    const paramString = params.length ? `/${params.join("/")}` : ""; // Add params only if present
    return `${base}${paramString}`.replace(/\/+$/, ""); // Remove trailing slash if any
};

const API_URL = {
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    VERIFY_EMAIL:(token)=>path("/auth/verify",token)

  },
};

export default API_URL;
