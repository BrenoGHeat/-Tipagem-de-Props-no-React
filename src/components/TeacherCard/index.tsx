export const TeacherCard = ({name, job, teacherModule}) => {
    return(
        <li>
            <h3>{name}</h3>
            <p>{job} - {teacherModule}</p>
        </li>
    )
}