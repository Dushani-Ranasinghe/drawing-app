// import React,{useState} from 'react'
// import Pencil from "../icons/pencil.png"
// import ArrowIcon from "../icons/arrow.png"
// import CircleIcon from "../icons/circle.png"
// import EraserIcon from "../icons/eraser.png"
// import RectangleIcon  from "../icons/rectangle.png"
// import TextIcon from "../icons/text.png"
// import "../Styles/Canvas.css";

// function Toolbar() {
 
//   return (
//     <div> 
//          <button className="toolbar-btn"
//           onClick={e => {
//             this.setState({ newDrawableType: "ArrowDrawable" });
//           }}
//         >
//           <img src={ArrowIcon} width={20} alt="pencil" className="toolbar-icon-img"/>
//           Arrow
//         </button>
//         <button className="toolbar-btn"
//           onClick={e => {
//             this.setState({ newDrawableType: "CircleDrawable" });
//           }}
//         >
//             <img src={CircleIcon} width={20} alt="pencil" className="toolbar-icon-img"/>
//           Circle
//         </button>
//         <button className="toolbar-btn"
//           onClick={e => {
//             this.setState({ newDrawableType: "FreePathDrawable" });
//           }}
//         >
//             <img src={Pencil} width={20} alt="pencil" className="toolbar-icon-img"/>
//           Pencil
//         </button>
//         <button className="toolbar-btn"
//           onClick={e => {
//             this.setState({ newDrawableType: "Eraser" });
//           }}
//         >
//             <img src={EraserIcon} width={20} alt="pencil" className="toolbar-icon-img"/>
//           Eraser
//         </button>
//            {/* ----------rectangle -------- */}
//         <button className="toolbar-btn"
//           onClick={e => {
//             this.setState({ newDrawableType: "RectangleDrawable" });
//           }}
//         >
//             <img src={RectangleIcon} width={20} alt="rectangle" className="toolbar-icon-img"/>
//           Rectangle
//         </button>

//         <button className="toolbar-btn"
//           onClick={e => {
//             this.setState({ newDrawableType: "RectangleDrawable" });
//           }}
//         >
//             <img src={TextIcon} width={20} alt="text" className="toolbar-icon-img"/>
//           Rectangle
//         </button>
//   </div>
//   )
// }

// export default Toolbar