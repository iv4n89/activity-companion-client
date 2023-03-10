import { Navbar, Text, useTheme } from '@nextui-org/react'
import React from 'react'

export const Topbar = () => {

  const { isDark } = useTheme();

  return (
    <Navbar isBordered={isDark} variant="sticky">
      <Navbar.Brand>
        <Text b color="inhenit" hideIn='xs'>
          Activity Companion
        </Text>
      </Navbar.Brand>
      <Navbar.Content activeColor='secondary' variant='highlight-rounded'>
        <Navbar.Link href="#">Home</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  )
}
