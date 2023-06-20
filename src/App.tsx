import { useState } from "react"
import { TeacherList } from "./components/TeacherList"

function App() {
  const [teacherList, setTeacherList] = useState([
    {
      id: 0,
      name: "Alex",
      job: "Instrutor",
      module: "M3"
    },
    {
      id: 1,
      name: "Gabriel",
      job: "Instrutor",
      module: "M3"
    },
    {
      id: 2,
      name: "Raphael",
      job: "Instrutor",
      module: "M3"
    }
  ])
  return (
    <div className="App">
      <TeacherList teacherList={teacherList} />
    </div>
  )
}

export default App
