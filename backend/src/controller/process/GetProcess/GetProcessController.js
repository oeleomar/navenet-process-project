import { AppError } from "../../../errors/AppError.js";
import Process from "../../../models/process/Process.js";

export class GetProcessController {
  async handle(setor) {
    if (!setor) return new AppError("Dados não encontrados", 404);

    const data = await Process.find({ setor });
    if (data.length === 0) return data;

    const data2 = data.map((val) => {
      return {
        titulo: val.titulo,
        id: val._id,
        setor: val.setor,
        ativo: val.ativo,
      };
    });

    return data2;
  }
}
