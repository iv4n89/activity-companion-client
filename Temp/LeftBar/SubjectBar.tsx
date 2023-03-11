import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { MdList, MdBuild, MdArtTrack, MdDelete } from 'react-icons/md';
import { BaseLeftBar } from './BaseLeftBar'

export const SubjectBar = () => {
  const { pathname } = useRouter();

    const getButtonActiveStyle = (path: string) => path !== pathname && {light: true} || { shadow: true };
    const baseUrl = '/subject';
    const createUrl = '/create';
    const editUrl = '/edit';
    const deleteUrl = '/delete';

  return (
    <BaseLeftBar>
        <div style={{
            padding: '25px 0 0 25px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        }}>
            <Button { ...getButtonActiveStyle(baseUrl) } color='secondary' as={Link} href={ baseUrl } icon={<MdList />} css={{ justifyContent: 'start', padding: '0 0 0 40px' }}>
                All subjects
            </Button>
            <Button { ...getButtonActiveStyle(`${ baseUrl }${ createUrl }`) } color='secondary' as={Link} href={ `${ baseUrl }${ createUrl }` } icon={<MdBuild />} css={{ justifyContent: 'start', padding: '0 0 0 40px' }}>
                Create
            </Button>
            <Button { ...getButtonActiveStyle(`${ baseUrl }${ editUrl }`) } color='secondary' as={Link} href={ `${ baseUrl }${ editUrl }` } icon={<MdArtTrack />} css={{ justifyContent: 'start', padding: '0 0 0 40px' }}>
                Edit
            </Button>
            <Button { ...getButtonActiveStyle(`${ baseUrl }${ deleteUrl }`) } color='error' as={Link} href={ `${ baseUrl }${ deleteUrl }` } icon={<MdDelete />} css={{ justifyContent: 'start', padding: '0 0 0 40px' }}>
                Delete
            </Button>
        </div>
    </BaseLeftBar>
  )
}
