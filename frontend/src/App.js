import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import StaffPage from './pages/StaffPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';
import KanjiHomePage from './pages/KanjiHomePage';
import CreateKanjiPage from './pages/CreateKanjiPage';
import EditKanjiPage from './pages/EditKanjiPage';
import IntraNav from './components/IntraNav';
import HomeHeader from './components/HomeHeader';
import ContactHeader from './components/ContactHeader';
import OrderHeader from './components/OrderHeader';
import StaffHeader from './components/StaffHeader';
import GalleryHeader from './components/GalleryHeader';
import WebDevHeader from './components/WebDevHeader';
import WebDevPage from './pages/WebDevPage';
import KanjiHeader from './components/KanjiHeader';
import products from './data/products';



function App() {
  // pass shared State up to ancestor component
  // these State vars are shared btw KanjiHomePage and KanjiEditPage
  const [kanji, setKanji] = useState([]);

  return (
    <div className="app">
      <BrowserRouter>

        <section className="header-nav">
          <Routes>
            <Route path="/" element={<HomeHeader />} />
            <Route path="/kanji" element={<KanjiHeader/>} />
            <Route path="/kanji-create" element={<KanjiHeader/>} />
            <Route path="/kanji-edit" element={<KanjiHeader/>} />
            <Route path="/projects" element={<GalleryHeader />} />
            <Route path="/staff" element={<StaffHeader />} />
            <Route path="/order" element={<OrderHeader />} />
            <Route path="/contact" element={<ContactHeader />} />
            <Route path="/webdev" element={<WebDevHeader />} />
          </Routes>
          <Nav/>
        </section>

        <Routes>
          <Route path="/webdev" element={<IntraNav />} />
        </Routes>

          <main>
            <section>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/kanji" element={<KanjiHomePage setKanji={setKanji}/>} />
                <Route path="/kanji-create" element={<CreateKanjiPage />} />
                <Route path="/kanji-edit" element={<EditKanjiPage toEditKanji={kanji}/>} />
                <Route path="/projects" element={<GalleryPage />} />
                <Route path="/staff" element={<StaffPage />} />
                <Route path="/order" element={<OrderPage products={products}/>} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/webdev" element={<WebDevPage />} />
              </Routes>
            </section>
          </main>

        <footer>
          <p className="footer-p">
              &copy; JOSEPH HOUGHTON 2023
          </p>
        </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
