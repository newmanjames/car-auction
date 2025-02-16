
//components
import AuctionCard from "../Components/AuctionCard";
import Navbar from "../Components/NavBar";


const HomePage = ({ auctionList }) => {



    return <>
        <div className="bg-white dark:bg-neutral-900 text-black dark:text-neutral-300">
            <Navbar />

            <div className="home-page flex justify-center">

                <div className="auction-list pt-[84px] grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4">

                    {auctionList.map(auction => (
                        <AuctionCard key={auction.id} auction={auction} />
                    ))}
                </div>
            </div>
        </div>
    </>
};

export default HomePage;