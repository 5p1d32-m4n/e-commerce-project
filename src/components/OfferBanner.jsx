export default function OfferBanner({ offer }) {
    return (
        <div className="offer-banner">
            {/* Make the offer a whole object*/}
            <p>Big Sale Up To {offer}% Whole Store. Hurry! Limited While Supplies Last</p>
        </div>
    )
}