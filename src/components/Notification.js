import React from 'react';

// A functional component that displays a notification when the player enters the same letter twice
const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;