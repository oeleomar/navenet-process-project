import multer from "multer";
import fs from "fs";
import { Router } from "express";
import { multerConfig } from "../config/multer.js";
import { AppError } from "../errors/AppError.js";
import { removeFiles } from "../utils/removeFiles.js";
import { GetProcessController } from "../controller/process/GetProcess/GetProcessController.js";
import { CreateProcessController } from "../controller/process/CreateProcess/CreateProcessController.js";
import { UpdateProcessController } from "../controller/process/UpdateProcess/UpdateProcessController.js";
import { DeleteProcessController } from "../controller/process/DeleteProcess/DeleteProcessController.js";
import { GetSingleProcessController } from "../controller/process/GetSingleProcess/GetSingleProcessController.js";
import { checkToken } from "../middleware/checkToken.js";

const processRoute = Router();

const createProcessController = new CreateProcessController();
const getProcessController = new GetProcessController();
const updateProcessController = new UpdateProcessController();
const deleteProcessController = new DeleteProcessController();
const getSingleProcessController = new GetSingleProcessController();

const upload = multer(multerConfig).fields([
  { name: "file", maxCount: 1 },
  { name: "video", maxCount: 1 },
]);

//Create
processRoute.post("/", async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).send({ msg: err.message });
    }
    if (req.validationFile) {
      if (req.files.file) removeFiles(req.files.file[0].path);
      if (req.files.video) removeFiles(req.files.video[0].path);
      return res.status(422).json({ error: req.validationFile });
    }

    try {
      const process = await createProcessController.handle(req.body, req.files);
      if (process instanceof AppError) {
        if (req.files && req.files.file) removeFiles(req.files.file[0].path);
        if (req.files && req.files.video) removeFiles(req.files.video[0].path);
        return res.status(400).json({ error: process });
      }

      return res.status(201).json(process);
    } catch (e) {
      return res.status(500).json(new AppError("Internal server error", 500));
    }
  });
});

//Read one setor
processRoute.get("/:setor", async (req, res) => {
  const { setor } = req.params;
  try {
    const data = await getProcessController.handle(setor);

    if (data instanceof AppError) {
      return res.status(data.statusCode).json(data);
    }

    return res.json({ data });
  } catch (e) {
    return res.status(500).json(new AppError("Internal server error", 500));
  }
});

processRoute.get("/:setor/:id", async (req, res) => {
  getSingleProcessController.handle(req, res);
});

//Update
processRoute.put("/:id", async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).send({ msg: err.message });
    }
    if (req.validationFile) {
      if (req.files.file) removeFiles(req.files.file[0].path);
      if (req.files.video) removeFiles(req.files.video[0].path);
      return res.status(422).json({ msg: req.validationFile });
    }

    const { id } = req.params;
    await updateProcessController.handle(req, res, id);
  });
});

//Delete
processRoute.delete("/:id", checkToken, async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(404).json(new AppError("ID não enviado", 422));

  await deleteProcessController.handle(req, res, id);
});

export { processRoute };
