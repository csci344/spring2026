import React from "react";
import "./Gallery.css";

export default function Gallery({
    galleries,
    selectedGalleryId,
    setSelectedGalleryId,
}) {
    return (
        <div className="gallery">
            {galleries.map((gallery) => (
                <button
                    key={gallery.id}
                    className={
                        gallery.id === selectedGalleryId ? "selected" : ""
                    }
                    onClick={() => setSelectedGalleryId(gallery.id)}
                >
                    {gallery.name}
                </button>
            ))}
        </div>
    );
}
