import userCtrl from "../controllers/userController.js";
import { userValidSchema } from "../validSchemas/userValid.js";

export const userRoutes = (fastify, opts, done) => {
  fastify.get("/", userCtrl.getData);
  fastify.get("/:id", userCtrl.getDataByid);

  fastify.post(
    "/",
    {
      schema: userValidSchema,
    },
    userCtrl.saveData
  );

  done();
};

