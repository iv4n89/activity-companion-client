import { ActivityActions } from "@/reducers/activity/activityActions";
import { activityReducer, ActivityStateInitialState } from "@/reducers/activity/activityReducer";
import { SubjectActions } from "@/reducers/subject/subjectActions";
import { subjectInitialState, subjectReducer } from "@/reducers/subject/subjectReducer";
import { FC, ReactNode, useReducer } from "react";
import { AppContext } from "./Context";

interface Props {
    children: JSX.Element | JSX.Element[];
};

export const AppProvider: FC<Props> = ({ children }) => {
    const [subjectState, subjectDispatch] = useReducer(subjectReducer, subjectInitialState);
    const [activityState, activityDispatch] = useReducer(activityReducer, ActivityStateInitialState);

    

    return (
        <AppContext.Provider value={({
            subject: new SubjectActions(subjectDispatch, subjectState).getMethods(),
            activity: new ActivityActions(activityDispatch, activityState).getMethods(),
        })}>
            { children }
        </AppContext.Provider>
    )
}