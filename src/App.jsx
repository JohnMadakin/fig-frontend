import { useEffect, useState } from 'react';
import './main.css';

const INIT_EVENTS = [
  { id: 1, category: 'Business', title: 'business ai', description: "helo guys", isVirtual: true, address: 'london' },
  { id: 2, category: 'AI', title: 'robotics', description: "helo guys", isVirtual: true, address: 'london' },
  { id: 3, category: 'Internet of things', title: 'beginning of io', description: "helo guys", isVirtual: true, address: 'london'  },
];

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(INIT_EVENTS);
  }, []);

  const [selectedEvent, setSelectedEvent] = useState('');

  function handleClick(e) {
    e.preventDefault();
    const selectdEvents = e.target?.dataset?.events;
    if (e.target.className !== 'category-block') return;
    setSelectedEvent(selectdEvents);
  }

  return (
    <>
      <section className="hero">
        <h2>Connecting the world</h2>
        <div className="search-box"></div>
      </section>

      <section className="event-categories">
        {events.map((ev) => (
          <div
            key={ev.id}
            onClick={handleClick}
            data-events={ev.title}
            className="category-block"
          >
            <h3>{ev.category}</h3>
            <p>{ev.title} Events</p>
          </div>
        ))}
      </section>

      <section className="selectedCat">
        <p>{selectedEvent}</p>
      </section>
    </>
  );
}

export default App;
