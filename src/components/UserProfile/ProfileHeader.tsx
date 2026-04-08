import { useState } from 'react';
import './ProfileHeader.css';

interface ProfileHeaderProps {
  name: string;
  username: string;
  role: string;
  avatar: string;
  coverImage?: string;
  isOnline: boolean;
  joinDate: string;
  onEditProfile: () => void;
}

export function ProfileHeader({
  name,
  username,
  role,
  avatar,
  coverImage,
  isOnline,
  joinDate,
  onEditProfile,
}: ProfileHeaderProps) {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <div className="profile-header">
      <div
        className="profile-cover"
        style={
          coverImage
            ? { backgroundImage: `url(${coverImage})` }
            : undefined
        }
      />
      <div className="profile-header-content">
        <div className="profile-avatar-wrapper">
          <div className="profile-avatar-container">
            {!avatarError ? (
              <img
                src={avatar}
                alt={`${name}'s avatar`}
                className="profile-avatar"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <div className="profile-avatar-fallback">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
            <span
              className={`profile-status-dot ${isOnline ? 'online' : 'offline'}`}
              aria-label={isOnline ? 'Online' : 'Offline'}
            />
          </div>
        </div>
        <div className="profile-info">
          <div className="profile-identity">
            <h1 className="profile-name">{name}</h1>
            <span className="profile-username">@{username}</span>
          </div>
          <p className="profile-role">{role}</p>
          <p className="profile-join-date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Joined {joinDate}
          </p>
        </div>
        <button
          className="edit-profile-btn"
          onClick={onEditProfile}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          Edit Profile
        </button>
      </div>
    </div>
  );
}
