import * as Styled from "./styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export type AdminProps = {
  title?: string;
};

export const Admin = ({ title }: AdminProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/admin/auth");
  }, [navigate]);

  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
