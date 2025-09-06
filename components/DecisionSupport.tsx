"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const schemeRecommendations = [
  {
    id: 1,
    scheme: "PM-KISAN",
    priority: "High",
    description: "Direct income support for small farmers",
    eligibleHouseholds: 1247,
    budgetRequired: "₹74.82 Cr",
    expectedImpact: "Direct financial support to 89% of FRA households",
    icon: "💰",
    color: "bg-red-100 text-red-800",
  },
  {
    id: 2,
    scheme: "Jal Jeevan Mission",
    priority: "High",
    description: "Functional household tap connections",
    eligibleHouseholds: 892,
    budgetRequired: "₹156.4 Cr",
    expectedImpact: "Clean water access for 64% of FRA villages",
    icon: "💧",
    color: "bg-red-100 text-red-800",
  },
  {
    id: 3,
    scheme: "MGNREGA",
    priority: "Medium",
    description: "Rural employment guarantee scheme",
    eligibleHouseholds: 1456,
    budgetRequired: "₹89.2 Cr",
    expectedImpact: "Employment opportunities for 78% of tribal families",
    icon: "🔨",
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 4,
    scheme: "DAJGUA",
    priority: "High",
    description: "Development of particularly vulnerable tribal groups",
    eligibleHouseholds: 234,
    budgetRequired: "₹45.6 Cr",
    expectedImpact: "Targeted support for most vulnerable communities",
    icon: "🏠",
    color: "bg-red-100 text-red-800",
  },
]

export function DecisionSupport() {
  const [selectedVillage, setSelectedVillage] = useState("Baikunth Village, Balaghat")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Decision Support System</h1>
          <p className="text-gray-600">AI-powered recommendations for government scheme convergence</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <select
            className="px-4 py-2 border border-gray-300 rounded-md"
            value={selectedVillage}
            onChange={(e) => setSelectedVillage(e.target.value)}
          >
            <option>Baikunth Village, Balaghat</option>
            <option>Mandla Village, Mandla</option>
            <option>Dindori Village, Dindori</option>
          </select>
          <Button size="sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Button>
        </div>
      </div>

      {/* Village Analysis Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
            <div className="text-sm text-gray-600">Total Households</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
            <div className="text-sm text-gray-600">FRA Coverage</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">₹365 Cr</div>
            <div className="text-sm text-gray-600">Total Budget Potential</div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button className="border-b-2 border-blue-500 py-2 px-1 text-sm font-medium text-blue-600">
            Village Analysis
          </button>
          <button className="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
            Household Priority
          </button>
          <button className="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
            Scheme Convergence
          </button>
        </nav>
      </div>

      {/* Scheme Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {schemeRecommendations.map((scheme) => (
          <Card key={scheme.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{scheme.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{scheme.scheme}</CardTitle>
                    <CardDescription>{scheme.description}</CardDescription>
                  </div>
                </div>
                <Badge className={scheme.color}>{scheme.priority}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-600">Eligible Households</div>
                  <div className="text-xl font-bold">{scheme.eligibleHouseholds.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Budget Required</div>
                  <div className="text-xl font-bold">{scheme.budgetRequired}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-medium text-gray-900 mb-1">Expected Impact:</div>
                <div className="text-sm text-gray-600">{scheme.expectedImpact}</div>
              </div>

              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  View Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
                <Button size="sm">Generate Report</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Implementation Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Implementation Timeline</CardTitle>
          <CardDescription>Phased approach for optimal scheme convergence</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Phase 1: Immediate Priority (0-3 months)</h4>
                <p className="text-sm text-gray-600 mt-1">
                  PM-KISAN and Jal Jeevan Mission implementation for maximum impact
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="secondary">2,139 households</Badge>
                  <Badge variant="secondary">₹231.22 Cr budget</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-green-600">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Phase 2: Medium Priority (3-6 months)</h4>
                <p className="text-sm text-gray-600 mt-1">MGNREGA rollout for employment generation</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="secondary">1,456 households</Badge>
                  <Badge variant="secondary">₹89.2 Cr budget</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-purple-600">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Phase 3: Specialized Support (6-12 months)</h4>
                <p className="text-sm text-gray-600 mt-1">DAJGUA for particularly vulnerable tribal groups</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="secondary">234 households</Badge>
                  <Badge variant="secondary">₹45.6 Cr budget</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
