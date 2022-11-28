import path from "path";
import { fileURLToPath } from "url";
import { AppError } from "../../../errors/AppError.js";
import Process from "../../../models/process/Process.js";
import { removeFiles } from "../../../utils/removeFiles.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class UpdateProcessController {
  async handle(req, res, id) {
    //Puxar processo antigo
    const process = await Process.findById(id);
    if (!process)
      return res.status(404).json({ msg: "Processo não encontrado" });

    //Verificar dados
    const { ativo, setor, tipo, titulo, descricao } = req.body;

    if (!setor || !tipo || !titulo) {
      return res.status(422).json({ msg: "Informações não enviadas" });
    }

    //Montar documentos antigos
    if (Object.keys(req.files).length > 0) {
      const documentosAntigos = [
        ...process.documentosAntigos,
        process.documento,
      ];
      const documento = req.files.file ? req.files.file[0].filename : null;
      const video = req.files.video ? req.files.video[0].filename : null;

      if (video) {
        const { video: videoAntigo } = process;
        if (videoAntigo)
          removeFiles(
            path.resolve(
              __dirname,
              "..",
              "..",
              "..",
              "public",
              "videos",
              videoAntigo,
            ),
          );
      }

      try {
        if (documento && video) {
          const documentosAntigos = [
            ...process.documentosAntigos,
            process.documento,
          ];
          const newProcess = await Process.findByIdAndUpdate(
            { _id: id },
            {
              ativo,
              setor,
              tipo,
              titulo,
              descricao,
              video,
              documento,
              documentosAntigos,
            },
          );
          return res.status(200).json({ msg: "Atualizado com sucesso" });
        } else if (documento && !video) {
          const documentosAntigos = [
            ...process.documentosAntigos,
            process.documento,
          ];

          const newProcess = await Process.findByIdAndUpdate(
            { _id: id },
            {
              ativo,
              setor,
              tipo,
              titulo,
              descricao,
              documento,
              documentosAntigos,
            },
          );
          return res.status(200).json({ msg: "Atualizado com sucesso" });
        } else if (video && !documento) {
          const newProcess = await Process.findByIdAndUpdate(
            { _id: id },
            {
              ativo,
              setor,
              tipo,
              titulo,
              descricao,
              video,
            },
          );
          return res.status(200).json({ msg: "Atualizado com sucesso" });
        }
      } catch (e) {
        return res.status(500).json({ msg: "Internal server error" });
      }
    }

    try {
      const newProcess = await Process.findByIdAndUpdate(
        { _id: id },
        {
          ativo,
          setor,
          tipo,
          titulo,
          descricao,
        },
      );
      return res.status(200).json({ msg: "Atualizado com sucesso" });
    } catch (error) {
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}
