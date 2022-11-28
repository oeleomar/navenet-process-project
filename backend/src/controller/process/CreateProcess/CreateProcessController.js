import { AppError } from "../../../errors/AppError.js";
import Process from "../../../models/process/Process.js";

export class CreateProcessController {
  async handle(body, files) {
    if (Object.keys(body).length === 0) return new AppError("Dados inválidos");
    //if (!files.file) return new AppError("Arquivos não enviado");

    const { ativo = true, setor, tipo, titulo, descricao, author } = body;
    if (!setor || !tipo || !titulo || !author)
      return new AppError("Dados não enviados");

    const alreadyExistProcess = await Process.findOne({ setor, titulo });
    if (alreadyExistProcess) return new AppError("Processo Já Existente");

    const video = files ? (files.video ? files.video[0].filename : "") : "";
    const documento = files ? (files.file ? files.file[0].filename : "") : "";

    const process = await Process.create({
      ativo,
      titulo,
      tipo,
      descricao,
      setor,
      video: video ? video : "",
      documento: documento ? documento : "",
      author,
    });

    return process;
  }
}
