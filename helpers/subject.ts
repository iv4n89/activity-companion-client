import { Subject } from "@/types/subject"
import { plainImageColors, randomSquareColors } from "@/util/noImageHolders"


export const getSubjectImage = (subject: Subject): string => subject?.image ?? randomSquareColors.at(0)!;