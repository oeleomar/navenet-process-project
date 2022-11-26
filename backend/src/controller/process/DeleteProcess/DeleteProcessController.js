import path from "path";
import { fileURLToPath } from "url";
import { AppError } from "../../../errors/AppError.js";
import Process from "../../../models/process/Process.js";
import { removeFiles } from "../../../utils/removeFiles.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class DeleteProcessController {
  async handle(req, res, id) {
    console.log(id);
    try {
      const data = await Process.findById(id);
      if (!data)
        return res.status(404).json({ msg: "Processo não encontrado" });

      const deleted = await Process.findByIdAndRemove({ _id: id });
      const video = data.video;
      const documento = data.documento;
      const documentosAntigos = data.documentosAntigos;

      if (video !== "") {
        removeFiles(
          path.resolve(
            __dirname,
            "..",
            "..",
            "..",
            "..",
            "public",
            "videos",
            video,
          ),
        );
      }
      if (documento !== "") {
        removeFiles(
          path.resolve(
            __dirname,
            "..",
            "..",
            "..",
            "..",
            "public",
            "docs",
            documento,
          ),
        );
      }

      if (documentosAntigos.length > 0) {
        documentosAntigos.forEach((val) => {
          removeFiles(
            path.resolve(
              __dirname,
              "..",
              "..",
              "..",
              "..",
              "public",
              "docs",
              val,
            ),
          );
        });
      }

      return res.status(200).json({ msg: "Apagado com sucesso" });
    } catch (e) {
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}
