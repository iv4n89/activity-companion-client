import { Activity } from "@/types/activity";
import { Subject } from "@/types/subject";
import { createContext } from "react";

export interface SubjectActions {
  setAllSubject: (subject: Subject[]) => void;
  addSubject: (subject: Subject) => void;
  updateSubject: (id: number, subject: Subject) => Promise<Subject>;
  deleteSubject: (id: number) => Promise<void>;
  setCurrentSubject: (subject: Subject) => void;

  getAllSubjects: () => Subject[];
  getOneSubject: (id: number) => Subject;
  getCurrentSubject: () => Subject;
}

export interface ActivityActions {
    setAllActivities: (activity: Activity[]) => void;
    addActivity: (activity: Activity) => void;
    updateActivity: (id: number, activity: Activity) => Promise<Activity>;
    deleteActivity: (id: number) => Promise<void>;
    setCurrentActivity: (activity: Activity) => void;

    getAllActivities: () => Activity[];
    getOneActivity: (id: number) => Activity;
    getCurrentActivity: () => Activity;
}

interface ContextProps {
  subject: SubjectActions;

  activity: ActivityActions;
}

export const AppContext = createContext({} as ContextProps);
