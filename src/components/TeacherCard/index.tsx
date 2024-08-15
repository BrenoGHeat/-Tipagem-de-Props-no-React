

interface ITeacherCard{
    name: string;
    job: string;
    teacherModule: string;
}

export const TeacherCard = ({name, job, teacherModule} : ITeacherCard ) => {
    return(
        <li>
            <h3>{name}</h3>
            <p>{job} - {teacherModule}</p>
        </li>
    )
}