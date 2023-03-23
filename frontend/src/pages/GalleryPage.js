import React from "react"
import ReactImageGallery from "react-image-gallery";


function GalleryPage() {
    const images = [
        {
            original: "images/japanese-formal-verb-conjugations.jpeg",
            thumbnail: "images/japanese-formal-verb-conjugations.jpeg",
            description: "A study sheet for learning common formal Japanese verb conjugations ",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-informal-verb-conjugations.jpeg",
            thumbnail: "images/japanese-informal-verb-conjugations.jpeg",
            description: "A study sheet for learning common informal Japanese verb conjugations ",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-particles-romaji-beginners.jpeg", 
            thumbnail: "images/japanese-particles-romaji-beginners.jpeg",
            description: "A study sheet for learning Japanese particles",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-particles-romaji-beginners-2.jpeg", 
            thumbnail: "images/japanese-particles-romaji-beginners-2.jpeg",
            description: "A study sheet for learning Japanese particles",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-hiragana-beginners.jpeg", 
            thumbnail: "images/japanese-hiragana-beginners.jpeg",
            description: "A study sheet for learning Japanese hiragana alphabet",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-hiragana-beginners-2.jpeg", 
            thumbnail: "images/japanese-hiragana-beginners-2.jpeg",
            description: "A study sheet for learning Japanese hiragana alphabet",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-sentence-endings-informal-no.jpeg", 
            thumbnail: "images/japanese-sentence-endings-informal-no.jpeg",
            description: "A study sheet for learning informal Japanese sentence endings",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-sentence-endings-informal-ne-yo.jpeg", 
            thumbnail: "images/japanese-sentence-endings-informal-ne-yo.jpeg",
            description: "A study sheet for learning informal Japanese sentence endings",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-sentence-endings-informal-janai.jpeg", 
            thumbnail: "images/japanese-sentence-endings-informal-janai.jpeg",
            description: "A study sheet for learning informal Japanese sentence endings",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-sentence-endings-informal-njanai.jpeg", 
            thumbnail: "images/japanese-sentence-endings-informal-njanai.jpeg",
            description: "A study sheet for learning informal Japanese sentence endings",
            originalHeight: '1000px',
        },
    ]

    return(
        <>
            <h3>Learning Japanese, one sun at a time:</h3>
            <article>                 
                <ReactImageGallery items={images} className="react-image-gallery"/>
            </article>
        </>

    );
}


export default GalleryPage;