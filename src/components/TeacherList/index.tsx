import { TeacherCard } from "../TeacherCard"

export const TeacherList = ({teacherList}) => {
    return(
        <ul>
            {teacherList.map(teacher => {
                <TeacherCard key={teacher.id} name={teacher.name} job={teacher.job}  />
            })}
        </ul>
    )
}