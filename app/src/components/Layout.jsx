import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'
import { Footer } from './Footer.jsx'
import { Navbar } from './Navbar.jsx'


export default function Layout() {
  return (
    <div className="kerangka">
      <header className="kepala">
        <strong>Daftar Tugas</strong>
        <Navbar />
      </header>
      <main className="isi">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}