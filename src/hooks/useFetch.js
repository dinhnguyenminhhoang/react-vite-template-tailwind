import instance from "../config/instance";
import useAsync from "./useAsync";
const DEFAULT_OPTIONS = {
    headers: { "Content-Type": "application/json" },
};

export default function useFetch(url, options = {}, dependencies = []) {
    return useAsync(async () => {
        try {
            const response = await instance({
                url,
                ...DEFAULT_OPTIONS,
                ...options,
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                return Promise.reject(error.response.data);
            } else if (error.request) {
                return Promise.reject(error.request);
            } else {
                return Promise.reject(error.message);
            }
        }
    }, dependencies);
}
