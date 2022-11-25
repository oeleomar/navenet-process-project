import { AppError } from "../../../errors/AppError.js";
import AdminUser from "../../../models/AdminUser/AdminUser.js";
import bcrypt from "bcrypt";

export class CreateAdminUserController {
  async handle(req, res) {
    const { nome, email, usuario, senha, confirmaSenha } = req.body;

    if (!nome) return res.status(422).json({ msg: "O nome não foi enviado" });
    if (!email) return res.status(422).json({ msg: "O email não foi enviado" });
    if (!usuario)
      return res.status(422).json({ msg: "O usuario não foi enviado" });
    if (!senha || !confirmaSenha)
      return res.status(422).json({ msg: "A senha não foi enviada" });
    if (senha.length < 8 || confirmaSenha < 8)
      return res
        .status(422)
        .json({ msg: "A senha deve ter mais que 8 caracteres" });
    if (senha !== confirmaSenha)
      return res.status(422).json({ msg: "A senhas não conferem" });

    const userExist = await AdminUser.findOne({ email: email });

    if (userExist)
      return res.status(422).json({ msg: "Usuário já cadastrado" });

    //Create Password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(senha, salt);

    //Create User
    try {
      const adminUser = await AdminUser.create({
        nome,
        email,
        usuario,
        senha: passwordHash,
      });
      return res.status(201).json({ msg: "Usuário criado com sucesso" });
    } catch (err) {
      return res.status(500).json({ msg: "Internal server Error" });
    }
  }
}
