"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function WebGIS() {
  const [selectedState, setSelectedState] = useState("Madhya Pradesh")
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [mapLayers, setMapLayers] = useState({
    fraBoundaries: true,
    forestCover: true,
    waterBodies: true,
    settlements: false,
    agriculturalLand: false,
  })

  const toggleLayer = (layer: string) => {
    setMapLayers((prev) => ({
      ...prev,
      [layer]: !prev[layer as keyof typeof prev],
    }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">WebGIS Atlas</h1>
          <p className="text-gray-600">Interactive mapping and spatial analysis of FRA claims and assets</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <Button variant="outline" size="sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export
          </Button>
          <Button size="sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Map Controls */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
                />
              </svg>
              <span>Map Controls</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Location Filters */}
            <div>
              <label className="text-sm font-medium mb-2 block">State</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option>Madhya Pradesh</option>
                <option>Odisha</option>
                <option>Telangana</option>
                <option>Tripura</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">District</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                <option value="">Select district</option>
                <option>Balaghat</option>
                <option>Mandla</option>
                <option>Dindori</option>
              </select>
            </div>

            {/* Map Layers */}
            <div>
              <h3 className="text-sm font-medium mb-3">Map Layers</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm">FRA Boundaries</span>
                  </div>
                  <Switch checked={mapLayers.fraBoundaries} onCheckedChange={() => toggleLayer("fraBoundaries")} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Forest Cover</span>
                  </div>
                  <Switch checked={mapLayers.forestCover} onCheckedChange={() => toggleLayer("forestCover")} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Water Bodies</span>
                  </div>
                  <Switch checked={mapLayers.waterBodies} onCheckedChange={() => toggleLayer("waterBodies")} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Settlements</span>
                  </div>
                  <Switch checked={mapLayers.settlements} onCheckedChange={() => toggleLayer("settlements")} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Agricultural Land</span>
                  </div>
                  <Switch
                    checked={mapLayers.agriculturalLand}
                    onCheckedChange={() => toggleLayer("agriculturalLand")}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Map */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <span className="font-semibold">Interactive Map View</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Button>
                <Button variant="ghost" size="sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Map Container */}
            <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
              {/* Satellite Image Placeholder */}
              <img
                src="/satellite-map-view-of-india-showing-forest-areas-a.jpg"
                alt="Satellite map view"
                className="w-full h-full object-cover"
              />

              {/* Map Overlay Info */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-sm font-medium">Lat: 22.7179, Lng: 75.8333</div>
                <div className="text-xs text-gray-600">Scale: 1:50,000</div>
              </div>

              {/* Active Layers Indicator */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-sm font-medium mb-2">Active Layers</div>
                <div className="space-y-1">
                  {mapLayers.fraBoundaries && (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-xs">FRA Boundaries</span>
                    </div>
                  )}
                  {mapLayers.forestCover && (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Forest Cover</span>
                    </div>
                  )}
                  {mapLayers.waterBodies && (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs">Water Bodies</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Map Markers */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              </div>

              <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
            </div>

            {/* Map Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1,247</div>
                <div className="text-sm text-gray-600">Visible Claims</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">8.5 km²</div>
                <div className="text-sm text-gray-600">Forest Area</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">23</div>
                <div className="text-sm text-gray-600">Villages</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
