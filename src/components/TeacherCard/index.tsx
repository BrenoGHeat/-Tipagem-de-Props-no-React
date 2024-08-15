import { ITeacher } from "../../App"

interface ITeacherCard{
    teacherlist : ITeacher;
}

export const TeacherCard = ({name, job, teacherModule} : ITeacher ) => {
    return(
        <li>
            <h3>{name}</h3>
            <p>{job} - {teacherModule}</p>
        </li>
    )
}