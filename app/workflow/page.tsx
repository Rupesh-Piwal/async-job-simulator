"use client";
import { useState } from "react";
import CanvasPlaceholder from "../components/canvas-placeholder";
import Sidebar from "../components/Sidebar";
import TopToolbar from "../components/top-toolbar";

const Workflow = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  return (
    <div className="max-w-[90vw] mx-auto">
      <TopToolbar />
      <div className="flex flex-row justify-between items-center">
        <Sidebar selectedNodeId={selectedNodeId} />
        <CanvasPlaceholder setSelectedNodeId={setSelectedNodeId} />
      </div>
    </div>
  );
};

export default Workflow;
