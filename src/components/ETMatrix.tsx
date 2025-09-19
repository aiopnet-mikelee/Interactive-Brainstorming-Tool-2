import React, { useState } from 'react';
import MatrixCell from './MatrixCell';

interface ETMatrixProps {
  // Add props as needed
}

type MatrixData = {
  [key: string]: string;
};

const ETMatrix: React.FC<ETMatrixProps> = () => {
  const [matrixData, setMatrixData] = useState<MatrixData>({
    'high-easy': '',
    'high-hard': '',
    'low-easy': '',
    'low-hard': ''
  });

  const updateCell = (key: string, value: string) => {
    setMatrixData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="et-matrix">
      <h2>Effort vs. Impact Matrix</h2>
      <div className="matrix-container">
        <div className="matrix-labels">
          <div className="y-axis-label">Impact</div>
          <div className="x-axis-label">Effort</div>
        </div>
        
        <div className="matrix-grid">
          <div className="matrix-row">
            <div className="axis-label">High</div>
            <MatrixCell
              title="Quick Wins"
              subtitle="High Impact, Low Effort"
              value={matrixData['high-easy']}
              onChange={(value) => updateCell('high-easy', value)}
              className="high-impact low-effort"
            />
            <MatrixCell
              title="Major Projects"
              subtitle="High Impact, High Effort"
              value={matrixData['high-hard']}
              onChange={(value) => updateCell('high-hard', value)}
              className="high-impact high-effort"
            />
          </div>
          
          <div className="matrix-row">
            <div className="axis-label">Low</div>
            <MatrixCell
              title="Fill-ins"
              subtitle="Low Impact, Low Effort"
              value={matrixData['low-easy']}
              onChange={(value) => updateCell('low-easy', value)}
              className="low-impact low-effort"
            />
            <MatrixCell
              title="Thankless Tasks"
              subtitle="Low Impact, High Effort"
              value={matrixData['low-hard']}
              onChange={(value) => updateCell('low-hard', value)}
              className="low-impact high-effort"
            />
          </div>
          
          <div className="matrix-row axis-row">
            <div className="axis-label"></div>
            <div className="axis-label">Low</div>
            <div className="axis-label">High</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ETMatrix;