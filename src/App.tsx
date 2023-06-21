import { useState } from "react"
import { TeacherList } from "./components/TeacherList"
import { TeacherListForm } from "./components/TeacherListForm"

function App() {
  const [teacherList, setTeacherList] = useState([
    {
      id: "75442486-0878-440c-9db1-a7006c25a39f",
      name: "Alex",
      job: "Instrutor",
      module: "M3"
    },
    {
      id: "cbab5a0e-102a-11ee-be56-0242ac120002",
      name: "Gabriel",
      job: "Instrutor",
      module: "M3"
    },
    {
      id: "d1284fa0-102a-11ee-be56-0242ac120002",
      name: "Raphael",
      job: "Instrutor",
      module: "M3"
    }
  ])
  return (
    <div className="App">
      <TeacherListForm setTeacherList={setTeacherList} />
      <TeacherList teacherList={teacherList} />
    </div>
  )
}

export default App
