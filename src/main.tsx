import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { Contacts } from './components/contacts/Contacts'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Skills />
    <Projects />
    <Contacts />
    <Footer />
  </React.StrictMode>,
)
