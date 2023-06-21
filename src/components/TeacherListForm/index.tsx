import { FormEvent, useState } from "react"
import { uuid } from "uuidv4";

export const TeacherListForm = ({setTeacherList}) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [courseModule, setCourseModule] = useState("");

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTeacher = { id: uuid(), name, job, module: courseModule };
        setTeacherList();
    }

    return(
        <form onSubmit={submit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
            <input type="text" value={courseModule} onChange={(e) => setCourseModule(e.target.value)} />
            <button>Cadastrar funcionário</button>
        </form>
    )
}