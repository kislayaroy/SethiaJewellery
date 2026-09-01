import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import { earrings, rings } from './data'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/rings"
          element={
            <CollectionPage
              title="Gold rings"
              eyebrow="22K · Weight in grams"
              lead="Sample 22 karat rings in the style of Tanishq listings — karat, net gold weight, and size. Final price follows the day’s gold rate plus making charges."
              items={rings}
            />
          }
        />
        <Route
          path="/earrings"
          element={
            <CollectionPage
              title="Gold earrings"
              eyebrow="22K · Weight in grams"
              lead="Retail earrings available in store. Price follows the day’s gold rate plus making charges."
              items={earrings}
            />
          }
        />
      </Route>
    </Routes>
  )
}

export default App
