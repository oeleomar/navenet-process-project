import { AppError } from "../../../errors/AppError.js";
import Process from "../../../models/process/Process.js";

export class CreateProcessController {
  async handle(req, res) {
    if (Object.keys(req.body).length === 0) {
      if (process instanceof AppError) {
        if (req.files && req.files.file) removeFiles(req.files.file[0].path);
        if (req.files && req.files.video) removeFiles(req.files.video[0].path);
      }
      return res.status(400).json({ msg: "Campos inválidos" });
    }

    const { ativo = true, setor, tipo, titulo, descricao, author } = req.body;

    if (!setor || !tipo || !titulo || !author) {
      if (process instanceof AppError) {
        if (req.files && req.files.file) removeFiles(req.files.file[0].path);
        if (req.files && req.files.video) removeFiles(req.files.video[0].path);
      }
      return res.status(400).json({ msg: "Dados não enviados" });
    }

    const alreadyExistProcess = await Process.findOne({ setor, titulo });
    if (alreadyExistProcess) {
      if (process instanceof AppError) {
        if (req.files && req.files.file) removeFiles(req.files.file[0].path);
        if (req.files && req.files.video) removeFiles(req.files.video[0].path);
      }
      return res.status(400).json({ msg: "Processo já existente" });
    }

    const video = req.files
      ? req.files.video
        ? files.video[0].filename
        : ""
      : "";
    const documento = req.files
      ? req.files.file
        ? req.files.file[0].filename
        : ""
      : "";

    const date = new Date().toLocaleString("pt-BR", { dateStyle: "short" });

    try {
      const process = await Process.create({
        ativo,
        titulo,
        tipo,
        descricao,
        setor,
        video: video ? video : "",
        documento: documento ? documento : "",
        author,
        updatedAt: "",
        createdAt: date,
      });

      return res
        .status(201)
        .json({ msg: "Processo criado com sucesso", data: process });
    } catch (e) {
      if (process instanceof AppError) {
        if (req.files && req.files.file) removeFiles(req.files.file[0].path);
        if (req.files && req.files.video) removeFiles(req.files.video[0].path);
      }
      return res.status(500).json({ msg: "Internal server error" });
    }

    return process;
  }
}
