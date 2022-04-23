import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import { Navigation } from "swiper";

export default function Carousel() {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        //spaceBetween={0}
        //slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="#" className="carousel__link text-decoration-none">
            <img
              src="https://s2.coinmarketcap.com/static/new-alerts/613f25cbef9a5a001905f323/img/1650356843633_The-Capital-Conference-280x136.jpg"
              alt="static image"
            />
            <p className="carousel__category text-start">Cryto Deep Dive</p>
            <h2 className="carousel__title text-start">
              Whats'a Cryto Charity
            </h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="carousel__link text-decoration-none">
            <div className="corousel__image">
              <img
                src="https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1650333860492_What-is-a-Crypto-Faucet-Thumbnail_280x136.jpg"
                alt="static image"
              />
              <p className="carousel__category text-start">Cryto Deep Dive</p>
              <h2 className="carousel__title text-start">
                Whats'a Cryto Faucet?
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="carousel__link text-decoration-none">
            <div className="corousel__image">
              <img
                src="https://s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1647313709257_Webp.net-compress-image%20(4).jpg"
                alt="static image"
              />
              <p className="carousel__category text-start">Self Reporting</p>
              <h2 className="carousel__title text-start">
                Self-Reporting Dashboard
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="carousel__link text-decoration-none">
            <div className="corousel__image">
              <img
                src="https://s2.coinmarketcap.com/static/new-alerts/61152358029ab00019681d99/img/1642729800564_Webp.net-compress-image%20(3).jpg"
                alt="static image"
              />
              <p className="carousel__category text-start">
                CoinMarketCap Portfolio
              </p>
              <h2 className="carousel__title text-start">
                Track Your Tokens Profits!
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="carousel__link text-decoration-none">
            <div className="corousel__image">
              <img
                src="https://s2.coinmarketcap.com/static/new-alerts/61152481ad8e1000124fc878/img/1639738636872_Free-API-Sponsorship-Program-(updated)-280x136.png"
                alt="static image"
              />
              <p className="carousel__category text-start">API Sponsorship</p>
              <h2 className="carousel__title text-start">
                Get Free CoinMarketCap API
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="carousel__link text-decoration-none">
            <img
              src="https://s2.coinmarketcap.com/static/new-alerts/613f25cbef9a5a001905f323/img/1650356843633_The-Capital-Conference-280x136.jpg"
              alt="static image"
            />
            <p className="carousel__category text-start">Cryto Deep Dive</p>
            <h2 className="carousel__title text-start">
              Whats'a Cryto Charity
            </h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="carousel__link text-decoration-none">
            <div className="corousel__image">
              <img
                src="https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1650333860492_What-is-a-Crypto-Faucet-Thumbnail_280x136.jpg"
                alt="static image"
              />
              <p className="carousel__category text-start">Cryto Deep Dive</p>
              <h2 className="carousel__title text-start">
                Whats'a Cryto Faucet?
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="carousel__link text-decoration-none">
            <div className="corousel__image">
              <img
                src="https://s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1647313709257_Webp.net-compress-image%20(4).jpg"
                alt="static image"
              />
              <p className="carousel__category text-start">Self Reporting</p>
              <h2 className="carousel__title text-start">
                Self-Reporting Dashboard
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="carousel__link text-decoration-none">
            <div className="corousel__image">
              <img
                src="https://s2.coinmarketcap.com/static/new-alerts/61152358029ab00019681d99/img/1642729800564_Webp.net-compress-image%20(3).jpg"
                alt="static image"
              />
              <p className="carousel__category text-start">
                CoinMarketCap Portfolio
              </p>
              <h2 className="carousel__title text-start">
                Track Your Tokens Profits!
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="carousel__link text-decoration-none">
            <div className="corousel__image">
              <img
                src="https://s2.coinmarketcap.com/static/new-alerts/61152481ad8e1000124fc878/img/1639738636872_Free-API-Sponsorship-Program-(updated)-280x136.png"
                alt="static image"
              />
              <p className="carousel__category text-start">API Sponsorship</p>
              <h2 className="carousel__title text-start">
                Get Free CoinMarketCap API
              </h2>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
