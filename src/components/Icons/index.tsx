import { Logo } from '../../assets/images/Logo'

type IconsProps = {
  icon: string
  color?: string
}

export const Icons = ({ icon, color }: IconsProps) => {
  return <>{icon === 'logo' && <Logo />}</>
}
