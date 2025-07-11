import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Loader2, Rocket, ArrowLeft } from 'lucide-react'
import { getStarship, formatStarshipData, extractIdFromUrl } from '../services/api'
import obiWanError from '../assets/obi-wan-error.png'

const StarshipDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [starship, setStarship] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStarshipData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const starshipData = await getStarship(id)
        const formattedStarship = formatStarshipData(starshipData)
        setStarship(formattedStarship)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchStarshipData()
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <Loader2 className="animate-spin text-yellow-400 mx-auto mb-4" size={48} />
          <p className="text-slate-300">Loading starship data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-red-900/20 border-red-500/50">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <img 
                src={obiWanError} 
                alt="Obi-Wan Kenobi - These aren't the droids you're looking for"
                className="mx-auto rounded-lg mb-4 max-w-sm"
              />
            </div>
            <h2 className="text-2xl font-bold text-red-400 mb-4">
              These aren't the droids you're looking for
            </h2>
            <p className="text-slate-300 mb-6">
              The starship you're looking for doesn't exist in our database. 
              Perhaps the archives are incomplete?
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-yellow-600 hover:bg-yellow-700 text-black"
            >
              <ArrowLeft className="mr-2" size={16} />
              Return Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button 
        onClick={() => navigate('/')}
        className="mb-6 bg-slate-700 hover:bg-slate-600 text-white"
      >
        <ArrowLeft className="mr-2" size={16} />
        Back to Search
      </Button>

      <Card className="bg-slate-800/50 border-slate-600">
        <CardHeader>
          <CardTitle className="flex items-center text-yellow-400 text-3xl">
            <Rocket className="mr-3" size={32} />
            {starship.name}
          </CardTitle>
          <p className="text-slate-300 text-lg">{starship.model}</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Technical Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Class:</span>
                  <span className="text-white">{starship.starshipClass}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Manufacturer:</span>
                  <span className="text-white">{starship.manufacturer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Length:</span>
                  <span className="text-white">{starship.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cost:</span>
                  <span className="text-white">{starship.costInCredits} credits</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Max Speed:</span>
                  <span className="text-white">{starship.maxAtmospheringSpeed}</span>
                </div>
              </div>
            </div>

            {/* Performance & Capacity */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Performance & Capacity</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Hyperdrive Rating:</span>
                  <span className="text-white">{starship.hyperdriveRating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">MGLT:</span>
                  <span className="text-white">{starship.MGLT}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Crew:</span>
                  <span className="text-white">{starship.crew}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Passengers:</span>
                  <span className="text-white">{starship.passengers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cargo Capacity:</span>
                  <span className="text-white">{starship.cargoCapacity} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Consumables:</span>
                  <span className="text-white">{starship.consumables}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Films */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Film Appearances</h3>
            <div className="flex flex-wrap gap-2">
              {starship.films.map((film, index) => (
                <Badge key={index} variant="secondary" className="bg-yellow-600/20 text-yellow-400 border-yellow-600/50">
                  Film {extractIdFromUrl(film)}
                </Badge>
              ))}
            </div>
          </div>

          {/* Pilots */}
          {starship.pilots.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Known Pilots</h3>
              <div className="flex flex-wrap gap-2">
                {starship.pilots.map((pilot, index) => (
                  <Badge key={index} variant="outline" className="border-slate-500 text-slate-300">
                    Character {extractIdFromUrl(pilot)}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Click on character IDs in the search above to learn more about these pilots
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default StarshipDetail

