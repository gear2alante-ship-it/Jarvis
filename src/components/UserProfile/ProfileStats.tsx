import './ProfileStats.css';

interface Stat {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

interface ProfileStatsProps {
  stats: Stat[];
}

export function ProfileStats({ stats }: ProfileStatsProps) {
  return (
    <div className="profile-stats">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-item">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-body">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
