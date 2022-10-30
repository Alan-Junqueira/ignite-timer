import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";
import { Icon } from "../Icons";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Icon icon="logo" />

      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
