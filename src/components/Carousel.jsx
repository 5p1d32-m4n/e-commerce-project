import { useState } from "react";

const Carousel = ({ objects }) => {
    const [index, setIndex] = useState(0)
    const length = 3

    const handlePrevious = () => {
        const newIndex = index - 1
        setIndex(newIndex < 0 ? length - 1 : newIndex)
    }

    const handleNext = () => {
        const newIndex = index + 1
        setIndex(newIndex >= length ? 0 : newIndex)
    }
    return (
        <div className="carousel-container">
            <button onClick={handlePrevious}>&lt;</button>
            <button onClick={handleNext}>&gt;</button>
            {objects && objects.map((object) => (
                <div className="department-card">
                    <div className="department-card--image">
                        <img src={object.image} alt="Department" />
                    </div>
                    <div className="department-card--name">
                        <p>{object.name}</p>
                    </div>
                </div>

            ))}

        </div>
    )
}

export default Carousel