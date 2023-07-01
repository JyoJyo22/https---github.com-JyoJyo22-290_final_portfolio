import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import StaffPage from './pages/StaffPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';
import KanjiListPage from './pages/KanjiListPage';
import KanjiGoPage from './pages/KanjiGoPage';
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
import KanjiListHeader from './components/KanjiListHeader';
import KanjiGoHeader from './components/KanjiGoHeader';
import products from './data/products';



function App() {
  // pass shared State up to ancestor component
  // these State vars are shared btw KanjiHomePage and KanjiEditPage
  const [kanji, setKanji] = useState([]);
  const [kanjis, setKanjis] = useState([]);
  const [jlpt, setJlpt] = useState(1);

  return (
    <div className="app">
      <BrowserRouter>

        <section className="header-nav">
          <Routes>
            <Route path="/about" element={<HomeHeader />} />
            <Route path="/kanji-list" element={<KanjiListHeader/>} />
            <Route path="/" element={<KanjiGoHeader/>} />
            <Route path="/kanji-create" element={<KanjiGoHeader/>} />
            <Route path="/kanji-edit" element={<KanjiGoHeader/>} />
            <Route path="/projects" element={<GalleryHeader />} />
            {/* <Route path="/staff" element={<StaffHeader />} /> */}
            <Route path="/order" element={<OrderHeader />} />
            <Route path="/contact" element={<ContactHeader />} />
            {/* <Route path="/webdev" element={<WebDevHeader />} /> */}
          </Routes>
          <Nav/>
        </section>

        <Routes>
          <Route path="/kanji-list" element={<IntraNav setJlpt={setJlpt} setKanjis={setKanjis} />} />
          <Route path="/" element={<IntraNav setJlpt={setJlpt} setKanjis={setKanjis} />} />
        </Routes>

          <main>
            <section>
              <Routes>
                <Route path="/about" element={<HomePage />} />
                <Route path="/kanji-list" element={<KanjiListPage jlpt={jlpt}  setJlpt={setJlpt} setKanji={setKanji} kanjis={kanjis} setKanjis={setKanjis} />} />
                <Route path="/" element={<KanjiGoPage jlpt={jlpt} setKanji={setKanji} />} />
                <Route path="/kanji-create" element={<CreateKanjiPage jlpt={jlpt} />} />
                <Route path="/kanji-edit" element={<EditKanjiPage toEditKanji={kanji}/>} />
                <Route path="/projects" element={<GalleryPage />} />
                {/* <Route path="/staff" element={<StaffPage />} /> */}
                {/* <Route path="/order" element={<OrderPage products={products}/>} /> */}
                <Route path="/contact" element={<ContactPage />} />
                {/* <Route path="/webdev" element={<WebDevPage />} /> */}
              </Routes>
            </section>
          </main>

        <footer>
          <p className="footer-p">
              &copy; KANJI GO 2023
          </p>
        </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
