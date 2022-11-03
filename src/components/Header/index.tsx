import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";
import { Icon } from "../Icons";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Icon icon="logo" />

      <nav>
        <NavLink to="/" title="Timer" end>
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
