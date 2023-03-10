import { Container } from '@nextui-org/react'
import React from 'react'
import { Topbar } from '../TopBar/Topbar'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const Base = ({ children }: Props) => {
  return (
    <>
        <Topbar />
        <Container css={{ margin: '$20' }}>
            { children }
        </Container>
    </>
  )
}
