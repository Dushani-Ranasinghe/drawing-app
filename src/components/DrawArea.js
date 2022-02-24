import React,{ useLayoutEffect , useState } from 'react';
import '../Styles/DrawArea.css'
import { Stage, Layer } from "react-konva";


function DrawArea() {
   
   
  return <div>
      <Stage
     width={window.innerWidth}
     height={window.innerHeight}
     onMouseDown={handleMouseDown}
     onMousemove={handleMouseMove}
     onMouseup={handleMouseUp}>
        
     
      </Stage>
      
  </div>;
}

export default DrawArea;
