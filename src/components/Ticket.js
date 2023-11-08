import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/ticket.css";
import "../styles/common.css";
import { useRef } from "react";

function Ticket() {
  return (
    <section class="ticket">
      <div class="ticket-inner">
        <div class="ticket-header">
          <h2 class="ticket-title">티켓 랭킹</h2>
          <span class="ticket-txt"> 오늘 뭐볼까? 지금 HOT한 공연 </span>
        </div>
        <div class="ticket-main">
          <div class="ticket-category">
            <ul class="ticket-list">
              <li>
                <button class="ticket-cate-bt">뮤지컬</button>
              </li>
              <li>
                <button class="ticket-cate-bt">콘서트</button>
              </li>
              <li>
                <button class="ticket-cate-bt">스포츠</button>
              </li>
              <li>
                <button class="ticket-cate-bt">전시/행사</button>
              </li>
              <li>
                <button class="ticket-cate-bt">클래식/무용</button>
              </li>
              <li>
                <button class="ticket-cate-bt">아동/가족</button>
              </li>
              <li>
                <button class="ticket-cate-bt">연극</button>
              </li>
              <li>
                <button class="ticket-cate-bt">래저/캠핑</button>
              </li>
            </ul>
          </div>
          <div class="ticket-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".ticket-slide-wrap .slide-next-bt",
                prevEl: ".ticket-slide-wrap .slide-prev-bt",
              }}
              className="ticket-slide"
            >
              <SwiperSlide>
                <div class="ticket-slide-item">
                  <a href="#" class="ticket-link">
                    <div class="ticket-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="ticket-info">
                  <ul class="ticket-good-list">
                    <li>
                      <span class="ticket-good-info-price">
                        <em>태양의서커스 &lt; 루치아 &gt;</em>
                        <p>잠실종합운동장</p>
                        <i>2023.10.25</i>
                      </span>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ticket-slide-item">
                  <a href="#" class="ticket-link">
                    <div class="ticket-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="ticket-info">
                  <ul class="ticket-good-list">
                    <li>
                      <span class="ticket-good-info-price">
                        <em>태양의서커스 &lt; 루치아 &gt;</em>
                        <p>잠실종합운동장</p>
                        <i>2023.10.25</i>
                      </span>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ticket-slide-item">
                  <a href="#" class="ticket-link">
                    <div class="ticket-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="ticket-info">
                  <ul class="ticket-good-list">
                    <li>
                      <span class="ticket-good-info-price">
                        <em>태양의서커스 &lt; 루치아 &gt;</em>
                        <p>잠실종합운동장</p>
                        <i>2023.10.25</i>
                      </span>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ticket-slide-item">
                  <a href="#" class="ticket-link">
                    <div class="ticket-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="ticket-info">
                  <ul class="ticket-good-list">
                    <li>
                      <span class="ticket-good-info-price">
                        <em>태양의서커스 &lt; 루치아 &gt;</em>
                        <p>잠실종합운동장</p>
                        <i>2023.10.25</i>
                      </span>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ticket-slide-item">
                  <a href="#" class="ticket-link">
                    <div class="ticket-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="ticket-info">
                  <ul class="ticket-good-list">
                    <li>
                      <span class="ticket-good-info-price">
                        <em>태양의서커스 &lt; 루치아 &gt;</em>
                        <p>잠실종합운동장</p>
                        <i>2023.10.25</i>
                      </span>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ticket-slide-item">
                  <a href="#" class="ticket-link">
                    <div class="ticket-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="ticket-info">
                  <ul class="ticket-good-list">
                    <li>
                      <span class="ticket-good-info-price">
                        <em>태양의서커스 &lt; 루치아 &gt;</em>
                        <p>잠실종합운동장</p>
                        <i>2023.10.25</i>
                      </span>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ticket-slide-item">
                  <a href="#" class="ticket-link">
                    <div class="ticket-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="ticket-info">
                  <ul class="ticket-good-list">
                    <li>
                      <span class="ticket-good-info-price">
                        <em>태양의서커스 &lt; 루치아 &gt;</em>
                        <p>잠실종합운동장</p>
                        <i>2023.10.25</i>
                      </span>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ticket-slide-item">
                  <a href="#" class="ticket-link">
                    <div class="ticket-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="ticket-info">
                  <ul class="ticket-good-list">
                    <li>
                      <span class="ticket-good-info-price">
                        <em>태양의서커스 &lt; 루치아 &gt;</em>
                        <p>잠실종합운동장</p>
                        <i>2023.10.25</i>
                      </span>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>

            <button class="slide-prev-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button class="slide-next-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div class="ticket-footer">
          <ul class="ticket-home">
            <li>
              <button class="ticket-home-bt">티켓 홈 바로가기</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Ticket;
