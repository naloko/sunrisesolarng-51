import React from 'react';

interface ModelChipProps {
  label: string;
}

const ModelChip: React.FC<ModelChipProps> = ({ label }) => {
  return (
    <span className="badge mr-2 mb-2 inline-block">{label}</span>
  );
};

export default ModelChip;
