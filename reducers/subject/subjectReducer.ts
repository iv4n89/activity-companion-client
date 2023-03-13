import { Subject } from "@/types/subject";


export type SubjectActionType =
    | { type: 'Subject - Add', payload: { subject: Subject } }
    | { type: 'Subject - Update', payload: { id: number, subject: Subject } }
    | { type: 'Subject - SetAll', payload: { subject: Subject[] } }
    | { type: 'Subject - Delete', payload: { id: number } }
    | { type: 'Subject - SetCurrentSubject', payload: { subject: Subject } }

export interface SubjectState {
    subjects: Subject[];
    currentSubject: Subject;
}

export const subjectInitialState: SubjectState = {
    subjects: [] as Subject[],
    currentSubject: {} as Subject
};

export const subjectReducer = ( state: SubjectState, action: SubjectActionType ): SubjectState => {

    switch(action.type) {

        case 'Subject - SetAll':
            return {
                ...state,
                subjects: action.payload.subject
            }
        
        case 'Subject - Add':
            return {
                ...state,
                subjects: { ...state.subjects, ...action.payload.subject }
            }

        case 'Subject - Update':
            return {
                ...state,
                subjects: state.subjects.map(subject => subject.id === action.payload.subject.id ? action.payload.subject : subject)
            }

        case 'Subject - Delete':
            return {
                ...state,
                subjects: state.subjects.filter(subject => subject.id !== action.payload.id)
            }

        case 'Subject - SetCurrentSubject':
            return {
                ...state,
                currentSubject: action.payload.subject
            }
        
        default:
            return state;
    }

}