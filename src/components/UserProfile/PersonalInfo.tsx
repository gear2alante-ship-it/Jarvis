import { useState } from 'react';
import './PersonalInfo.css';

interface PersonalInfoField {
  label: string;
  value: string;
  key: string;
  type?: 'text' | 'email' | 'url' | 'textarea';
}

interface PersonalInfoProps {
  fields: PersonalInfoField[];
  onSave: (updates: Record<string, string>) => void;
}

export function PersonalInfo({ fields, onSave }: PersonalInfoProps) {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(fields.map((f) => [f.key, f.value]))
  );

  function handleChange(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSave() {
    onSave(values);
    setEditing(false);
  }

  function handleCancel() {
    setValues(Object.fromEntries(fields.map((f) => [f.key, f.value])));
    setEditing(false);
  }

  return (
    <section className="personal-info-card">
      <div className="card-header">
        <h2 className="card-title">Personal Information</h2>
        {!editing && (
          <button
            type="button"
            className="card-action-btn"
            onClick={() => setEditing(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
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
            Edit
          </button>
        )}
      </div>

      <div className="info-grid">
        {fields.map((field) => (
          <div key={field.key} className="info-field">
            <label htmlFor={`field-${field.key}`} className="field-label">
              {field.label}
            </label>
            {editing ? (
              field.type === 'textarea' ? (
                <textarea
                  id={`field-${field.key}`}
                  className="field-input field-textarea"
                  value={values[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  rows={3}
                />
              ) : (
                <input
                  id={`field-${field.key}`}
                  type={field.type ?? 'text'}
                  className="field-input"
                  value={values[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                />
              )
            ) : (
              <p
                id={`field-${field.key}`}
                className="field-value"
              >
                {values[field.key] || (
                  <span className="field-empty">Not provided</span>
                )}
              </p>
            )}
          </div>
        ))}
      </div>

      {editing && (
        <div className="card-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      )}
    </section>
  );
}
