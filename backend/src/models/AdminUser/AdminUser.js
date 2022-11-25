import mongoose from "mongoose";

const adminUser = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  usuario: { type: String, required: true },
  senha: { type: String, required: true },
});

export default mongoose.model("AdminUser", adminUser);
