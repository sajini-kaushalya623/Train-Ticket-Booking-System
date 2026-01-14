// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import TrainDetails from './components/TrainDetails';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import { TRAIN_SCHEDULES } from './data/trains';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [language, setLanguage] = useState('EN');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [selectedClass, setSelectedClass] = useState('');
  const [bookingData, setBookingData] = useState(null);

  const handleSearch = (searchParams) => {
    const routeKey = `${searchParams.from}-${searchParams.to}`;
    const trains = TRAIN_SCHEDULES[routeKey] || [];
    
    if (trains.length === 0) {
      alert('No trains available for this route');
      return;
    }
    
    setSearchResults(trains);
    setCurrentView('results');
  };

  const handleViewDetails = (train) => {
    setSelectedTrain(train);
    setCurrentView('details');
  };

  const handleBookNow = (train, classType) => {
    setSelectedTrain(train);
    setSelectedClass(classType);
    setCurrentView('booking');
  };

  const handleConfirmBooking = (passengerData) => {
    setBookingData(passengerData);
    setCurrentView('confirmation');
  };

  const handleBookAnother = () => {
    setCurrentView('home');
    setSelectedTrain(null);
    setBookingData(null);
    setSearchResults([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        language={language} 
        setLanguage={setLanguage}
        onMenuToggle={() => {}}
      />
      
      {currentView === 'home' && (
        <HomePage onSearch={handleSearch} />
      )}
      
      {currentView === 'results' && (
        <ResultsPage
          searchResults={searchResults}
          onBack={() => setCurrentView('home')}
          onViewDetails={handleViewDetails}
        />
      )}
      
      {currentView === 'details' && selectedTrain && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <TrainDetails
            train={selectedTrain}
            onBack={() => setCurrentView('results')}
            onBookNow={handleBookNow}
          />
        </div>
      )}
      
      {currentView === 'booking' && selectedTrain && (
        <BookingForm
          train={selectedTrain}
          selectedClass={selectedClass}
          onBack={() => setCurrentView('details')}
          onConfirm={handleConfirmBooking}
        />
      )}
      
      {currentView === 'confirmation' && selectedTrain && bookingData && (
        <BookingConfirmation
          train={selectedTrain}
          selectedClass={selectedClass}
          bookingData={bookingData}
          onBookAnother={handleBookAnother}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;