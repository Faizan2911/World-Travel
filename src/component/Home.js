
import React from 'react';
import Banner from './Banner';
import Card from './Card';
import './Home.css';

function Home() {
  return (
    <div className='home'>

      <Banner />

      <div className="home_section">

        <Card src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in New York"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment in Dubai"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />

      </div>

      <div className="home_section">
        <Card src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
        <Card src="https://i.pinimg.com/originals/f3/71/9c/f3719c7d34c600734d4f2b3d094db54c.jpg?im_w=720"
          title="Guest House in London"
          description="Golden glory guest house is a business and family class guest house located at London"
        />
      </div>

    </div>
  )
}

export default Home
