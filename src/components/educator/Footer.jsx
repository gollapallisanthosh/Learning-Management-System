import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t px-6 h-14 flex items-center justify-between z-50">
      <div className="flex items-center gap-4">
        <img src={assets.logo} alt="logo" className="w-8 h-8" />

        {/* Vertical line separator */}
        <div className="h-6 w-px bg-gray-400/60"></div>

        <p className="text-xs text-gray-500 whitespace-nowrap">
          Copyright 2025 © GreatStack. All Right Reserved.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a href="#">
          <img src={assets.facebook_icon} alt="Facebook" className="w-5 h-5" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="Twitter" className="w-5 h-5" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="Instagram" className="w-5 h-5" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
