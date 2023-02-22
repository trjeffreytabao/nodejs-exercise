import { BadRequest } from "http-errors";
// TODO Import the service class
import Exercise2Service from "../services/exercise-2.service";

export default class Exercise2Controller {
  async storeDetails(req, res, next) {
    const details = req.body;

    const ExerciseOne = new Exercise2Service();
    const message = await ExerciseOne.storeDetails(details);
    // TODO Call the service layer and return data

    res.send({ message });
    return next();
  } // - getMessage
}
