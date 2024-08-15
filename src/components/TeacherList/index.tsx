import { ITeacher } from "../../App";
import { TeacherCard } from "../TeacherCard";


interface ITeacherListProps{
    teacherList: ITeacher[];
}


export const TeacherList = ({teacherList} : ITeacherListProps) => {
    return(
        <ul>
            {teacherList.map(teacher => {
                return <TeacherCard key={teacher.id} name={teacher.name} job={teacher.job} teacherModule={teacher.module} />
            })}
        </ul>
    )
}