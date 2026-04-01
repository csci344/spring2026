import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Gallery from "./Gallery";
import "./App.css";

const galleries = [
    {
        id: "cats",
        name: "Cats",
        endpoint: "https://www.apitutor.org/flickr/simple/?tags=cat",
    },
    {
        id: "dogs",
        name: "Dogs",
        endpoint: "https://www.apitutor.org/flickr/simple/?tags=dog",
    },
    {
        id: "birds",
        name: "Birds",
        endpoint: "https://www.apitutor.org/flickr/simple/?tags=bird",
    },
    {
        id: "flowers",
        name: "Flowers",
        endpoint: "https://www.apitutor.org/flickr/simple/?tags=flower",
    },
    {
        id: "nature",
        name: "Nature",
        endpoint: "https://www.apitutor.org/flickr/simple/?tags=nature",
    },
    {
        id: "asheville",
        name: "Asheville",
        endpoint: "https://www.apitutor.org/flickr/simple/?tags=asheville",
    },
];

export default function App() {
    // when the gallery is selected in the child component, we want the carousel
    // to update (which is in a different component). So we need to keep track of
    // the selected gallery id in the parent component.
    const [selectedGalleryId, setSelectedGalleryId] = useState(galleries[0].id);
    const [photos, setPhotos] = useState([]);

    // get the selected gallery object
    const selectedGallery = getSelectedGallery(selectedGalleryId);

    // find the gallery object that matches the selected gallery id
    function getSelectedGallery(selectedGalleryId) {
        for (let i = 0; i < galleries.length; i++) {
            if (galleries[i].id === selectedGalleryId) {
                return galleries[i];
            }
        }
        return galleries[0];
    }

    async function getPhotos(endpoint) {
        const response = await fetch(endpoint);
        const data = await response.json();
        const imageUrls = data.map((item) => item.img_url);
        setPhotos(imageUrls);
    }

    // fetching data from another system (flickr in this case) is considered a 'side effect'
    // because it is not part of the main rendering process. So we use useEffect to fetch
    // the data when the selected gallery changes:
    useEffect(() => {
        getPhotos(selectedGallery.endpoint);
    }, [selectedGallery]);

    return (
        <div className="app">
            <h1>{selectedGallery.name} Photo Carousel</h1>
            <Gallery
                galleries={galleries}
                selectedGalleryId={selectedGalleryId}
                setSelectedGalleryId={setSelectedGalleryId}
            />
            {photos.length === 0 ? (
                <p className="loading">Loading photos...</p>
            ) : (
                <Carousel gallery={photos} />
            )}
        </div>
    );
}
