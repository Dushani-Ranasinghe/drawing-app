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
      <Stage width={window.innerWidth} height={window.innerHeight} className="canvas-stage">

       {/* create a layer on stage */}
       <Layer>
         {/* test text on canvas */}
         <Text 
          text='This is the text on the canvas'
          fontSize={20}
         />

         <Rect
          x={100}
          y={40}
          width={100}
          height={70}
          fill="yellow"
          stroke="black"
         />
       </Layer>
      </Stage>

         
  

    </div>
    </div>
  );
}

export default App;
