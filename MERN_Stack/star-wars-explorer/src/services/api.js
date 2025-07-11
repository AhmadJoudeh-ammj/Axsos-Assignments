const BASE_URL = 'https://swapi.py4e.com/api'

// Generic fetch function with error handling
const fetchFromAPI = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('API fetch error:', error)
    throw error
  }
}

// Get character by ID
export const getCharacter = async (id) => {
  return fetchFromAPI(`${BASE_URL}/people/${id}/`)
}

// Get planet by ID
export const getPlanet = async (id) => {
  return fetchFromAPI(`${BASE_URL}/planets/${id}/`)
}

// Get starship by ID
export const getStarship = async (id) => {
  return fetchFromAPI(`${BASE_URL}/starships/${id}/`)
}

// Get vehicle by ID
export const getVehicle = async (id) => {
  return fetchFromAPI(`${BASE_URL}/vehicles/${id}/`)
}

// Get homeworld data for a character (used for ninja bonus feature)
export const getHomeworld = async (homeworldUrl) => {
  return fetchFromAPI(homeworldUrl)
}

// Extract ID from SWAPI URL (utility function)
export const extractIdFromUrl = (url) => {
  const matches = url.match(/\/(\d+)\/$/)
  return matches ? parseInt(matches[1]) : null
}

// Format character data for display
export const formatCharacterData = (character) => {
  return {
    name: character.name,
    height: character.height === 'unknown' ? 'Unknown' : `${character.height} cm`,
    mass: character.mass === 'unknown' ? 'Unknown' : `${character.mass} kg`,
    hairColor: character.hair_color,
    skinColor: character.skin_color,
    eyeColor: character.eye_color,
    birthYear: character.birth_year,
    gender: character.gender,
    homeworld: character.homeworld,
    films: character.films,
    species: character.species,
    vehicles: character.vehicles,
    starships: character.starships
  }
}

// Format planet data for display
export const formatPlanetData = (planet) => {
  return {
    name: planet.name,
    rotationPeriod: planet.rotation_period === 'unknown' ? 'Unknown' : `${planet.rotation_period} hours`,
    orbitalPeriod: planet.orbital_period === 'unknown' ? 'Unknown' : `${planet.orbital_period} days`,
    diameter: planet.diameter === 'unknown' ? 'Unknown' : `${planet.diameter} km`,
    climate: planet.climate,
    gravity: planet.gravity,
    terrain: planet.terrain,
    surfaceWater: planet.surface_water === 'unknown' ? 'Unknown' : `${planet.surface_water}%`,
    population: planet.population === 'unknown' ? 'Unknown' : parseInt(planet.population).toLocaleString(),
    residents: planet.residents,
    films: planet.films
  }
}

// Format starship data for display
export const formatStarshipData = (starship) => {
  return {
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.cost_in_credits === 'unknown' ? 'Unknown' : parseInt(starship.cost_in_credits).toLocaleString(),
    length: starship.length === 'unknown' ? 'Unknown' : `${starship.length} m`,
    maxAtmospheringSpeed: starship.max_atmosphering_speed === 'n/a' ? 'N/A' : `${starship.max_atmosphering_speed} km/h`,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity === 'unknown' ? 'Unknown' : parseInt(starship.cargo_capacity).toLocaleString(),
    consumables: starship.consumables,
    hyperdriveRating: starship.hyperdrive_rating,
    MGLT: starship.MGLT,
    starshipClass: starship.starship_class,
    pilots: starship.pilots,
    films: starship.films
  }
}

// Format vehicle data for display
export const formatVehicleData = (vehicle) => {
  return {
    name: vehicle.name,
    model: vehicle.model,
    manufacturer: vehicle.manufacturer,
    costInCredits: vehicle.cost_in_credits === 'unknown' ? 'Unknown' : parseInt(vehicle.cost_in_credits).toLocaleString(),
    length: vehicle.length === 'unknown' ? 'Unknown' : `${vehicle.length} m`,
    maxAtmospheringSpeed: vehicle.max_atmosphering_speed === 'unknown' ? 'Unknown' : `${vehicle.max_atmosphering_speed} km/h`,
    crew: vehicle.crew,
    passengers: vehicle.passengers,
    cargoCapacity: vehicle.cargo_capacity === 'unknown' ? 'Unknown' : parseInt(vehicle.cargo_capacity).toLocaleString(),
    consumables: vehicle.consumables,
    vehicleClass: vehicle.vehicle_class,
    pilots: vehicle.pilots,
    films: vehicle.films
  }
}

