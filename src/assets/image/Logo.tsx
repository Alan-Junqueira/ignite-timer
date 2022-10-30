import { SVGAttributes } from 'react'

// eslint-disable-next-line no-undef
interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export const Logo = (props: LogoProps) => {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.5}
        d="M39.99.27l-9.787 36.563a.219.219 0 01-.364.1l-6.553-6.556 4.91-18.323a.211.211 0 00-.265-.265L9.618 16.7 3.1 10.18a.22.22 0 01.1-.366L39.725.005c.166-.034.315.116.265.265z"
        fill="#00B37E"
      />
      <path
        opacity={0.5}
        d="M23.286 30.377l-2.521 9.46a.219.219 0 01-.365.1L.063 19.605a.22.22 0 01.1-.365l9.455-2.54 13.668 13.677z"
        fill="#00B37E"
      />
      <path
        d="M28.196 12.054l-4.91 18.323L9.617 16.7l18.313-4.913c.166-.05.315.1.266.266z"
        fill="#00B37E"
      />
    </svg>
  )
}