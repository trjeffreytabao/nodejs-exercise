import exercise1 from "./exercise-1.route";

export default function registreRoutes(app) {
  app.use("/exercise-1", exercise1);

  app.get("/healthCheck", (req, res) => {
    res.send({ status: "ok" });
  });
}
