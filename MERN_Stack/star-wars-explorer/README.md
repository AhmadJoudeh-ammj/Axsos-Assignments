# Star Wars Explorer

A React application that interacts with the Star Wars API (SWAPI) to explore characters, planets, starships, and vehicles from the Star Wars universe.

## Features

### Core Functionality
- **Navigation & Routing**: React Router implementation with index route and dynamic detail routes
- **Persistent Search**: Dropdown menu to select resource type (Characters, Planets, Starships, Vehicles)
- **ID-based Search**: Input field for entering resource ID numbers with automatic navigation
- **Resource Details**: Display 4+ relevant attributes for each resource type

### Character Details
- Name, height, mass, hair color, eye color, skin color
- Birth year, gender
- Homeworld information with clickable links (Ninja Bonus)
- Film appearances
- Associated vehicles and starships

### Planet Details
- Diameter, gravity, climate, terrain, surface water
- Population, rotation period, orbital period
- Film appearances
- Notable residents with character IDs

### Starship Details (App Expansion)
- Class, manufacturer, length, cost, max speed
- Hyperdrive rating, crew, passengers, cargo capacity
- Film appearances

### Vehicle Details (App Expansion)
- Class, manufacturer, length, cost, max speed
- Crew, passengers, cargo capacity
- Film appearances

### Error Handling
- Humorous error message: "These aren't the droids you're looking for"
- Obi-Wan Kenobi image for failed API requests
- Graceful handling of invalid IDs or network issues

## Technology Stack

- **React 18** with Vite build tool
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Shadcn/UI** components for professional UI
- **Lucide React** for icons
- **Star Wars API (SWAPI)** for data

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Production files will be generated in the `dist/` directory

## Usage

1. **Select Resource Type**: Choose from Characters, Planets, Starships, or Vehicles in the dropdown
2. **Enter ID**: Type the ID number of the resource you want to explore
3. **Search**: Click the search button or press Enter to view details
4. **Navigate**: Use homeworld links to explore related planets
5. **Return**: Use the "Back to Search" button to return to the main page

## Quick Start Examples

- **Character ID 1**: Luke Skywalker
- **Character ID 4**: Darth Vader
- **Planet ID 1**: Tatooine
- **Planet ID 2**: Alderaan
- **Starship ID 9**: Death Star
- **Starship ID 12**: X-wing
- **Vehicle ID 4**: Sand Crawler
- **Vehicle ID 14**: Snowspeeder

## Project Structure

```
src/
├── components/
│   ├── CharacterDetail.jsx    # Character detail page
│   ├── PlanetDetail.jsx       # Planet detail page
│   ├── StarshipDetail.jsx     # Starship detail page
│   ├── VehicleDetail.jsx      # Vehicle detail page
│   ├── Home.jsx               # Landing page
│   └── Layout.jsx             # Main layout with search
├── services/
│   └── api.js                 # SWAPI integration functions
├── assets/
│   └── obi-wan-error.png      # Error state image
├── App.jsx                    # Main app component with routing
└── main.jsx                   # Application entry point
```

## API Integration

The application uses the Star Wars API (SWAPI) via `https://swapi.py4e.com/api` for CORS compatibility. The API service includes:

- Generic fetch function with error handling
- Resource-specific functions (getCharacter, getPlanet, getStarship, getVehicle)
- Data formatting functions for consistent display
- Homeworld resolution for character details

## Ninja Bonus Features

✅ **Homeworld Display**: Character pages show homeworld names fetched from additional API calls
✅ **Homeworld Navigation**: Clickable homeworld links navigate to planet detail pages
✅ **App Expansion**: Additional resources (Starships, Vehicles) beyond the basic requirements

## Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## Error Handling

- Network errors display the Obi-Wan error page
- Invalid IDs show appropriate error messages
- Loading states provide user feedback during API calls
- Graceful fallbacks for missing data

## Development Notes

- Uses modern React patterns with hooks (useState, useEffect)
- Implements proper error boundaries and loading states
- Follows React Router best practices for navigation
- Styled with Tailwind CSS for consistent design
- Professional Star Wars-themed UI with yellow accents on dark background

## License

This project is for educational purposes and uses the free Star Wars API (SWAPI).

---

**May the Force be with you!**

