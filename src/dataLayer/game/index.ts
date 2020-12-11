import {Quiz} from "../../types/Quiz";
import axios from "axios";
import {BE_URL} from "../../config";
import {GAME_STATE} from "../../types/GameState";
import {Game} from "../../types/Game";

export const setState = async ({ game_id, question_id, state}: { game_id: string, question_id: string, state: GAME_STATE}): Promise<void> => {
    try {
        await axios.post<void>(`${BE_URL}/games/${game_id}`, {
            question_id,
            state,
        });
        return;
    } catch (err) {
        // TODO handle error
        console.error(err);
        throw new Error();
    }
}

export const getById = async (id: string): Promise<Game> => {
    try {
        const response = await axios.get<Game>(`${BE_URL}/game/${id}`);
        return response.data;
    } catch (err) {
        // TODO handle error
        console.error(err);
        throw new Error();
    }
}