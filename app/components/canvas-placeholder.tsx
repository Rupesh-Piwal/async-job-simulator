"use client";
import { Background, Controls, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { initialNodes } from "../node";

const CanvasPlaceholder = () => {
  return (
    <div
      style={{
        height: "600px",
        width: "960px",
      }}
      className="border-2 border-black rounded"
    >
      <ReactFlow nodes={initialNodes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default CanvasPlaceholder;
