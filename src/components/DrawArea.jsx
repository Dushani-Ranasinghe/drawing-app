import React,{ useLayoutEffect , useState } from 'react';
import '../Styles/DrawArea.css'
import rough from 'roughjs/bundled/rough.esm';

const generator=rough.generator();

function DrawArea() {
    
    useLayoutEffect(()=>{
        //retrive node in DOM which reprecent <canvas> element using element id
        const canvas = document.getElementById("canvas");
        //access to drawing context for 2D graphics
        const ctx = canvas.getContext("2d");

        const rc = rough.canvas(document.getElementById('canvas'));
        const rect = generator.rectangle(10, 10, 200, 200);
        const line = generator.line(10, 10, 210, 210); 
        rc.draw(rect);
        rc.draw(line);


        
    });
   
  return <div>
      
      <canvas id="canvas" width={window.innerWidth} height={window.innerHeight}>  
      </canvas>
  </div>;
}

export default DrawArea;
