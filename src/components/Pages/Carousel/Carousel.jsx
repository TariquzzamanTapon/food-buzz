import React from 'react';

const Carousel = () => {
    return (
        <div>
            <h1 className='md:text-5xl text-2xl text-center font-bold md:mb-5 mt-10 md:mt-20'>Most Trending  <span className='text-orange-400'>Recipes</span>.</h1 >
            <p className='font-light mb-3 text-center md:w-3/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestias? Quia ex, repellat excepturi illo, fugit eius obcaecati iusto dolores temporibus, aliquam alias sint sapiente eum atque veniam saepe quisquam!</p>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?w=900&t=st=1684987582~exp=1684988182~hmac=58d64d33a0933bdca79ec639747b7cd986db5f10f97b07e0e5d209acbb781d6d" className="w-4/5 mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27379.jpg?w=900&t=st=1684987714~exp=1684988314~hmac=d0c422e4766b5d6b8248ac728838ca6a06e949a932a22d870924f9cfbc025760" className="w-4/5 mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?w=900&t=st=1684987582~exp=1684988182~hmac=58d64d33a0933bdca79ec639747b7cd986db5f10f97b07e0e5d209acbb781d6d" className="w-4/5 mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?w=900&t=st=1684987582~exp=1684988182~hmac=58d64d33a0933bdca79ec639747b7cd986db5f10f97b07e0e5d209acbb781d6d" className="w-4/5 mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;