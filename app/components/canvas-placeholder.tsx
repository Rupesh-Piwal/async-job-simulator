"use client";
import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  NodeChange,
  EdgeChange,
  Node,
  Edge,
  Connection,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { initialEdges, initialNodes } from "../node";

interface CanvasPlaceholderProps {
  setSelectedNodeId: (id: string | null) => void;
}

const CanvasPlaceholder = ({ setSelectedNodeId }: CanvasPlaceholderProps) => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );

  const handleNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    console.log("Clicked node:", node);
    console.log("Node ID:", node.id);
    console.log("Node data:", node.data);
    console.log("Node position:", node.position);

    setSelectedNodeId(node.id);
  }, []);

  return (
    <div
      style={{
        height: "600px",
        width: "960px",
      }}
      className="border-2 border-black rounded"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        deleteKeyCode="Backspace"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default CanvasPlaceholder;
