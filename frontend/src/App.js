import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import KanjiFooter from './components/KanjiFooter';
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
  const [kanji, setKanji] = useState( {
    kanji: "ご",
    romaji: "go",
    hint: "5",
    section: 1
  });
  const [kanjis, setKanjis] = useState([]);
  const [jlpt, setJlpt] = useState(1);

  const [roman, setRoman] = useState(false);
  const [hinted, setHinted] = useState(false);

  const [imageTxt, setImageTxt] = useState('');
  const [imageURL, setImageURL] = useState('default URL');

  // RETRIEVE the entire list of kanji
  const loadKanji = async (jlpt) => {
  const response = await fetch(`/get/${jlpt}`, { method: 'GET' });         // JLPT param turns into a string here
  const newKanjis = await response.json();
  setKanjis(newKanjis);
  }

  // LOAD all the kanji
  useEffect(() => {
    // const str_jlpt = jlpt.toString();
    loadKanji(jlpt);
}, [jlpt]);

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
          <Nav setImageURL={setImageURL}/>
        </section>

        <Routes>
          <Route path="/kanji-list" element={
          <IntraNav 
            jlpt={jlpt} 
            setJlpt={setJlpt} 
            setKanjis={setKanjis} 
            setKanji={setKanji} 
            setImageURL={setImageURL}
            setRoman={setRoman}
            setHinted={setHinted}
            />} 
          />
          <Route path="/" element={
          <IntraNav 
            jlpt={jlpt} 
            setJlpt={setJlpt} 
            setKanjis={setKanjis} 
            setKanji={setKanji} 
            setImageURL={setImageURL}
            setRoman={setRoman}
            setHinted={setHinted}
            />} 
          />
        </Routes>

          <main>
            <section>
              <Routes>
                <Route path="/about" element={<HomePage />} />
                <Route path="/kanji-list" element={
                  <KanjiListPage 
                    jlpt={jlpt}  
                    setJlpt={setJlpt} 
                    setKanji={setKanji} 
                    kanjis={kanjis} 
                    setKanjis={setKanjis} 
                  />} 
                />
                <Route path="/" element={
                  <KanjiGoPage 
                    jlpt={jlpt} 
                    kanji={kanji} 
                    setKanjis={setKanjis} 
                    roman={roman}
                    setRoman={setRoman}
                    hinted={hinted}
                    setHinted={setHinted}
                    imageTxt={imageTxt}
                    setImageTxt={setImageTxt}
                    imageURL={imageURL}
                    setImageURL={setImageURL}
                  />} 
                />
                <Route path="/kanji-create" element={<CreateKanjiPage jlpt={jlpt} setKanjis={setKanjis} />} />
                <Route path="/kanji-edit" element={<EditKanjiPage jlpt={jlpt} toEditKanji={kanji} setKanjis={setKanjis}/>} />
                <Route path="/projects" element={<GalleryPage />} />
                {/* <Route path="/staff" element={<StaffPage />} /> */}
                {/* <Route path="/order" element={<OrderPage products={products}/>} /> */}
                <Route path="/contact" element={<ContactPage />} />
                {/* <Route path="/webdev" element={<WebDevPage />} /> */}
              </Routes>
            </section>
          </main>

        <Routes>
          <Route path="/about" element={<Footer />} />
          <Route path="/contact" element={<Footer />} />
          <Route path="/projects" element={<Footer />} />
          <Route path="/kanji-list" element={
            <KanjiFooter 
              kanji={kanji} 
              setKanji={setKanji} 
              kanjis={kanjis} 
              setRoman={setRoman}
              setHinted={setHinted}
              setImageURL={setImageURL}
            />} 
          />
          <Route path="/" element={
            <KanjiFooter 
              kanji={kanji} 
              setKanji={setKanji} 
              kanjis={kanjis} 
              setRoman={setRoman}
              setHinted={setHinted}
              setImageURL={setImageURL}
            />} 
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
