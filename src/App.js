import './App.css';
import ToolBar from './components/ToolBar.jsx'
import DrawArea from './components/DrawArea.jsx'

function App() {
  return (
    <div className="App">
    <h1>Drawing app </h1>
    <ToolBar/>
    <DrawArea/>
    </div>
  );
}

export default App;
