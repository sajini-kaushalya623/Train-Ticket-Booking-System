// components/BookingConfirmation.js
import React from 'react';

const BookingConfirmation = ({ train, selectedClass, bookingData, onBookAnother }) => {
  const bookingId = `SLR${Math.floor(Math.random() * 1000000)}`;
  const seatNumber = `A${Math.floor(Math.random() * 50 + 1)}`;
  const fare = selectedClass.includes('1st') ? '1,500' : selectedClass.includes('2nd') ? '800' : '400';

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-8">Your ticket has been booked successfully</p>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-gray-800 mb-4 text-center">Booking Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Booking ID:</span>
              <span className="font-semibold">{bookingId}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Passenger:</span>
              <span className="font-semibold">{bookingData.fullName}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Train:</span>
              <span className="font-semibold">{train.name}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Route:</span>
              <span className="font-semibold">{train.from} → {train.to}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Date:</span>
              <span className="font-semibold">2026-01-15</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Departure:</span>
              <span className="font-semibold">{train.departure}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Class:</span>
              <span className="font-semibold">{selectedClass}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Seat:</span>
              <span className="font-semibold">{seatNumber}</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-gray-600 font-bold">Total Fare:</span>
              <span className="font-bold text-red-600 text-xl">LKR {fare}</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-6">
          A confirmation email has been sent to {bookingData.email}
        </p>
        
        <button
          onClick={onBookAnother}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition"
        >
          Book Another Ticket
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;