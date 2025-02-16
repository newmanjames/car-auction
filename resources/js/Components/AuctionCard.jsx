import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AuctionCard = ({ auction }) => {
    const formattedCurrentBid = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(auction.current_bid);

    const carName = `${auction.car.year} ${auction.car.make} ${auction.car.model}`

    return <>
        <div className="auction-card rounded-lg p-[4px] max-w-fit md:max-w-[330px] sm:w-full ">
            <div className="image-container relative">
                <img src={auction.car.image_url} alt={auction.car.name} className="car-image aspect-video w-full object-cover rounded-md" />
                <div className="mini-bid-bar absolute bottom-2 left-2 rounded px-2 py-1 bg-neutral-900 text-sm text-white">
                    <FontAwesomeIcon icon={faClock} size="xs" className="time-remaining bg-neutral-900 pr-1" />
                    <span className="time-remaining bg-neutral-900 pr-2">
                        2 days
                    </span>
                    <span className="bid bg-neutral-900 pr-1">
                        Bid
                    </span>
                    <span className="bid-amount bg-neutral-900">
                        {formattedCurrentBid}
                    </span>
                </div>
            </div>
            <div className="car-info mt-[8px]">
                <a href="" className="font-bold text-lg hover:underline">
                    {carName}
                </a>
                <p className="text-sm my-[4px]">
                    {auction.car.description}
                </p>
            </div>
        </div>

    </>


}

export default AuctionCard;