import React from 'react';
import '../../styles/sass/style.scss';
import HotelComponent from "../../components/imageComponents/hotelImages/hotelComponent";

//@ts-ignore
import HotelOneImg from ".././../../img/hotel-1.jpg";
//@ts-ignore
import HotelTwoImg from ".././../../img/hotel-2.jpg";
//@ts-ignore
import HotelThreeImg from ".././../../img/hotel-3.jpg";
import Overview from "../Overview/Overview";
import Detail from "../Detail/Detail";
import CTA from "../CTA/CTA";

const HotelView = () => (
  <main className='hotel-view'>
      <div className='gallery'>
          <figure>
            <HotelComponent imagePath={HotelOneImg}/>
          </figure>
          <figure>
            <HotelComponent imagePath={HotelTwoImg}/>
          </figure>
          <figure>
              <HotelComponent imagePath={HotelThreeImg}/>
          </figure>
      </div>
      <Overview/>
      <Detail/>
      <CTA/>
  </main>
);

export default HotelView;