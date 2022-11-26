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

//Create
processRoute.post(
  "/",
  checkToken,
  multer(multerConfig).fields([
    { name: "file", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  async (req, res) => {
    if (req.validationFile) {
      if (req.files.file) removeFiles(req.files.file[0].path);
      if (req.files.video) removeFiles(req.files.video[0].path);
      return res.status(422).json({ error: req.validationFile });
    }
    console.log(req.files);
    try {
      const process = await createProcessController.handle(req.body, req.files);
      if (process instanceof AppError) {
        if (req.files && req.files.file) removeFiles(req.files.file[0].path);
        if (req.files && req.files.video) removeFiles(req.files.video[0].path);
        return res.status(400).json({ error: process });
      }

      return res.status(201).json(process);
    } catch (e) {
      console.log(e);
      return res.status(500).json(new AppError("Internal server error", 500));
    }
  },
);

//Read one setor
processRoute.get("/:setor", async (req, res) => {
  const { setor } = req.params;
  console.log("Entrei no setor", setor);
  try {
    const data = await getProcessController.handle(setor);

    if (data instanceof AppError) {
      return res.status(data.statusCode).json(data);
    }

    return res.json({ data });
  } catch (e) {
    console.log(e);
    return res.status(500).json(new AppError("Internal server error", 500));
  }
});

processRoute.get("/:setor/:id", async (req, res) => {
  getSingleProcessController.handle(req, res);
});

//Update
processRoute.put(
  "/:id",
  checkToken,
  multer(multerConfig).fields([
    { name: "file", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  async (req, res) => {
    if (req.validationFile) {
      if (req.files.file) removeFiles(req.files.file[0].path);
      if (req.files.video) removeFiles(req.files.video[0].path);
      return res.status(422).json({ error: req.validationFile });
    }

    const { id } = req.params;
    try {
      const data = await updateProcessController.handle(
        id,
        req.body,
        req.files,
      );

      if (data instanceof AppError) {
        if (req.files.file) removeFiles(req.files.file[0].path);
        if (req.files.video) removeFiles(req.files.video[0].path);
        return res.status(data.statusCode).json(data);
      }

      return res.json({ data: "Atualizado com sucesso", statusCode: 200 });
    } catch (e) {
      console.log(e);
      return res.status(500).json(new AppError("Internal server error", 500));
    }
  },
);

//Delete
processRoute.delete("/:id", checkToken, async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(404).json(new AppError("Processo não encontrado", 404));

  try {
    const deleted = await deleteProcessController.handle(id);
    if (deleted instanceof AppError) {
      return res.status(deleted.statusCode).json(deleted);
    }

    return res.status(200).json({ msg: deleted });
  } catch (e) {
    return res.status(500).json(new AppError("Internal server error", 500));
  }
});

export { processRoute };
