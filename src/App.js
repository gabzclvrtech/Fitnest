import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Star } from 'lucide-react';
import './App.css'; // Add this line to import the CSS file

const GymSharingApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);

  const gyms = [
    {
      id: 1,
      title: "Luxury Home Gym in Beverly Hills",
      description: "Fully equipped premium gym with Peloton, free weights, and recovery area",
      price: 75,
      rating: 4.9,
      reviews: 28,
      location: "Beverly Hills, CA",
      amenities: ["Peloton", "Free Weights", "Recovery Area", "Shower"],
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Modern Garage Gym",
      description: "Complete CrossFit setup with Olympic lifting platform",
      price: 45,
      rating: 4.7,
      reviews: 15,
      location: "Santa Monica, CA",
      amenities: ["CrossFit Equipment", "Olympic Platform", "Rogue Rack"],
      imageUrl: "/api/placeholder/400/250"
    }
  ];

  const filteredGyms = gyms.filter(gym =>
    gym.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    gym.location.toLowerCase().includes(selectedLocation.toLowerCase()) &&
    gym.price >= priceRange[0] && gym.price <= priceRange[1]
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Find Your Perfect Private Gym Space</h1>
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by title or location..."
          className="border rounded-lg p-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="border rounded-lg p-2">
          <option value="">All Locations</option>
          <option value="Beverly Hills">Beverly Hills</option>
          <option value="Santa Monica">Santa Monica</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Search</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGyms.length === 0 ? (
          <p>No gyms found matching your criteria.</p>
        ) : (
          filteredGyms.map(gym => (
            <div key={gym.id} className="border p-4 rounded-lg shadow-lg">
              <img src={gym.imageUrl} alt={gym.title} className="w-full h-48 object-cover rounded" />
              <h2 className="font-bold mt-2">{gym.title}</h2>
              <p><MapPin /> {gym.location}</p>
              <div>{gym.rating} <Star /> ({gym.reviews} reviews)</div>
              <div>${gym.price} / hour</div>
              <button className="bg-blue-600 text-white py-2 rounded-lg mt-4">Book Now</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GymSharingApp;
