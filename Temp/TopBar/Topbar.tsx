import { Button, Link, Navbar, Text, useTheme } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React from 'react'

export const Topbar = () => {

  const router = useRouter();
  const { isDark } = useTheme();

  const isLinkActive = (path: string) => path === router.pathname;

  return (
    <Navbar isBordered={isDark} variant="sticky" disableShadow css={{ justifyContent: 'space-between' }} maxWidth='fluid'>
      <Navbar.Brand>
        <Text b color="inhenit" hideIn='xs'>
          Activity Companion
        </Text>
      </Navbar.Brand>
      <Navbar.Content activeColor='secondary' variant='highlight-rounded'>
        <Navbar.Link isActive={isLinkActive('/home')} href="#">Home</Navbar.Link>
        <Navbar.Link href="/activity" isActive={ isLinkActive('/activity') }>Activities</Navbar.Link>
        <Navbar.Link href='/subject' isActive={ isLinkActive('/subject') }>Subjects</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href='#'>Login</Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href='#' color='secondary'>
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}
