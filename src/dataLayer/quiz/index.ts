import {Quiz} from "../../types/Quiz";
import axios from "axios";
import { BE_URL } from "../../config";
import {StartGameResponse} from "../../types/StartGameResponse";

export const getById = async (id: string): Promise<Quiz> => {
    try {
        const response = await axios.get<Quiz>(`${BE_URL}/quizzes/${id}`);
        return response.data;
    } catch (err) {
        // TODO handle error
        console.error(err);
        throw new Error();
    }
}

export const startQuiz = async (id: string): Promise<StartGameResponse> => {
    try {
        const response = await axios.post<StartGameResponse>(`${BE_URL}/quizzes/${id}/start`);
        return response.data;
    } catch (err) {
        // TODO handle error
        console.error(err);
        throw new Error();
    }
}
