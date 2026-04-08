import './AppHeader.css';

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <a href="/" className="app-logo" aria-label="Jarvis home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
            <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
            <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
            <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
          </svg>
          <span className="app-logo-text">Jarvis</span>
        </a>

        <nav className="app-nav" aria-label="Main navigation">
          <a href="#" className="app-nav-link">Dashboard</a>
          <a href="#" className="app-nav-link">Conversations</a>
          <a href="#" className="app-nav-link">Tasks</a>
          <a href="#" className="app-nav-link active">Profile</a>
        </nav>

        <div className="app-header-actions">
          <button
            type="button"
            className="header-icon-btn"
            aria-label="Notifications"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className="notification-badge" aria-label="3 notifications">3</span>
          </button>
          <div className="header-avatar" aria-label="User menu">
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="Alex Johnson"
              className="header-avatar-img"
              width="32"
              height="32"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
