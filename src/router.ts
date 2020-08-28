/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";


/**
 * Router Definition
 */

export const simpleRouter = express.Router();


/**
 * Controller Definitions
 */

simpleRouter.get("/:name", async (req: Request, res: Response) => {
  try {
    const message = `Hello ${req.params.name.toLocaleUpperCase()}!`
    res.status(200).send(message);
  } catch (e) {
    res.status(404).send(e.message);
  }
});