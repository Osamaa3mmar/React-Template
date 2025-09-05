import { addEdge, applyEdgeChanges, applyNodeChanges, Background, ReactFlow } from '@xyflow/react';
import React, { useCallback, useState } from 'react'
import SimpleNode from '../../Components/BoardNodes/SimpleNode';
const initialNodes = [
  {
    id: 'node-1',
    type: 'simple',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  }, {
    id: 'node-2',
    type: 'simple',
    position: { x: 110, y: 0 },
    data: { value: 123 },
  },
];
const initialEdges = [];
export default function HomePage() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const nodeTypes={
    simple:SimpleNode
  }
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
        nodeTypes={nodeTypes}
        fitView
        attributionPosition={"hidden"} // هذا يخفي توقيع React Flow

      >
        <Background/>
      </ReactFlow>
    </div>
  )
}
