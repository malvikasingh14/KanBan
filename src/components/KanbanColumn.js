import React from 'react';
import Card from './Card'; // Import the Card component

const KanbanColumns = ({ tickets }) => {
  // Grouping tickets by status
  const groupedTickets = tickets.reduce((grouped, ticket) => {
    const { status } = ticket;
    if (!grouped[status]) {
      grouped[status] = [];
    }
    grouped[status].push(ticket);
    return grouped;
  }, {});

  return (
    <div className="kanban-columns">
    
      {Object.keys(groupedTickets).map(status => (
        <div className="column" key={status}>
          <h2>{status}</h2>
          {groupedTickets[status].map(ticket => (
            <Card key={ticket.id} ticket={ticket} /> 
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanColumns;
