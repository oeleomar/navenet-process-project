import { TitleComponent } from "../TitleComponent";
import { User } from "@styled-icons/boxicons-regular/User";
import { LockAlt } from "@styled-icons/boxicons-regular/LockAlt";
import * as Styled from "./styles";
import config from "../../config";
import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type LoginProps = {
  admin?: boolean;
};

export const Login = ({ admin }: LoginProps) => {
  const location = useLocation();
  const locate = location.pathname.split("/")[1];
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    if (user.length < 7 || password.length < 7) {
      console.log("entrei");
      setErrorMessage("Usuário e senha deve conter 8 dígitos");
      console.log(errorMessage === "");
    }
    if (errorMessage === "") setState(true);
  };

  useEffect(() => {
    if (state && locate === "admin") {
      navigate("/admin");
    }
  }, [state, navigate, locate]);

  return (
    <>
      <Styled.Wrapper>
        {admin ? (
          <TitleComponent title="Login Administrador" />
        ) : (
          <TitleComponent title="Login" />
        )}
        <Styled.Container>
          {errorMessage ? (
            <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
          ) : (
            ""
          )}
          <form action="" onSubmit={handleSubmit} autoComplete="off">
            <Styled.Label htmlFor="user">Usuário</Styled.Label>
            <div>
              <User size={16} color={"#7B7B7B"} />
              <Styled.Input
                type="text"
                id="user"
                name="user"
                placeholder="Digite seu usuário"
                required
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
              />
            </div>
            <Styled.Label htmlFor="password">Senha</Styled.Label>
            <div>
              <LockAlt size={16} color={"#7B7B7B"} />
              <Styled.Input
                autoComplete="off"
                type="password"
                placeholder="Digite sua senha"
                id="password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <Styled.Button type="submit">Login</Styled.Button>
          </form>
        </Styled.Container>
      </Styled.Wrapper>
      <Styled.BackgroundLogoOne
        src={`${config.url}${config.slugImages}background-logo.svg`}
      />
      <Styled.BackgroundLogoTwo
        src={`${config.url}${config.slugImages}background-logo-2.svg`}
      />
    </>
  );
};
