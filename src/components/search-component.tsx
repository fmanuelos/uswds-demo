"use client"

import { Search } from "@/components/ui/search"

export function SearchExamples() {
  const handleSearch = (value: string) => {
    console.log("Search value:", value)
  }

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 font-merriweather">Search</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Default Search</h3>
          <Search onSearch={handleSearch} />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Large Search</h3>
          <Search size="large" onSearch={handleSearch} />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Icon-only search</h3>
          <Search iconOnly onSearch={handleSearch} />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Custom button text</h3>
          <Search buttonText="Find" onSearch={handleSearch} />
        </div>
      </div>
    </section>
  )
}