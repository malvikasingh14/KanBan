import React from 'react';

const Card = ({ ticket }) => {
  const { id, title, tag, userId, status, priority } = ticket;
  const priorityClass = `card-priority-${ticket.priority === 4 ? 'urgent' : 
                        ticket.priority === 3 ? 'high' : 
                        ticket.priority === 2 ? 'medium' : 
                        ticket.priority === 1 ? 'low' : 'none'}`;
  return (
    <div className={`card ${priorityClass}`}>
      <h3>{title}</h3>
      <p>{tag.join(', ')}</p>
      <p>User: {userId}</p>
      
    </div>

  );
};

export default Card;
