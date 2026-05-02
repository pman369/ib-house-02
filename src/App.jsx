import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Features from './components/Features'
import Amenities from './components/Amenities'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Real Room Images
import roomNatural from './assets/gallery/room-natural.jpeg'
import roomExecutive from './assets/gallery/room-blue.jpeg'
import roomPresidential from './assets/gallery/room-purple.jpeg'
import exterior from './assets/gallery/exterior-main.jpeg'
import reception from './assets/gallery/reception-warm.jpeg'
import roomGreen from './assets/gallery/room-green.jpeg'

// Data
const WHATSAPP_LINK = 'https://wa.me/2348145603733?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20IB%20House%2002.%20Please%20provide%20more%20details.'
const LOGO_URL = 'https://iili.io/fBciH9j.png'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#features', label: 'Features' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#contact', label: 'Contact' }
]

const HERO_IMAGES = [
  exterior,
  roomNatural,
  reception,
  roomGreen
]

const ROOM_TYPES = [
  {
    name: 'Deluxe Room',
    price: '₦15,000',
    image: roomNatural,
    features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included', 'Smart TV']
  },
  {
    name: 'Executive Suite',
    price: '₦20,000',
    image: roomExecutive,
    features: ['Separate Living Area', 'Panoramic View', 'Premium Amenities', 'Concierge Service', 'Minibar']
  },
  {
    name: 'Executive Room',
    price: '₦20,000',
    image: roomPresidential,
    features: ['Private Terrace', 'Butler Service', 'Luxury Interior', 'Airport Transfer', 'Jacuzzi']
  }
]

const AMENITIES = [
  { icon: 'wifi', name: 'Free WiFi', description: 'High-speed fibre internet throughout the property.' },
  { icon: 'coffee', name: 'Gourmet Dining', description: 'Premium in-house catering & dining options.' },
  { icon: 'shield', name: '24/7 Security', description: 'Professional security personnel and CCTV surveillance.' }
]

const FEATURES = [
  {
    title: 'Uninterrupted Power Supply',
    content: 'Experience 24/7 electricity with our dedicated industrial generators and solar backup systems, ensuring your comfort is never compromised. We guarantee zero downtime during your stay.'
  },
  {
    title: 'Prime Location & Accessibility',
    content: 'Located at 2 Jehova St, Ikosi Ketu, Lagos 105102, Lagos, we are centrally situated, offering easy access to major business districts, shopping malls, and entertainment hubs while maintaining a serene environment.'
  },
  {
    title: 'Daily Housekeeping & Concierge',
    content: 'Our professional housekeeping team ensures your space remains pristine with daily cleaning services, fresh linens, and premium toiletries. Our concierge is available 24/7 to assist with any requests.'
  },
  {
    title: 'Smart Home Integration',
    content: 'Enjoy modern living with smart TVs, automated lighting systems, and keyless entry for a seamless and secure experience. High-speed internet keeps you connected to what matters.'
  }
]

const TESTIMONIALS = [
  {
    name: 'Tunde Adebayo',
    rating: 5,
    text: 'Exceptional service and luxurious accommodations. The attention to detail at IB House 02 is impeccable.',
    avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop'
  },
  {
    name: 'Amina Ibrahim',
    rating: 5,
    text: 'Perfect location with stunning views. The staff went above and beyond to make our stay comfortable and secure.',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6c5b0adcc2c?w=400&h=400&fit=crop'
  },
  {
    name: 'Chioma Okeke',
    rating: 5,
    text: 'World-class amenities and breathtaking architecture. Truly a gold standard for short-stays in Lagos.',
    avatar: 'https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?w=400&h=400&fit=crop'
  }
]

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-amber-500 selection:text-black">
      <Header navLinks={NAV_LINKS} whatsappLink={WHATSAPP_LINK} logoUrl={LOGO_URL} />

      <main>
        <Hero images={HERO_IMAGES} whatsappLink={WHATSAPP_LINK} />
        <Rooms roomTypes={ROOM_TYPES} whatsappLink={WHATSAPP_LINK} />
        <Gallery />
        <Features features={FEATURES} />
        <Amenities amenities={AMENITIES} />
        <Testimonials testimonials={TESTIMONIALS} />
        <Contact whatsappLink={WHATSAPP_LINK} />
      </main>

      <Footer navLinks={NAV_LINKS} logoUrl={LOGO_URL} />
    </div>
  )
}

export default App
