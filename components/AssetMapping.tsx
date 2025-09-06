"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const analysisData = [
  { type: "Forest Cover", detected: 14650, total: 15420, accuracy: 95.2, color: "bg-green-500" },
  { type: "Water Bodies", detected: 3125, total: 3280, accuracy: 95.3, color: "bg-blue-500" },
  { type: "Agricultural Land", detected: 8520, total: 8950, accuracy: 95.2, color: "bg-purple-500" },
  { type: "Settlements", detected: 1198, total: 1250, accuracy: 95.8, color: "bg-orange-500" },
]

export function AssetMapping() {
  const [selectedAnalysis, setSelectedAnalysis] = useState("forest")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Asset Mapping</h1>
          <p className="text-gray-600">Satellite imagery analysis using computer vision and machine learning</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <Button variant="outline" size="sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh Analysis
          </Button>
          <Button size="sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Button>
        </div>
      </div>

      {/* Analysis Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analysisData.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}>
                  {item.type === "Forest Cover" && (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  )}
                  {item.type === "Water Bodies" && (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                  {item.type === "Agricultural Land" && (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  )}
                  {item.type === "Settlements" && (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  )}
                </div>
                <Badge variant="secondary">{item.accuracy}% accuracy</Badge>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.type}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Detected: {item.detected.toLocaleString()}</span>
                  <span>Total: {item.total.toLocaleString()}</span>
                </div>
                <Progress value={(item.detected / item.total) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Satellite Analysis */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <span className="font-semibold">Satellite Imagery Analysis</span>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant={selectedAnalysis === "forest" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedAnalysis("forest")}
                >
                  Forest
                </Button>
                <Button
                  variant={selectedAnalysis === "water" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedAnalysis("water")}
                >
                  Water
                </Button>
                <Button
                  variant={selectedAnalysis === "agriculture" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedAnalysis("agriculture")}
                >
                  Agriculture
                </Button>
                <Button
                  variant={selectedAnalysis === "settlement" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedAnalysis("settlement")}
                >
                  Settlement
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Satellite Image with Analysis Overlay */}
            <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/satellite-map-view-of-india-showing-forest-areas-a.jpg"
                alt="Satellite analysis view"
                className="w-full h-full object-cover"
              />

              {/* Analysis Overlay */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-sm font-medium">NDVI Analysis: Dense Forest Detected</div>
                <div className="text-xs text-gray-600">Confidence: 94.5%</div>
              </div>

              {/* Detection Markers */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 border-2 border-green-400 bg-green-400/20 rounded-full animate-pulse"></div>
              </div>

              <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-blue-400 bg-blue-400/20 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analysis Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span>Analysis Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Data Collection Status */}
            <div>
              <h4 className="font-medium mb-3">Data Collection</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">AI Processing</span>
                  <Badge>Complete</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Quality Check</span>
                  <Badge variant="secondary">Verified</Badge>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h4 className="font-medium mb-3">Technical Specifications</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Sentinel-2 imagery (10m resolution)</div>
                <div>• CNN-based classification model</div>
                <div>• 95%+ accuracy validation</div>
                <div>• Multi-temporal analysis</div>
                <div>• Ground truth verification</div>
              </div>
            </div>

            {/* Current Dataset */}
            <div>
              <h4 className="font-medium mb-3">Current Dataset</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Images Processed</span>
                  <span className="font-medium">2,847</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Area Covered</span>
                  <span className="font-medium">15,420 km²</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Last Updated</span>
                  <span className="font-medium">2 hours ago</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
