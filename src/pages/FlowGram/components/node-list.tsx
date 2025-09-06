import React from 'react';
import './node-list.less';
import { WorkflowDragService, useService } from '@flowgram.ai/free-layout-editor';

const nodekeys = ['http'];

export const NodeList: React.FC = () => {
  const startDragSerivce = useService<WorkflowDragService>(WorkflowDragService);
  return (
    <div>
      {nodekeys.map((nodeKey) => (
        <div
          key={nodeKey}
          className="node-card"
          onMouseDown={(e) =>
            startDragSerivce.startDragCard(nodeKey.toLowerCase(), e, {
              data: {
                title: `New ${nodeKey}`,
                content: 'xxxx',
              },
            })
          }
        >
          {nodeKey}
        </div>
      ))}
    </div>
  );
};