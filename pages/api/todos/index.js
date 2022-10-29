import {rows} from "../../../data/todos";
export default function handler(req, res) {
    res.status(200).json(rows);
}
