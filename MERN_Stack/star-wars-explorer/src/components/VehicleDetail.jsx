import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Loader2, Car, ArrowLeft } from 'lucide-react'
import { getVehicle, formatVehicleData, extractIdFromUrl } from '../services/api'
import obiWanError from '../assets/obi-wan-error.png'

const VehicleDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [vehicle, setVehicle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const vehicleData = await getVehicle(id)
        const formattedVehicle = formatVehicleData(vehicleData)
        setVehicle(formattedVehicle)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchVehicleData()
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <Loader2 className="animate-spin text-yellow-400 mx-auto mb-4" size={48} />
          <p className="text-slate-300">Loading vehicle data...</p>
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
              The vehicle you're looking for doesn't exist in our database. 
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
            <Car className="mr-3" size={32} />
            {vehicle.name}
          </CardTitle>
          <p className="text-slate-300 text-lg">{vehicle.model}</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Technical Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Class:</span>
                  <span className="text-white capitalize">{vehicle.vehicleClass}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Manufacturer:</span>
                  <span className="text-white">{vehicle.manufacturer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Length:</span>
                  <span className="text-white">{vehicle.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cost:</span>
                  <span className="text-white">{vehicle.costInCredits} credits</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Max Speed:</span>
                  <span className="text-white">{vehicle.maxAtmospheringSpeed}</span>
                </div>
              </div>
            </div>

            {/* Capacity & Performance */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Capacity & Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Crew:</span>
                  <span className="text-white">{vehicle.crew}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Passengers:</span>
                  <span className="text-white">{vehicle.passengers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cargo Capacity:</span>
                  <span className="text-white">{vehicle.cargoCapacity} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Consumables:</span>
                  <span className="text-white">{vehicle.consumables}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Films */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Film Appearances</h3>
            <div className="flex flex-wrap gap-2">
              {vehicle.films.map((film, index) => (
                <Badge key={index} variant="secondary" className="bg-yellow-600/20 text-yellow-400 border-yellow-600/50">
                  Film {extractIdFromUrl(film)}
                </Badge>
              ))}
            </div>
          </div>

          {/* Pilots */}
          {vehicle.pilots.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Known Pilots</h3>
              <div className="flex flex-wrap gap-2">
                {vehicle.pilots.map((pilot, index) => (
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

export default VehicleDetail

