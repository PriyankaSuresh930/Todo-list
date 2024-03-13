import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginModule from './components/pageComponents/LoginModule';
import ProtectedRoute from './components/pageComponents/ProtectedRoute';
import Home from './components/pageComponents/Home';
import Master from './components/pageComponents/Master';
import '../src/styles/app.scss';
import AddTask from './components/layerComponents/AddTask';
import UpdateTask from './components/layerComponents/UpdateTask';
import TodoList from './components/pageComponents/TodoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginModule />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Master />}>
            <Route path='/' element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/todo-list" element={<TodoList />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/view-task/:id" element={<TodoList />} />
            <Route path="/update-task/:id" element={<UpdateTask />} />
          </Route>
        </Route>
      </Routes>
  </Router>
  );
}

export default App;
