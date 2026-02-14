import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Database, Globe, Bot, Lock, ArrowRight, CheckCircle, Menu, X, Clock, Users, TrendingUp } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>FIRESTAR09_10 - Texture Packs & Content Creator</title>
        <meta name="description" content="FIRESTAR09_10 - Check out my latest texture packs, YouTube videos, and commission work for Minecraft content creators." />
      </Head>

      <div className="min-h-screen bg-firestar-dark text-white overflow-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-firestar-green rounded-lg flex items-center justify-center">
                  <img src="/logo.jpg" alt="FIRESTAR09_10 Logo" className="w-10 h-10 rounded-lg" />
                </div>
                <span className="text-xl font-bold font-logo">FIRESTAR09_10</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-firestar-green transition-colors">Home</a>
                <a href="#texturepacks" className="hover:text-firestar-green transition-colors">Texture Packs</a>
                <a href="#videos" className="hover:text-firestar-green transition-colors">Videos</a>
                <a href="#commissions" className="hover:text-firestar-green transition-colors">Commissions</a>
                <a href="#contact" className="hover:text-firestar-green transition-colors">Contact</a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white hover:text-firestar-green transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden border-t border-white/10 mt-4 pt-4"
                >
                  <div className="flex flex-col space-y-4">
                    <a href="/" className="text-firestar-green transition-colors">Home</a>
                    <a href="#texturepacks" className="hover:text-firestar-green transition-colors">Texture Packs</a>
                    <a href="#videos" className="hover:text-firestar-green transition-colors">Videos</a>
                    <a href="#commissions" className="hover:text-firestar-green transition-colors">Commissions</a>
                    <a href="#contact" className="hover:text-firestar-green transition-colors">Contact</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-fire-orange/10 to-transparent"></div>
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">FIRESTAR09_10</span><br />
                Texture Packs & Content
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Creating amazing Minecraft texture packs and content. Check out my latest work, 
                YouTube videos, and commission services for the Minecraft community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#texturepacks" className="firestar-button text-lg">
                  View Texture Packs
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </a>
                <a href="#commissions" className="border border-firestar-green text-firestar-green px-8 py-3 rounded-lg hover:bg-firestar-green hover:text-firestar-dark transition-all duration-300 text-lg">
                  Get Commission
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">40+</div>
                <div className="text-gray-400">Texture Packs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">4K+</div>
                <div className="text-gray-400">YouTube Views</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400">Commission Support</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Latest Texturepacks Section */}
        <section id="texturepacks" className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">LATEST TEXTUREPACKS</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Check out my latest texturepacks!
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="firestar-card group"
              >
                <div className="aspect-video bg-gradient-to-br from-fire-orange/20 to-fire-red/5 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="https://cdn.modrinth.com/data/MVJ5tm8O/images/4ca32690f413916eeba6e6ea1a10e6adf627dab7.png" 
                    alt="BETTER DEFAULT PVP TEXTUREPACK Banner" 
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <div className="text-center">
                  <p className="text-gray-300 mb-6">
                    A carefully crafted texture pack that enhances the default Minecraft textures 
                    while maintaining the classic feel. Perfect for PvP with improved visibility 
                    and performance optimizations.
                  </p>
                  <a 
                    href="https://modrinth.com/resourcepack/better-default-16x" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="firestar-button inline-flex items-center"
                  >
                    Download on Modrinth
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Shockbyte Hosting Official Partner Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-fire-orange/5">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="firestar-card p-12 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="gradient-text">Shockbyte Hosting</span><br />
                    Official Partner
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    Get 25% off your servers using code "fire"
                  </p>
                  <p className="text-gray-300 mb-8">
                    As an official Shockbyte partner, I can offer you exclusive discounts on 
                    high-quality game server hosting for popular titles like Minecraft, Rust, ARK, Valheim, 
                    Terraria, CS:GO, Palworld, and 60+ more games. Perfect for gaming communities and content creators.
                  </p>
                  <a 
                    href="https://shockbyte.com/partner/firestar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="firestar-button inline-flex items-center text-lg"
                  >
                    LET'S GO!
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="w-full h-32 bg-gradient-to-br from-fire-orange/20 to-fire-red/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <img 
                      src="/shockbyte.png" 
                      alt="Shockbyte Server Hosting" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* YouTube Videos Section */}
        <section id="videos" className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">WATCH MY YOUTUBE VIDEOS</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Check out some of my latest youtube videos!
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="firestar-card group"
                >
                  <div className="aspect-video bg-gradient-to-br from-fire-orange/20 to-fire-red/5 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src="https://img.youtube.com/vi/EbuhfHomJdo/maxresdefault.jpg" 
                      alt="Video Thumbnail" 
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <a 
                    href="https://www.youtube.com/watch?v=EbuhfHomJdo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="firestar-button inline-flex items-center mt-4"
                  >
                    Watch Video
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="firestar-card group"
                >
                  <div className="aspect-video bg-gradient-to-br from-fire-orange/20 to-fire-red/5 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src="https://img.youtube.com/vi/p6MyVVHJmJU/maxresdefault.jpg" 
                      alt="Video Thumbnail" 
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <a 
                    href="https://www.youtube.com/watch?v=p6MyVVHJmJU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="firestar-button inline-flex items-center mt-4"
                  >
                    Watch Video
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              <div className="text-center mt-12">
                <a 
                  href="https://youtube.com/@firestar09_10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="firestar-button inline-flex items-center text-lg"
                >
                  Subscribe on YouTube
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Commissions Section */}
        <section id="commissions" className="py-20 px-6 bg-gradient-to-b from-transparent to-fire-orange/5">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="firestar-card p-12 text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Commissions</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Hey, my work doesn't really revolve around commissions, but I can surely take some. 
                If you happen to be interested, just contact me on Discord and we can discuss the details over there. 
                Also, if you happen to be a YouTuber or content creator, you might get custom texture packs 
                for free more as a collab than a commission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://discord.com/invite/stahW4dRae" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="firestar-button text-lg inline-flex items-center"
                >
                  CONTACT ME ON DISCORD
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#contact" className="border border-firestar-green text-firestar-green px-8 py-3 rounded-lg hover:bg-firestar-green hover:text-firestar-dark transition-all duration-300 text-lg">
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-6 bg-black">
          <div className="container mx-auto">
            {/* Social Media Icons */}
            <div className="flex items-center justify-center mb-8">
              <a href="mailto:firestar09_@example.com" className="text-white hover:text-firestar-green transition-colors mx-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@firestar09_10" target="_blank" rel="noopener noreferrer" className="text-white hover:text-firestar-green transition-colors mx-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 200 200">
                  <path d="M107.867 13.426v118.058c0 13.042-10.575 23.608-23.609 23.608-13.041 0-23.608-10.575-23.608-23.608 0-13.042 10.575-23.608 23.608-23.608V76.392c-30.425 0-55.091 24.667-55.091 55.092s24.666 55.092 55.091 55.092 55.092-24.667 55.092-55.092V76.392l1.658.834a66.6 66.6 0 0 0 29.817 7.041V52.776l-.942-.234c-17.95-4.483-30.541-20.617-30.541-39.116z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@firestar09_10" target="_blank" rel="noopener noreferrer" className="text-white hover:text-firestar-green transition-colors mx-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 200 200">
                  <path d="m83.333 125 43.25-25-43.25-25zm96.334-65.25c1.083 3.917 1.833 9.167 2.333 15.833.583 6.667.833 12.417.833 17.417l.5 7c0 18.25-1.333 31.667-3.666 40.25-2.084 7.5-6.917 12.333-14.417 14.417-3.917 1.083-11.083 1.833-22.083 2.333-10.834.583-20.75.833-29.917.833l-13.25.5c-34.917 0-56.667-1.333-65.25-3.666-7.5-2.084-12.333-6.917-14.417-14.417-1.083-3.917-1.833-9.167-2.333-15.833-.583-6.667-.833-12.417-.833-17.417l-.5-7c0-18.25 1.333-31.667 3.666-40.25 2.084-7.5 6.917-12.333 14.417-14.417C38.667 44.25 45.833 43.5 56.833 43c10.834-.583 20.75-.833 29.917-.833l13.25-.5c34.917 0 56.667 1.333 65.25 3.666 7.5 2.084 12.333 6.917 14.417 14.417"/>
                </svg>
              </a>
              <a href="https://discord.gg/stahW4dRae" target="_blank" rel="noopener noreferrer" className="text-white hover:text-firestar-green transition-colors mx-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 127.14 96.36">
                  <g>
                    <g>
                      <path d="M107.7 8.07A105.2 105.2 0 0 0 81.47 0a72 72 0 0 0-3.36 6.83 97.7 97.7 0 0 0-29.11 0A72 72 0 0 0 45.64 0a106 106 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.7 105.7 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.4 68.4 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.7 68.7 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.3 105.3 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15M42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69m42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69"/>
                    </g>
                  </g>
                </svg>
              </a>
            </div>

            {/* Account Links */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <a href="https://www.planetminecraft.com/member/firestar09_10/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-firestar-green transition-colors">PMC Account</a>
              <div className="h-6 w-px bg-white"></div>
              <a href="https://modrinth.com/user/FIRESTAR09_10" target="_blank" rel="noopener noreferrer" className="text-white hover:text-firestar-green transition-colors">Modrinth Account</a>
              <div className="h-6 w-px bg-white"></div>
              <a href="https://www.curseforge.com/members/firestar09_10/projects" target="_blank" rel="noopener noreferrer" className="text-white hover:text-firestar-green transition-colors">Curseforge Account</a>
              <div className="h-6 w-px bg-white"></div>
              <a href="https://shockbyte.com/partner/firestar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-firestar-green transition-colors">Shockbyte Partner</a>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
