import { Button, Link, Navbar } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'
import { BaseLeftBar } from './BaseLeftBar'
import { MdList, MdBuild, MdArtTrack, MdDelete } from 'react-icons/md';

export const ActivityBar = () => {
    const { pathname } = useRouter();

    const getButtonActiveStyle = (path: string) => path !== pathname && {light: true} || { shadow: true };

  return (
    <BaseLeftBar>
        <div style={{
            padding: '25px 0 0 25px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        }}>
            <Button { ...getButtonActiveStyle('/activity') } color='secondary' as={Link} href='/activity' icon={<MdList />} css={{ justifyContent: 'start', padding: '0 0 0 40px' }}>
                All activities
            </Button>
            <Button { ...getButtonActiveStyle('/activity/create') } color='secondary' as={Link} href='/activity/create' icon={<MdBuild />} css={{ justifyContent: 'start', padding: '0 0 0 40px' }}>
                Create
            </Button>
            <Button { ...getButtonActiveStyle('/activity/edit') } color='secondary' as={Link} href='/activity/edit' icon={<MdArtTrack />} css={{ justifyContent: 'start', padding: '0 0 0 40px' }}>
                Edit
            </Button>
            <Button { ...getButtonActiveStyle('/activity/delete') } color='error' as={Link} href='/activity/delete' icon={<MdDelete />} css={{ justifyContent: 'start', padding: '0 0 0 40px' }}>
                Delete
            </Button>
        </div>
    </BaseLeftBar>
  )
}
