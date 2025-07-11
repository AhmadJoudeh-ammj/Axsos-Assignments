import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Loader2, Globe, ArrowLeft } from 'lucide-react'
import { getPlanet, formatPlanetData, extractIdFromUrl } from '../services/api'
import obiWanError from '../assets/obi-wan-error.png'

const PlanetDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [planet, setPlanet] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const planetData = await getPlanet(id)
        const formattedPlanet = formatPlanetData(planetData)
        setPlanet(formattedPlanet)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPlanetData()
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <Loader2 className="animate-spin text-yellow-400 mx-auto mb-4" size={48} />
          <p className="text-slate-300">Loading planet data...</p>
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
              The planet you're looking for doesn't exist in our database. 
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
            <Globe className="mr-3" size={32} />
            {planet.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Physical Characteristics */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Physical Characteristics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Diameter:</span>
                  <span className="text-white">{planet.diameter}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Gravity:</span>
                  <span className="text-white">{planet.gravity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Climate:</span>
                  <span className="text-white capitalize">{planet.climate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Terrain:</span>
                  <span className="text-white capitalize">{planet.terrain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Surface Water:</span>
                  <span className="text-white">{planet.surfaceWater}</span>
                </div>
              </div>
            </div>

            {/* Orbital Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Orbital Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Rotation Period:</span>
                  <span className="text-white">{planet.rotationPeriod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Orbital Period:</span>
                  <span className="text-white">{planet.orbitalPeriod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Population:</span>
                  <span className="text-white">{planet.population}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Films */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Film Appearances</h3>
            <div className="flex flex-wrap gap-2">
              {planet.films.map((film, index) => (
                <Badge key={index} variant="secondary" className="bg-yellow-600/20 text-yellow-400 border-yellow-600/50">
                  Film {extractIdFromUrl(film)}
                </Badge>
              ))}
            </div>
          </div>

          {/* Notable Residents */}
          {planet.residents.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Notable Residents</h3>
              <div className="flex flex-wrap gap-2">
                {planet.residents.map((resident, index) => (
                  <Badge key={index} variant="outline" className="border-slate-500 text-slate-300">
                    Character {extractIdFromUrl(resident)}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Click on character IDs in the search above to learn more about these residents
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default PlanetDetail

