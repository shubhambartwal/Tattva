import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div
      className="relative group cursor-pointer bg-black text-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
      onClick={() => onClick(event)}
    >
      <img
        src={event.mainImage}
        alt={event.title}
        className="w-full h-[70%] object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-sm">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
