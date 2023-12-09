import React from 'react';
import Card from './Card'; // Import the Card component

const Prior = ({ tickets }) => {
  // Grouping tickets by priority
  const groupedTickets = tickets.reduce((grouped, ticket) => {
    const { priority } = ticket;
    if (!grouped[priority]) {
      grouped[priority] = [];
    }
    grouped[priority].push(ticket);
    return grouped;
  }, {});

  return (
    <div className="kanban-columns">
      
      {Object.keys(groupedTickets).map(priority => (
        <div className="column" key={priority}>
          <h2>{priority}</h2>
          {groupedTickets[priority].map(ticket => (
            <Card key={ticket.id} ticket={ticket} /> 
          ))}
        </div>
      ))}
    </div>
  );
};

export default Prior;