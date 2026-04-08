import './RecentActivity.css';

interface ActivityItem {
  id: string;
  type: 'conversation' | 'task' | 'integration';
  title: string;
  description: string;
  timestamp: string;
  icon: React.ReactNode;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <section className="recent-activity-card">
      <div className="card-header">
        <h2 className="card-title">Recent Activity</h2>
        <button type="button" className="view-all-btn">
          View all
        </button>
      </div>
      <ul className="activity-list" role="list">
        {activities.map((item) => (
          <li key={item.id} className="activity-item">
            <div className={`activity-icon activity-icon--${item.type}`}>
              {item.icon}
            </div>
            <div className="activity-content">
              <p className="activity-title">{item.title}</p>
              <p className="activity-desc">{item.description}</p>
            </div>
            <time className="activity-time" dateTime={item.timestamp}>
              {formatRelativeTime(item.timestamp)}
            </time>
          </li>
        ))}
      </ul>
    </section>
  );
}

function formatRelativeTime(timestamp: string): string {
  const now = new Date();
  const date = new Date(timestamp);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
