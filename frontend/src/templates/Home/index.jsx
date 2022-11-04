import { useEffect } from "react";
import { MenuComponent } from "../../components/MenuComponent";

export const Home = () => {
  useEffect(() => {
    document.title = "Home | Navenet";
  });
  return <MenuComponent />;
};
