import { useState } from 'react';
import { ProfileHeader } from '../components/UserProfile/ProfileHeader';
import { ProfileStats } from '../components/UserProfile/ProfileStats';
import { PersonalInfo } from '../components/UserProfile/PersonalInfo';
import { RecentActivity } from '../components/UserProfile/RecentActivity';
import { ConnectedAccounts } from '../components/UserProfile/ConnectedAccounts';
import './UserProfilePage.css';

/* ─── icons ─────────────────────────────────────── */
function MessageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function TaskIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
    </svg>
  );
}

function ConversationsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function TasksCompletedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IntegrationsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="6" height="10" rx="1" />
      <rect x="9" y="3" width="6" height="18" rx="1" />
      <rect x="16" y="9" width="6" height="8" rx="1" />
    </svg>
  );
}

function HoursIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/* ─── account icons ──────────────────────────────── */
function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function NotionIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
    </svg>
  );
}

/* ─── mock data ──────────────────────────────────── */
const MOCK_USER = {
  name: 'Alex Johnson',
  username: 'alexjohnson',
  role: 'Senior Product Designer',
  avatar: 'https://i.pravatar.cc/150?img=11',
  isOnline: true,
  joinDate: 'March 2023',
};

const MOCK_STATS = [
  { label: 'Conversations', value: '1,284', icon: <ConversationsIcon /> },
  { label: 'Tasks Completed', value: '847', icon: <TasksCompletedIcon /> },
  { label: 'Integrations', value: '12', icon: <IntegrationsIcon /> },
  { label: 'Hours Saved', value: '320', icon: <HoursIcon /> },
];

const MOCK_PERSONAL_FIELDS = [
  { label: 'Full Name', key: 'fullName', value: 'Alex Johnson' },
  { label: 'Email', key: 'email', value: 'alex.johnson@example.com', type: 'email' as const },
  { label: 'Phone', key: 'phone', value: '+1 (555) 012-3456' },
  { label: 'Location', key: 'location', value: 'San Francisco, CA' },
  { label: 'Job Title', key: 'jobTitle', value: 'Senior Product Designer' },
  { label: 'Department', key: 'department', value: 'Product & Design' },
  { label: 'Website', key: 'website', value: 'https://alexjohnson.design', type: 'url' as const },
  { label: 'Bio', key: 'bio', value: 'Building intuitive products that people love. Passionate about AI and human-computer interaction.', type: 'textarea' as const },
];

const MOCK_ACTIVITIES = [
  {
    id: '1',
    type: 'conversation' as const,
    title: 'Drafted Q3 product roadmap',
    description: 'Used Jarvis to outline key features and milestones',
    timestamp: new Date(Date.now() - 1000 * 60 * 23).toISOString(),
    icon: <MessageIcon />,
  },
  {
    id: '2',
    type: 'task' as const,
    title: 'Completed competitive analysis',
    description: 'Analysed 8 competitor products with AI assistance',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    icon: <TaskIcon />,
  },
  {
    id: '3',
    type: 'integration' as const,
    title: 'Connected Notion workspace',
    description: 'Syncing design docs and meeting notes',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    icon: <IntegrationIcon />,
  },
  {
    id: '4',
    type: 'conversation' as const,
    title: 'Generated user research summary',
    description: 'Synthesised 50 user interviews into key insights',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    icon: <MessageIcon />,
  },
  {
    id: '5',
    type: 'task' as const,
    title: 'Created onboarding flow deck',
    description: '12-slide presentation built from scratch',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    icon: <TaskIcon />,
  },
];

const MOCK_ACCOUNTS = [
  { id: 'github', name: 'GitHub', username: '@alexjohnson', connected: true, icon: <GithubIcon />, color: '#333' },
  { id: 'slack', name: 'Slack', username: 'alex.johnson', connected: true, icon: <SlackIcon />, color: '#4a154b' },
  { id: 'google', name: 'Google', username: 'alex.johnson@gmail.com', connected: true, icon: <GoogleIcon />, color: '#4285F4' },
  { id: 'notion', name: 'Notion', username: undefined, connected: false, icon: <NotionIcon />, color: '#000' },
];

/* ─── page ───────────────────────────────────────── */
export function UserProfilePage() {
  const [accounts, setAccounts] = useState(MOCK_ACCOUNTS);

  function handleToggleAccount(id: string, wasConnected: boolean) {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc.id === id ? { ...acc, connected: !wasConnected } : acc
      )
    );
  }

  function handleSavePersonalInfo(updates: Record<string, string>) {
    console.log('Saved profile updates:', updates);
  }

  return (
    <div className="profile-page">
      <aside className="profile-sidebar">
        <nav className="sidebar-nav" aria-label="Profile navigation">
          <a href="#overview" className="sidebar-link active">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Overview
          </a>
          <a href="#activity" className="sidebar-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            Activity
          </a>
          <a href="#integrations" className="sidebar-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
            </svg>
            Integrations
          </a>
          <a href="#settings" className="sidebar-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a6.97 6.97 0 0 0-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54a6.97 6.97 0 0 0-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87a.48.48 0 0 0 .12.61l2.03 1.58c-.04.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32a.49.49 0 0 0 .59.22l2.39-.96c.5.35 1.04.65 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54a6.97 6.97 0 0 0 1.62-.94l2.39.96a.49.49 0 0 0 .59-.22l1.92-3.32a.48.48 0 0 0-.12-.61l-2.01-1.58z" />
            </svg>
            Settings
          </a>
        </nav>
      </aside>

      <main className="profile-main" id="overview">
        <ProfileHeader
          {...MOCK_USER}
          onEditProfile={() => console.log('Edit profile clicked')}
        />

        <section id="stats" aria-label="Profile statistics">
          <ProfileStats stats={MOCK_STATS} />
        </section>

        <div className="profile-grid">
          <PersonalInfo
            fields={MOCK_PERSONAL_FIELDS}
            onSave={handleSavePersonalInfo}
          />

          <div className="profile-grid-right">
            <section id="activity">
              <RecentActivity activities={MOCK_ACTIVITIES} />
            </section>

            <section id="integrations">
              <ConnectedAccounts
                accounts={accounts}
                onToggle={handleToggleAccount}
              />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
