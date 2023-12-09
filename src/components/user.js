import React from 'react';
import Card from './Card'; // Import the Card component

const User = ({ tickets }) => {
  // Grouping tickets by userId
  const groupedTickets = tickets.reduce((grouped, ticket) => {
    const { userId } = ticket;
    if (!grouped[userId]) {
      grouped[userId] = [];
    }
    grouped[userId].push(ticket);
    return grouped;
  }, {});

  return (
    <div className="kanban-columns">
      
      {Object.keys(groupedTickets).map(userId => (
        <div className="column" key={userId}>
          <h2>{userId}</h2>
          {groupedTickets[userId].map(ticket => (
            <Card key={ticket.id} ticket={ticket} /> 
          ))}
        </div>
      ))}
    </div>
  );
};

export default User;
