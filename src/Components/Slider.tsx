function Slider() {
    return (
        <div className="carousel w-full h-96 bg-teal-950">
             <div id="slide1" className="carousel-item relative w-full flex flex-col md:flex-row justify-between">
                <div className="card w-1/2 mx-auto">
                    <div className="card-body">
                        <p className="text-white">Computer-controlled digital transistorized with electronic advance</p>
                        <h2 className="card-title text-white font-semibold text-5xl">Honda CBR 300R</h2>
                        <p className="text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit official consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                        <div className="card-actions justify-center md:justify-start">
                            <button className="btn btn-primary bg-[#E76F51] border-none text-white">Purchase</button>
                        </div>
                    </div>
                </div>
                <img src="/image/slider/slider1.png" className="w-auto mx-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full flex flex-col md:flex-row justify-between">
                <div className="card w-1/2 mx-auto">
                    <div className="card-body">
                        <p className="text-white">Computer-controlled digital transistorized with electronic advance</p>
                        <h2 className="card-title text-white font-semibold text-5xl">Honda CBR 300R</h2>
                        <p className="text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                        <div className="card-actions justify-center md:justify-start">
                            <button className="btn btn-primary bg-[#E76F51] border-none text-white">Purchase</button>
                        </div>
                    </div>
                </div>
                <img src="/image/slider/slider2.png" className="w-auto mx-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full flex flex-col md:flex-row justify-between">
                <div className="card w-1/2  mx-auto">
                    <div className="card-body">
                        <p className="text-white">Computer-controlled digital transistorized with electronic advance</p>
                        <h2 className="card-title text-white font-semibold text-5xl">Honda CBR 300R</h2>
                        <p className="text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                        <div className="card-actions justify-center md:justify-start">
                            <button className="btn btn-primary bg-[#E76F51] border-none text-white">Purchase</button>
                        </div>
                    </div>
                </div>
                <img src="/image/slider/slider3.png" className="w-auto mx-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full flex flex-col md:flex-row justify-between">
                <div className="card w-1/2  mx-auto">
                    <div className="card-body">
                        <p className="text-white">Computer-controlled digital transistorized with electronic advance</p>
                        <h2 className="card-title text-white font-semibold text-5xl">Honda CBR 300R</h2>
                        <p className="text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                        <div className="card-actions justify-center md:justify-start">
                            <button className="btn btn-primary bg-[#E76F51] border-none text-white">Purchase</button>
                        </div>
                    </div>
                </div>
                <img src="/image/slider/slider4.png" className="w-auto mx-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    )
}
export default Slider