import axios from "axios";
import {BE_URL} from "../../config";
import {GAME_STATE} from "../../types/GameState";
import {GameResponse} from "../../types/GameResponse";
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

export const getById = async (id: string): Promise<GameResponse> => {
    try {
        const response = await axios.get<GameResponse>(`${BE_URL}/games/${id}`);
        return response.data;
    } catch (err) {
        // TODO handle error
        console.error(err);
        throw new Error();
    }
}

export const setGameState = async (gameId: string, state: GAME_STATE, question_id: string): Promise<void> => {
    const config: any = {
        state,
        question_id
    };
    try {
        await axios.post<Game, void>(`${BE_URL}/games/${gameId}`, config);
        return;
    } catch (err) {
        // TODO handle error
        console.error(err);
        throw new Error();
    }
};