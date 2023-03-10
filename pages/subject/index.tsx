
import { fetchers } from '@/api/fetchers';
import { SubjectContainer } from '@/components/subject/SubjectContainer'
import { Base } from '@/Temp/Base/Base'
import { Subject } from '@/types/subject';
import React, { useEffect, useState } from 'react'


export default function SubjectIndex() {
  const [subjects, setSubjects] = useState([] as Subject[]);

  useEffect(() => {
    fetchers.subjectFetcher.getAll().then(setSubjects);
  }, []);
  return (
    <Base>
        <SubjectContainer subjects={subjects}/>
    </Base>
  )
}


