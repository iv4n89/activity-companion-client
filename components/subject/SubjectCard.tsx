import { getSubjectImage } from '@/helpers/subject'
import { Subject } from '@/types/subject'
import { Card, Row, Text } from '@nextui-org/react'
import React from 'react'

interface Props {
    subject: Subject
}

export const SubjectCard = ({ subject }: Props) => {
  return (
    <Card isPressable isHoverable css={{ width: 400 }}>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src={ getSubjectImage(subject)! }
                objectFit='cover'
                width={ 400 }
                height={ 300 }
                alt={ subject.name }
            />
            <Card.Footer css={{ justifyItems: 'flex-start', bgBlur: '#ffffff66', position: 'absolute', bottom: 0, height: '70px' }} isBlurred>
                <Row wrap='wrap' justify='center'>
                    <Text b css={{ textAlign: 'center', textTransform: 'capitalize', textShadow: '1px -1px 1px black, -1px 1px 1px black, 1px 1px 1px black, -1px -1px 1px black' }} size='x-large' color='white'>
                        { subject.name }
                    </Text>
                </Row>
            </Card.Footer>
        </Card.Body>
    </Card>
  )
}
