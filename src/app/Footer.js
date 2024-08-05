import React from 'react'

const Footer = () => {
  return (
 <footer className="bg-gray-500 text-white py-6 ">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Пътна помощ Провадия</h2>
          <p className="text-sm">&copy; {new Date().getFullYear()} Пътна помощ Провадия. Всички права запазени.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#start" className="text-gray-300 hover:text-white">Начало</a>
          <a href="#services" className="text-gray-300 hover:text-white">Услуги</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Контакти</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
