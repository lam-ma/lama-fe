import {Answer} from "./Answer";

export interface Question {
    "id": string;
    "description"?: string;
    "image_url"?: string;
    "answers": Answer[];
}