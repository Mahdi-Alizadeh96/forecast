// <import axios
import axios from "axios";
// import axios>

export function header() {
    const url = process.env.NEXT_PUBLIC_CITY_URL;

    return axios.create({
        baseURL : url,
        headers : {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
    })
}
