import mongoose from "mongoose";

const process = new mongoose.Schema({
  ativo: Boolean,
  setor: String,
  tipo: String,
  titulo: String,
  descricao: [{}],
  documento: String,
  documentosAntigos: [String],
  video: String,
  author: String,
  createdAt: String,
  updatedAt: String,
});

export default mongoose.model("Process", process);
