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

         {/* test rectangle on canvas */}
         <Rect
          x={100}
          y={40}
          width={100}
          height={70}
          fill="yellow"
          stroke="black"
         />

        {/* test circle on canvas */}
        <Circle
        x={350}
        y={70}
        radius={50}
        fill="red"
        />

        {/* create a shape using line in konva */}
        <Line
        x={500}
        y={40}
        points={[0, 0, 100, 0, 100, 100]}
        tension={0.08}
        closed
        stroke="pink"
        fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 50 }}
          fillLinearGradientColorStops={[0, 'white', 1, 'purple']}
        />
       </Layer>
      </Stage>

         
  

    </div>
    </div>
  );
}

export default App;
