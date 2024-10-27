import React, { type ReactNode } from 'react'

type headerProps = {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode;
}
function Header({image,children}: headerProps) {
  return (
    <header>
        <img src={image.src} alt={image.alt} width={100} height={100} />
        {children}
    </header>
  )
}

export default Header