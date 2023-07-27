import './App.css';
import Header from './components/Header';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="centered-container">
      <div className="container">
        <div className="title"> TO DO LIST</div>
        <Header />
        <TasksList />
      </div>
    </div>
  );
}

export default App;
