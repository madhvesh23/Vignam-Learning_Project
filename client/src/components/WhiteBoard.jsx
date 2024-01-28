import React, { useState, useRef } from "react";
import { Stage, Layer, Line, Text } from "react-konva";

function WhiteBoard() {
  const [tool, setTool] = useState("pen");
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const [stageWidth, setStageWidth] = useState(650);
  const [stageHeight, setStageHeight] = useState(440);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines([...lines]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleWidthChange = (e) => {
    setStageWidth(parseInt(e.target.value));
  };

  const handleHeightChange = (e) => {
    setStageHeight(parseInt(e.target.value));
  };

  return (
    <div className="whiteboard">
      {/* <Stage
        width={stageWidth}
        height={stageHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          <Text  x={5} y={30} />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              
            />
          ))}
        </Layer>
      </Stage> */}
      <h1>White Board</h1>
    </div>
  );
}

export default WhiteBoard;