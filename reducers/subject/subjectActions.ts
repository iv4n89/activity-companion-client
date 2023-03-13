import { fetchers } from "@/api/fetchers";
import { Subject } from "@/types/subject";
import { Dispatch } from "react";
import { SubjectActionType, SubjectState } from "./subjectReducer";

export class SubjectActions implements SubjectActions {
  constructor(
    private readonly dispatch: Dispatch<SubjectActionType>,
    private readonly state: SubjectState
  ) {}

  public setAllSubject(subject: Subject[]): void {
    this.dispatch({ type: "Subject - SetAll", payload: { subject } });
  }

  public addSubject(subject: Subject): void {
    this.dispatch({ type: "Subject - Add", payload: { subject } });
  }

  public async updateSubject(id: number, subject: Subject): Promise<Subject> {
    const updatedSubject = await fetchers.subjectFetcher.updateOne(id, subject);
    this.dispatch({
      type: "Subject - Update",
      payload: { id, subject: updatedSubject },
    });
    return updatedSubject;
  }

  public async deleteSubject(id: number): Promise<void> {
    await fetchers.subjectFetcher.deleteOne(id);
    this.dispatch({ type: "Subject - Delete", payload: { id } });
  }

  public setCurrentSubject(subject: Subject): void {
    this.dispatch({
      type: "Subject - SetCurrentSubject",
      payload: { subject },
    });
  }

  public getAllSubjects(): Subject[] {
    return this.state.subjects;
  }

  public getOneSubject(id: number): Subject {
    return this.state.subjects.find(subject => subject.id == id)!;
  }

  public getCurrentSubject(): Subject {
    return this.state.currentSubject;
  }

  public getMethods() {
    return {
      setAllSubject: this.setAllSubject,
      addSubject: this.addSubject,
      updateSubject: this.updateSubject,
      deleteSubject: this.deleteSubject,
      setCurrentSubject: this.setCurrentSubject,
      getAllSubjects: this.getAllSubjects,
      getOneSubject: this.getOneSubject,
      getCurrentSubject: this.getCurrentSubject,
    };
  }
}
