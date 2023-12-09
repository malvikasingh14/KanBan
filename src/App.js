
import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import KanbanColumns from './components/KanbanColumn.js';
import Card from './components/Card'; 
import User from './components/user';
import Prior from './components/priority'

const App = () => {
  const [tickets, setTickets] = useState([]); 
  const [displayOption, setDisplayOption] = useState('status'); 

  const fetchTickets = async () => {
    try {
      // data from the API 
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      
      setTickets(data.tickets);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  //  initial render
  useEffect(() => {
    fetchTickets();
  }, []); 

  // getting different pages based on displayOption
  const renderPage = () => {
    if (displayOption === 'group-by-user') {
      return <User tickets={tickets} />;
    } else if (displayOption === 'sort-by-priority') {
      return <Prior tickets={tickets} />;
    } else if (displayOption === 'KanbanColumn') {
      return (
        <KanbanColumns tickets={tickets} displayOption={displayOption}>
          {(ticket) => <Card key={ticket.id} ticket={ticket} />}
        </KanbanColumns>
      );
    }else{
      return (
        <KanbanColumns tickets={tickets} displayOption={displayOption}>
          {(ticket) => <Card key={ticket.id} ticket={ticket} />}
        </KanbanColumns>
      );

    }
  };

  return (
    <div className="App">
    <Navbar handleOptionChange={setDisplayOption} />
    {renderPage()}
  </div>
  );
};

export default App;
