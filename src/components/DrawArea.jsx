import React,{ useLayoutEffect , useState } from 'react';
import '../Styles/DrawArea.css'

function DrawArea() {
    useLayoutEffect(()=>{
        //retrive node in DOM which reprecent <canvas> element using element id
        const canvas = document.getElementById("canvas");
        //access to drawing context for 2D graphics
        const ctx = canvas.getContext("2d");

        
    });
  return <div>
      
      <canvas id="canvas" width={window.innerWidth} height={window.innerHeight}>
      
      </canvas>
  </div>;
}

export default DrawArea;
