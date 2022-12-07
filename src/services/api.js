import axios from "axios";

const key = '4bcb539f5521b73828aa4c05d8e2a421'
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmNiNTM5ZjU1MjFiNzM4MjhhYTRjMDVkOGUyYTQyMSIsInN1YiI6IjYzOTAyZWM5ZmQxNDBiMDA4YTQwYjhiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ofuZ_mR4Pjn600rOE0xbmwm4B8wU_YbfjvownLpqgBA'
export default axios.create({

    baseURL: `https://api.themoviedb.org/3`,
    headers: {
        Authorization: `Bearer ${token}`
    }
})