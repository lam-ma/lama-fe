import {Quiz} from "../../types/Quiz";
import axios from "axios";
import { BE_URL } from "../../config";

export const getById = async (id: string): Promise<Quiz> => {
    try {
        const response = await axios.get(`${BE_URL}/quizzes/${id}`);
        return response.data;
    } catch (err) {
        // TODO handle error
        console.error(err);
        debugger;
        throw new Error();
    }
}
