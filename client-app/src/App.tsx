import { useGetActivitiesQuery } from 'core/api/activities'

function App() {
  const { data } = useGetActivitiesQuery()

  console.log(data?.[0]?.id)

  return <div>Test</div>
}

export default App
