import React from 'react'
import { Logo } from '../../assets/image/Logo'



type IconProps ={
    icon: string
    color?: string
}


export const Icon = ({icon, color}: IconProps) => {
  return (
    <>{icon === 'logo' && <Logo/>}</>
  )
}
