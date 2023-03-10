import { getSubjectImage } from '@/helpers/subject'
import { Subject } from '@/types/subject'
import { Card, Row, Text } from '@nextui-org/react'
import React from 'react'

interface Props {
    subject: Subject
}

export const SubjectCard = ({ subject }: Props) => {
  return (
    <Card isPressable isHoverable>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src={ getSubjectImage(subject)! }
                objectFit='cover'
                width='100%'
                height={ 300 }
                alt={ subject.name }
                css={{ minWidth: '300px' }}
            />
            <Card.Footer css={{ justifyItems: 'flex-start' }}>
                <Row wrap='wrap' justify='center'>
                    <Text b css={{ textAlign: 'center', textTransform: 'capitalize' }}>
                        { subject.name }
                    </Text>
                </Row>
            </Card.Footer>
        </Card.Body>
    </Card>
  )
}
