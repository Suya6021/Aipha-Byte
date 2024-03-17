interface CircleMeterProps {
    size?: number;
    percentage: number;
    label: string;
  }
  
  const CircleMeter: React.FC<CircleMeterProps> = ({
    size = 100,
    percentage = 96,
    label = 'Match',
  }) => {
    const radius = size / 2;
    const strokeWidth = 6;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
  
    return (
      <svg width={size} height={size}>
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="#ddd"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="#000"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          x={radius}
          y={radius + strokeWidth / 2-10}
          dominantBaseline="central"
          textAnchor="middle"
          className="text-2xl"
        >
           {percentage}% 
         
        </text>
        <text
          x={radius}
          y={radius + strokeWidth / 2 + 18}
          dominantBaseline="central"
          textAnchor="middle"
          className=""
         >
            {label}
        </text>
      </svg>
    );
  };
  
  export default CircleMeter;
  