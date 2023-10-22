export default function LatestNews() {
    return (
        <div className="p-5">
            <center className="font-semibold text-5xl text-[#0A0826] capitalize">latest News</center>
            <div className="mx-auto mt-10 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="card w-auto glass pt-5">
                <figure><img src="image/news/1.png" alt="car!" /></figure>
                <div className="card-body mt-10">
                    <h2 className="card-title font-semibold text-2xl">Ducati XDIAVEL S-73</h2>
                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus, fermentum amet <br /> faucibus sed id nisi lectus at.</p>
                    <div className="card-actions justify-start mt-6">
                        <button className="btn bg-[#E76F51] text-white">Read More</button>
                    </div>
                </div>
            </div>
            <div className="card w-auto glass pt-5">
                <figure><img src="image/news/2.png" alt="car!" /></figure>
                <div className="card-body mt-10">
                    <h2 className="card-title font-semibold text-2xl">2021 Honda CBR500R</h2>
                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus, fermentum amet <br /> faucibus sed id nisi lectus at.</p>
                    <div className="card-actions justify-start mt-6">
                        <button className="btn bg-[#E76F51] text-white">Read More</button>
                    </div>
                </div>
            </div>
            <div className="card w-auto glass pt-5">
                <figure><img src="image/news/3.png" alt="car!" /></figure>
                <div className="card-body mt-10">
                    <h2 className="card-title font-semibold text-2xl">Motorcycles & Scooters</h2>
                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus, fermentum amet <br /> faucibus sed id nisi lectus at.</p>
                    <div className="card-actions justify-start mt-6">
                        <button className="btn bg-[#E76F51] text-white">Read More</button>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}