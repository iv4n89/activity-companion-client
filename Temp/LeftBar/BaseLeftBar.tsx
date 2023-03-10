import React from 'react'

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const BaseLeftBar = ({ children }: Props) => {
  return (
    <div style={{
        float: 'left',
        width: '250px',
        height: '100vh',
        position: 'fixed',
        left: 0,
        overflowY: 'hidden'
    }}>
        { children }
    </div>
  )
}
