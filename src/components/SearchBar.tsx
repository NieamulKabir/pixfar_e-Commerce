
import { setSearchTerm } from '@/redux/features/products/productSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'


export default function SearchBar() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    dispatch(setSearchTerm(value))
  }

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={handleSearch}
      className="w-full max-w-16 md:max-w-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}