import { HeaderContainer } from './styled'
import { Timer, Scroll } from 'phosphor-react'
import { Icons } from '../Icons'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <Icons icon="logo" />
      </span>
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
