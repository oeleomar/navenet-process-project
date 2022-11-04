import { Page404 } from "../Page404";

export const ShowProcess = ({ setor }) => {
  if (!setor) {
    return <Page404 />;
  }
};
