import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Star } from 'lucide-react'

const Layout = ({ children }) => {
  const [resourceType, setResourceType] = useState('')
  const [resourceId, setResourceId] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (!resourceType || !resourceId) {
      alert('Please select a resource type and enter an ID')
      return
    }

    const id = parseInt(resourceId)
    if (isNaN(id) || id < 1) {
      alert('Please enter a valid ID number')
      return
    }

    if (resourceType === 'people') {
      navigate(`/character/${id}`)
    } else if (resourceType === 'planets') {
      navigate(`/planet/${id}`)
    } else if (resourceType === 'starships') {
      navigate(`/starship/${id}`)
    } else if (resourceType === 'vehicles') {
      navigate(`/vehicle/${id}`)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-yellow-400/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center mb-6">
            <Star className="text-yellow-400 mr-3" size={32} />
            <h1 
              className="text-4xl font-bold text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors"
              onClick={() => navigate('/')}
            >
              Star Wars Explorer
            </h1>
            <Star className="text-yellow-400 ml-3" size={32} />
          </div>
          
          {/* Search Component */}
          <Card className="max-w-2xl mx-auto bg-slate-800/50 border-slate-600">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Select value={resourceType} onValueChange={setResourceType}>
                  <SelectTrigger className="w-full sm:w-48 bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select resource" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="people" className="text-white hover:bg-slate-600">Characters</SelectItem>
                    <SelectItem value="planets" className="text-white hover:bg-slate-600">Planets</SelectItem>
                    <SelectItem value="starships" className="text-white hover:bg-slate-600">Starships</SelectItem>
                    <SelectItem value="vehicles" className="text-white hover:bg-slate-600">Vehicles</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input
                  type="number"
                  placeholder="Enter ID number"
                  value={resourceId}
                  onChange={(e) => setResourceId(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  min="1"
                />
                
                <Button 
                  onClick={handleSearch}
                  className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold"
                >
                  <Search className="mr-2" size={16} />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-yellow-400/20 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-slate-400">
          <p>Data provided by the Star Wars API (SWAPI)</p>
          <p className="text-sm mt-2">May the Force be with you</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

