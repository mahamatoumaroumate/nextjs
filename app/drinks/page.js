import DrinksList from '@/components/DrinksList'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch drinks...')
  }
  const data = await response.json()
  return data
}
const DrinksPage = async () => {
  const data = await fetchData()
  return (
    <ul className='grid sm:grid-cols-2 gap-6 mt-6 w-full'>
      <DrinksList drinks={data.drinks} />
    </ul>
  )
}
export default DrinksPage
