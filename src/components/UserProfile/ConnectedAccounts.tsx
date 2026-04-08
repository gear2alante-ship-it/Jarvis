import './ConnectedAccounts.css';

interface ConnectedAccount {
  id: string;
  name: string;
  username?: string;
  connected: boolean;
  icon: React.ReactNode;
  color: string;
}

interface ConnectedAccountsProps {
  accounts: ConnectedAccount[];
  onToggle: (id: string, connected: boolean) => void;
}

export function ConnectedAccounts({ accounts, onToggle }: ConnectedAccountsProps) {
  return (
    <section className="connected-accounts-card">
      <div className="card-header">
        <h2 className="card-title">Connected Accounts</h2>
      </div>
      <ul className="accounts-list" role="list">
        {accounts.map((account) => (
          <li key={account.id} className="account-item">
            <div
              className="account-icon"
              style={{ background: `${account.color}18`, color: account.color }}
            >
              {account.icon}
            </div>
            <div className="account-info">
              <p className="account-name">{account.name}</p>
              {account.username && (
                <p className="account-username">
                  {account.connected ? account.username : 'Not connected'}
                </p>
              )}
            </div>
            <button
              type="button"
              className={`account-toggle ${account.connected ? 'connected' : 'disconnected'}`}
              onClick={() => onToggle(account.id, account.connected)}
              aria-label={
                account.connected
                  ? `Disconnect ${account.name}`
                  : `Connect ${account.name}`
              }
            >
              {account.connected ? 'Connected' : 'Connect'}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
