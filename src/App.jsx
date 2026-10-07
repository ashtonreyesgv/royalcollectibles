import { Navigate, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import NewComics from './pages/NewComics'
import PullList from './pages/PullList'
import Services from './pages/Services'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Visit from './pages/Visit'
import TextUpdates from './pages/TextUpdates'
import NotFound from './pages/NotFound'

// Paths from the old WordPress site, so existing links and search results still land somewhere useful
const legacyRedirects = {
  '/about-us': '/about',
  '/contact-info': '/visit',
  '/store-hours': '/visit',
  '/social-media': '/visit',
  '/free-pull-list-service': '/pull-list',
  '/new-releases': '/new-comics',
  '/previews-final-orders-due': '/new-comics',
  '/services-offered': '/services',
  '/photo-gallery': '/gallery',
  '/upcoming-events': '/events',
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new-comics" element={<NewComics />} />
        <Route path="pull-list" element={<PullList />} />
        <Route path="services" element={<Services />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="visit" element={<Visit />} />
        <Route path="text-updates" element={<TextUpdates />} />
        {Object.entries(legacyRedirects).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
