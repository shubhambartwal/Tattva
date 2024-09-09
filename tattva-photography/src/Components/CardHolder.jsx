import React from 'react';
import EventCard from './EventCard';  // Ensure this path is correct

// Example data for demonstration
const eventData = [
  {
    id: 1,
    title: 'Wedding Ceremony',
    description: 'A beautiful wedding ceremony with stunning moments.',
    mainImage: 'https://via.placeholder.com/400x300?text=Wedding',
    gallery: [
      'https://via.placeholder.com/800x600?text=Wedding+1',
      'https://via.placeholder.com/800x600?text=Wedding+2',
      'https://via.placeholder.com/800x600?text=Wedding+3',
    ]
  },
  {
    id: 2,
    title: 'Corporate Event',
    description: 'A professional corporate event with engaging sessions.',
    mainImage: 'https://via.placeholder.com/400x300?text=Corporate',
    gallery: [
      'https://via.placeholder.com/800x600?text=Corporate+1',
      'https://via.placeholder.com/800x600?text=Corporate+2',
      'https://via.placeholder.com/800x600?text=Corporate+3',
    ]
  },
  // Add more events as needed
];

const EventCards = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full h-full flex flex-wrap justify-center items-center gap-2 overflow-auto">
        {eventData.map((event) => (
          <div key={event.id} className="w-full md:w-1/2 lg:w-1/3 h-[70vh]">
            <EventCard
              event={event}
              onClick={() => console.log('Card clicked:', event)} // Replace with your click handler
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCards;
