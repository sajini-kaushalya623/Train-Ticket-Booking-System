# Sri Lanka Railways - Train Ticket Booking System

A comprehensive online train ticket booking system tailored for Sri Lanka Railways, featuring real train names, authentic routes, and a complete booking flow from search to confirmation.

## 🚂 Features

### Core Functionality
- **Smart Train Search** - Search trains by route, date, and class
- **Station Autocomplete** - Quick station selection with search filter
- **Real Train Data** - Authentic Sri Lankan train names (Podi Menike, Yal Devi, Ella Odyssey, etc.)
- **Multiple Routes** - Colombo-Kandy, Colombo-Badulla, Colombo-Jaffna, Colombo-Galle
- **Class Selection** - 1st Class AC, 2nd Class, 3rd Class
- **Complete Booking Flow** - Search → Results → Details → Booking → Confirmation
- **Responsive Design** - Works on desktop, tablet, and mobile

### UI/UX Features
- Color-coded train types (Express, Intercity, Night Mail)
- Route timeline visualization
- Running days display
- Popular routes quick access
- Multi-language selector (English, Sinhala, Tamil)
- Form validation and error handling

## 📁 Project Structure

```
sri-lanka-railways/
│
├── src/
│   ├── data/
│   │   ├── stations.js          # Station data & popular routes
│   │   └── trains.js             # Train schedules
│   │
│   ├── components/
│   │   ├── Header.js             # Navigation header
│   │   ├── SearchPanel.js        # Search form
│   │   ├── TrainCard.js          # Train result card
│   │   ├── TrainDetails.js       # Detailed train view
│   │   ├── BookingForm.js        # Passenger details form
│   │   ├── BookingConfirmation.js # Booking success page
│   │   └── Footer.js             # Footer component
│   │
│   ├── pages/
│   │   ├── HomePage.js           # Landing page
│   │   └── ResultsPage.js        # Search results page
│   │
│   └── App.js                    # Main application
│
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Create React App
```bash
npx create-react-app sri-lanka-railways
cd sri-lanka-railways
```

### Step 2: Install Dependencies
```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Configure Tailwind CSS

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 4: Create Project Structure
```bash
mkdir -p src/data src/components src/pages
```

### Step 5: Copy Files
Copy all the provided files into their respective folders:
- Data files → `src/data/`
- Component files → `src/components/`
- Page files → `src/pages/`
- `App.js` → `src/`

### Step 6: Run the Application
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🚀 Usage Guide

### 1. Search for Trains
- Select "From" and "To" stations
- Choose travel date (cannot be past date)
- Select preferred class
- Click "Search Trains"

### 2. View Results
- Browse available trains
- See departure/arrival times and duration
- Check available classes
- Click "View Details" for more information

### 3. Book Tickets
- Review train details and route timeline
- Select your preferred class
- Click "Book Now"
- Enter passenger details (Name, NIC/Passport, Contact, Email)
- Confirm booking

### 4. Confirmation
- Receive booking confirmation with unique booking ID
- View complete booking details
- Receive confirmation email (UI indication)

## 📊 Available Routes & Trains

### Colombo Fort → Kandy
- **Podi Menike** (Express) - 06:00 - 09:15
- **Udarata Menike** (Express) - 08:30 - 11:50
- **Intercity Express** - 15:35 - 18:20

### Colombo Fort → Badulla
- **Ella Odyssey** (Special Express) - 05:45 - 16:10
- **Night Mail** - 20:00 - 08:15

### Colombo Fort → Jaffna
- **Yal Devi** (Express) - 05:30 - 12:10
- **Intercity Express** - 13:00 - 19:00

### Colombo Fort → Galle
- **Ruhunu Kumari** (Express) - 07:00 - 09:30

## 🎨 Customization

### Adding New Stations
Edit `src/data/stations.js`:
```javascript
export const STATIONS = [
  { id: 16, name: 'New Station', line: 'Line Name' },
  // ... existing stations
];
```

### Adding New Trains
Edit `src/data/trains.js`:
```javascript
export const TRAIN_SCHEDULES = {
  'Station1-Station2': [
    {
      id: 'T008',
      name: 'Train Name',
      type: 'Express',
      // ... train details
    }
  ]
};
```

### Changing Colors
The application uses a red color scheme for Sri Lanka Railways. To customize:
- Header: `from-red-600 to-red-700`
- Buttons: `bg-red-600 hover:bg-red-700`
- Links: `text-red-600`

## 🔧 Technical Details

### Technologies Used
- **React** - Frontend framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **JavaScript ES6+** - Programming language

### Key Components
- **State Management** - React useState hooks
- **Routing** - View-based navigation (no external router)
- **Form Validation** - Client-side validation
- **Responsive Design** - Mobile-first approach

## 📝 Notes

### Important
- This is a **UI/UX demonstration system**
- No backend integration (all data is client-side)
- No real payment processing
- No actual seat reservation
- Sample data for demonstration purposes

### Future Enhancements
- Backend API integration
- Real-time seat availability
- Payment gateway integration
- User authentication
- Booking history
- Email notifications
- Mobile app version
- Multi-language full support

## 🐛 Known Limitations

1. **No Persistence** - Data is not saved (refresh resets everything)
2. **Limited Routes** - Only 4 routes available
3. **Static Schedule** - Times don't change by date
4. **No Real-Time Data** - No live train tracking
5. **Client-Side Only** - No server/database

## 📄 License

This project is created for educational and demonstration purposes.

## 👥 Support

For questions or issues:
- Review the code comments in each file
- Check the component structure
- Ensure all dependencies are installed
- Verify Tailwind CSS is properly configured

## 🎓 Educational Use

This project is ideal for:
- Learning React component architecture
- Understanding state management
- Practicing form handling
- Studying responsive design
- Portfolio demonstrations
- Academic projects

## 🔗 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

---

**Built with ❤️ for Sri Lanka Railways**

*Version 1.0.0 - January 2026*
