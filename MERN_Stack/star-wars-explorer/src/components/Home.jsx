import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Globe, Search, ArrowRight, Rocket, Car } from 'lucide-react'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-yellow-400 mb-4">
          Welcome to the Galaxy
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Explore the vast universe of Star Wars characters and planets. 
          Use the search above to discover detailed information about your favorite heroes, villains, and worlds.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/70 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center text-yellow-400">
              <Users className="mr-3" size={24} />
              Characters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 mb-4">
              Discover detailed information about Star Wars characters including their physical attributes, 
              homeworld, and the films they appeared in.
            </p>
            <div className="text-sm text-slate-400">
              <p>• Name, height, mass, and appearance details</p>
              <p>• Homeworld information with direct links</p>
              <p>• Film appearances and character relationships</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/70 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center text-yellow-400">
              <Globe className="mr-3" size={24} />
              Planets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 mb-4">
              Explore the diverse worlds of the Star Wars universe, from desert planets 
              to forest moons and everything in between.
            </p>
            <div className="text-sm text-slate-400">
              <p>• Climate, terrain, and environmental data</p>
              <p>• Population and orbital characteristics</p>
              <p>• Notable residents and film appearances</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/70 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center text-yellow-400">
              <Rocket className="mr-3" size={24} />
              Starships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 mb-4">
              Investigate the powerful starships that traverse the galaxy, from small fighters 
              to massive capital ships and space stations.
            </p>
            <div className="text-sm text-slate-400">
              <p>• Technical specifications and performance</p>
              <p>• Hyperdrive ratings and cargo capacity</p>
              <p>• Known pilots and film appearances</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/70 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center text-yellow-400">
              <Car className="mr-3" size={24} />
              Vehicles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 mb-4">
              Examine the ground and atmospheric vehicles used across the galaxy, 
              from speeder bikes to massive walkers.
            </p>
            <div className="text-sm text-slate-400">
              <p>• Vehicle class and manufacturer details</p>
              <p>• Speed, capacity, and crew information</p>
              <p>• Pilot history and film appearances</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* How to Use Section */}
      <Card className="bg-slate-800/50 border-slate-600">
        <CardHeader>
          <CardTitle className="flex items-center text-yellow-400">
            <Search className="mr-3" size={24} />
            How to Use
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-yellow-600 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                1
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Select Resource Type</h4>
                <p className="text-slate-300">Choose between "Characters", "Planets", "Starships", or "Vehicles" from the dropdown menu above.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow-600 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                2
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Enter ID Number</h4>
                <p className="text-slate-300">Type the ID number of the character or planet you want to explore (e.g., 1 for Luke Skywalker).</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow-600 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                3
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Search and Explore</h4>
                <p className="text-slate-300">Click the search button or press Enter to view detailed information about your selected resource.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
            <h4 className="text-yellow-400 font-semibold mb-2 flex items-center">
              <ArrowRight className="mr-2" size={16} />
              Quick Start Examples
            </h4>
            <div className="text-sm text-slate-300 space-y-1">
              <p>• Character ID 1: Luke Skywalker</p>
              <p>• Character ID 4: Darth Vader</p>
              <p>• Planet ID 1: Tatooine</p>
              <p>• Planet ID 2: Alderaan</p>
              <p>• Starship ID 9: Death Star</p>
              <p>• Starship ID 12: X-wing</p>
              <p>• Vehicle ID 4: Sand Crawler</p>
              <p>• Vehicle ID 14: Snowspeeder</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Home

