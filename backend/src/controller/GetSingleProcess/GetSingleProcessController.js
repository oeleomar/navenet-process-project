import { AppError } from "../../errors/AppError.js";
import Process from "../../models/process/Process.js";

export class GetSingleProcessController {
  async handle(req, res) {
    const { id } = req.params;
    if (!id)
      return res.status(404).json(new AppError("Processo não encontrado"));
    if (id.length < 24)
      return res.status(400).json(new AppError("ID inválido"));

    const data = await Process.findById(id);

    return res.json(data);
  }
}
