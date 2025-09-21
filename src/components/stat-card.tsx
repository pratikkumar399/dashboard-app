// A simple icon component for the trend arrow
const TrendIcon = ({ className }: { className: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17L17 7 M12 7h5v5" />
    </svg>
  );
  
  
  export const StatCard = ({ title, value, change, light = false, onClick, className }: { title: string, value: string, change: string, light?: boolean, onClick?: () => void, className?: string }) => {
    const bgColor = light ? 'bg-[#E3F5FF]' : 'bg-[#27272a]';
    const titleColor = light ? 'text-slate-500' : 'text-slate-400';
    const valueColor = light ? 'text-slate-900' : 'text-slate-50';
  
    return (
      <div 
        className={`p-6 rounded-2xl min-h-[112px] min-w-[fit-content]  ${bgColor} ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''} ${className ?? ''}`}
        onClick={onClick}
      >
        <h3 className={`text-sm font-semibold ${titleColor} mb-3`}>{title}</h3>
        <div className="flex items-end justify-between gap-3">
          <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
          <div className="flex items-center gap-1">
            <span className={`text-sm font-semibold ${titleColor}`}>{change}</span>
            <TrendIcon className={`w-4 h-4 ${valueColor}`} />
          </div>
        </div>
      </div>
    );
  };