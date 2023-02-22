import { BadRequest } from "http-errors";
// TODO Import the service class
import Exercise1Service from "../services/exercise-1.service";

export default class Exercise1Controller {
  async getMessage(req, res, next) {
    const { firstName } = req.params;
    const { age } = req.query;
    const ExerciseOne = new Exercise1Service();
    const message = await ExerciseOne.getMessage(firstName, age);

    // TODO Call the service layer and return data

    res.send({
      status: "ok",
      ...message,
    });
    return next();
  } // - getMessage
}
