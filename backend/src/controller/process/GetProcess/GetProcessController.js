import { AppError } from "../../../errors/AppError.js";
import Process from "../../../models/process/Process.js";

export class GetProcessController {
  async handle(setor) {
    if (!setor) return new AppError("Dados não encontrados", 404);

    const data = await Process.find({ setor })
      .collation({ locale: "en", strength: 2 })
      .sort({ titulo: 1 });
    if (data.length === 0) return data;

    console.log(data);

    const data2 = data.map((val) => {
      return {
        titulo: val.titulo,
        id: val._id,
        setor: val.setor,
        ativo: val.ativo,
        createdAt: val.createdAt,
        updatedAt: val.updatedAt,
      };
    });

    return data2;
  }
}
