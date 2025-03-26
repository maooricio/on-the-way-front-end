import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// const httpFormData = axios.create({
//   baseURL: process.env.API_BASE_URL,
//   headers: {
//     "Content-type": "multipart/form-data",
//   },
// });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const interceptors = (config: any) => {
  const stringTokens = localStorage.getItem("tokens");
  const expiresAt = localStorage.getItem("expiresAt");
  const now = new Date();

  if (expiresAt && now.getTime() > parseInt(expiresAt)) {
    localStorage.removeItem("tokens");
    localStorage.removeItem("user");
    localStorage.removeItem("expiresAt");
    window.location.href = "/";
  }

  let token = null;

  if (stringTokens) {
    const tokens = JSON.parse(stringTokens);

    if (tokens.expiresAt) {
      const expiresAt = new Date(tokens.expiresAt);

      if (expiresAt.getTime() < now.getTime()) {
        localStorage.removeItem("tokens");
        localStorage.removeItem("user");
        window.location.href = "/";
      }
    }

    token = tokens.accessToken;
  }

  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

http.interceptors.request.use(interceptors);
// httpFormData.interceptors.request.use(interceptors);

export default http;
// export { httpFormData };
