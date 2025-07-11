import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Loader2, User, Home, ArrowLeft, ExternalLink } from 'lucide-react'
import { getCharacter, getHomeworld, formatCharacterData, extractIdFromUrl } from '../services/api'
import obiWanError from '../assets/obi-wan-error.png'

const CharacterDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [character, setCharacter] = useState(null)
  const [homeworld, setHomeworld] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch character data
        const characterData = await getCharacter(id)
        const formattedCharacter = formatCharacterData(characterData)
        setCharacter(formattedCharacter)
        
        // Fetch homeworld data (ninja bonus feature)
        if (formattedCharacter.homeworld) {
          const homeworldData = await getHomeworld(formattedCharacter.homeworld)
          setHomeworld(homeworldData)
        }
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacterData()
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <Loader2 className="animate-spin text-yellow-400 mx-auto mb-4" size={48} />
          <p className="text-slate-300">Loading character data...</p>
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
              The character you're looking for doesn't exist in our database. 
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

  const homeworldId = homeworld ? extractIdFromUrl(character.homeworld) : null

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
            <User className="mr-3" size={32} />
            {character.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Physical Characteristics */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Physical Characteristics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Height:</span>
                  <span className="text-white">{character.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Mass:</span>
                  <span className="text-white">{character.mass}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Hair Color:</span>
                  <span className="text-white capitalize">{character.hairColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Eye Color:</span>
                  <span className="text-white capitalize">{character.eyeColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Skin Color:</span>
                  <span className="text-white capitalize">{character.skinColor}</span>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Birth Year:</span>
                  <span className="text-white">{character.birthYear}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Gender:</span>
                  <span className="text-white capitalize">{character.gender}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Homeworld:</span>
                  <div className="flex items-center">
                    {homeworld ? (
                      <Link 
                        to={`/planet/${homeworldId}`}
                        className="text-yellow-400 hover:text-yellow-300 flex items-center"
                      >
                        <Home className="mr-1" size={16} />
                        {homeworld.name}
                        <ExternalLink className="ml-1" size={14} />
                      </Link>
                    ) : (
                      <span className="text-white">Loading...</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Films */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Film Appearances</h3>
            <div className="flex flex-wrap gap-2">
              {character.films.map((film, index) => (
                <Badge key={index} variant="secondary" className="bg-yellow-600/20 text-yellow-400 border-yellow-600/50">
                  Film {extractIdFromUrl(film)}
                </Badge>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          {(character.vehicles.length > 0 || character.starships.length > 0) && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Vehicles & Starships</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {character.vehicles.length > 0 && (
                  <div>
                    <h4 className="text-slate-400 mb-2">Vehicles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {character.vehicles.map((vehicle, index) => (
                        <Badge key={index} variant="outline" className="border-slate-500 text-slate-300">
                          Vehicle {extractIdFromUrl(vehicle)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {character.starships.length > 0 && (
                  <div>
                    <h4 className="text-slate-400 mb-2">Starships:</h4>
                    <div className="flex flex-wrap gap-2">
                      {character.starships.map((starship, index) => (
                        <Badge key={index} variant="outline" className="border-slate-500 text-slate-300">
                          Starship {extractIdFromUrl(starship)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default CharacterDetail

