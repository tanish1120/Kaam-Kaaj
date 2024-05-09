import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Todo } from './pages/Todo'
import { Todos } from './pages/Todos'
import { Publish } from './pages/Publish'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/todo/:id" element={<Todo />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
