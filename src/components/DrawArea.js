import React,{ useLayoutEffect , useState } from 'react';
import '../Styles/DrawArea.css'
import { Stage, Layer, Line, Text } from "react-konva";


function DrawArea() {
   
    const [lines, setLines] = React.useState([]);
  return <div>
      <Stage
     width={window.innerWidth}
     height={window.innerHeight}>
         <Layer>
          <Text text="Just start drawing" x={5} y={30} />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}
        </Layer>
      </Stage>
      
  </div>;
}

export default DrawArea;
