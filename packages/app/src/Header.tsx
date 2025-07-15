import React from 'react'

interface HeaderProps {
  message: string | null
}

const Header: React.FC<HeaderProps> = ({ message }) => <h1>{message}</h1>

export default Header 