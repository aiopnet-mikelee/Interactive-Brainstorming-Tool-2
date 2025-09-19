import React from 'react';

interface MatrixCellProps {
  title: string;
  subtitle: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const MatrixCell: React.FC<MatrixCellProps> = ({
  title,
  subtitle,
  value,
  onChange,
  className = ''
}) => {
  return (
    <div className={`matrix-cell ${className}`}>
      <div className="cell-header">
        <h4>{title}</h4>
        <p className="cell-subtitle">{subtitle}</p>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add ideas here..."
        className="cell-input"
      />
    </div>
  );
};

export default MatrixCell;