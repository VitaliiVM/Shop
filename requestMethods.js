import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//         .accessToken || "";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzlkZTRlYjI3M2Q5YjI3ZTYwMGRkOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjMxNTk0OSwiZXhwIjoxNjM2NTc1MTQ5fQ.vFePi1TVBqiLSMWI8rb5kZcwGfAq5fx7P4sS80mEgIc";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});