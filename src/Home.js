import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_banner" src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/DVD/XCM_Manual_1200x445_1217661_1130674_IDx231217661_uk_dvd_digital_readiness_primevideo_banner_2_44c2b7ea_2f3b_4de2_ab69_9968a9e8112a_jpg_LOWER_QL85_.jpg" alt="" />

                <div className="home_row"> 
                <Product 
                id = "1234567"
                title="Amazon Basics Tritan Water Bottle with Infuser – 25-Ounce, 2-Pack, Blue
               ." 
                price={19.99}
                image="././images/tritan.jpg"
                rating={5}
                />

                <Product 
                id="234567"
                title="Amazon Basics Quick-Dry Towels - 100% Cotton, 3-Piece Set, Lake Blue."
                
                price={17.45}
                image="././images/tower_.jpg"
                rating={4}
                />
                </div>

                <div className="home_row"> 
                <Product 
                id="1234587"
                title=" The Lean Startup:The Lean Startup is one of the core business books that revolutionised the business startup environment."
                price={13.26}
                image="././images/thelean.jpg"
                rating={5}
                />
                <Product 
                id="5643276"
                title="Amazonbasics 32 Piece Household Tool Set"
                price={23.56}
                image="././images/household.jpg"
                rating={4}
                />
                <Product
                id="6785435"
                title="Amazon Basics Kids Ultra-Soft Micromink Sherpa Blanket - Twin, Midnight Blue"
                
                price={21.46}
                image="././images/chair.jpg"
                rating={5}
                />
                </div>
                
                <div className="home_row"> 
                <Product 
                id="5437865"
                title="Amazon Basics 8 Pack 9 Volt Performance All-Purpose Alkaline Batteries, 5-Year Shelf Life, Easy to Open Value Pack"
                
                
                price={9.59 }
                image="././images/battery.jpg"
                rating={4}/>
                </div>
            </div>

        </div>
    )
}

export default Home
