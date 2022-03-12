import './App.css';
import "./Styles/Canvas.css"
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

function App() {
  return (
    <div className="App">
    <h1>Drawing app </h1>

    {/* Create a Konva canvas */}
    <div className='canvas-container'>
      {/* set canvas width and height */}
      <Stage width={window.innerWidth} height={window.innerHeight}>

       {/* create a layer on stage */}
       <Layer>
         
       </Layer>
      </Stage>

         
  

    </div>
    </div>
  );
}

export default App;
