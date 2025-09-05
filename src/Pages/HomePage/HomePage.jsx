import { addEdge, applyEdgeChanges, applyNodeChanges, Background, ReactFlow } from '@xyflow/react';
import React, { useCallback, useState } from 'react'
const initialNodes = [
  
];
const initialEdges = [];
export default function HomePage() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  console.log(edges)
  console.log(nodes)
  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );
  return (
    <div className="w-full flex-1  ">

<ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition={"hidden"} // هذا يخفي توقيع React Flow

      >
        <Background/>
      </ReactFlow>
    </div>
  )
}
