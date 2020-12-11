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
        throw new Error();
    }
}

export const startQuiz = async (id: string): Promise<{ game_id: string }> => {
    try {
        const response = await axios.get(`${BE_URL}/quizzes/${id}/start`);
        return response.data;
    } catch (err) {
        // TODO handle error
        console.error(err);
        // TODO remove hard coded game id
        return { game_id: '123'};
    }
}