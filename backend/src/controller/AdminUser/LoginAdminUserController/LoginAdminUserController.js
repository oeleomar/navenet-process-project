import { AppError } from "../../../errors/AppError.js";
import AdminUser from "../../../models/AdminUser/AdminUser.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginAdminUserController {
  async handle(req, res) {
    const { usuario, senha } = req.body;

    if (!usuario)
      return res.status(422).json({ msg: "O usuario não foi enviado" });
    if (!senha) return res.status(422).json({ msg: "A senha não foi enviada" });
    if (senha.length < 8)
      return res
        .status(422)
        .json({ msg: "A senha deve ter mais que 8 caracteres" });

    //Check user Exist
    const user = await AdminUser.findOne({ usuario: usuario });
    if (!user) return res.status(404).json({ msg: "O usuario não encontrado" });

    const checkPassword = await bcrypt.compare(senha, user.senha);

    if (!checkPassword)
      return res.status(403).json({ msg: "Usuário ou senha inválidos" });

    try {
      const secret = process.env.JWT_SECRET;
      const token = jwt.sign({ usuario: user.nome }, secret, {
        expiresIn: 60 * 60 * 24,
      });

      res
        .status(200)
        .json({ msg: "Autenticação realizada com sucesso", token });
    } catch (err) {
      return res.status(500).json({ msg: "Internal server Error" });
    }
  }
}
