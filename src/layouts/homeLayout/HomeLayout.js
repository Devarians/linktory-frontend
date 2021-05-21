import React from 'react'
import Header from '../../blocks/header/Header'
import Footer from '../../blocks/footer/Footer'
import Links from '../../blocks/links/Links
import Collections from '../../pages/homePage/collections/Collections'

export default function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-grow-0"/>
      <main className="container flex-grow flex">
        <Collections/>
        <Links/>
      </main>
      <Footer className="flex-grow-0"/>
    </div>
  )
}
