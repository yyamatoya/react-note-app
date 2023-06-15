/* eslint-disable react/prop-types */
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onAddNote, onDeleteNote, notes, activeNote, setActiveNote }) => {
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>

      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            key={note.id}
            className={`app-sidebar-note ${note.id === activeNote && 'active'}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-notetitle">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>
              {new Date(note.modDate).toLocaleDateString('ja-JP', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
