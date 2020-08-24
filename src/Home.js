import React from 'react'
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className = 'home'>
            <img 
                className ='home__image'
                src ='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt ='' 
            />

            {/* Product id, title, price, rating, image*/}
            <div className ='home__row'>
                <Product
                    id='123413525'
                    title ='Mechanical Keyboard'
                    price ={11.96}
                    rating={5}
                    image ='https://images-na.ssl-images-amazon.com/images/I/71cngLX2xuL._AC_SL1500_.jpg'
                />
                <Product
                    id='12166634'
                    title ='Programmer Desk'
                    price ={199.99}
                    rating={5}
                    image ='https://m.media-amazon.com/images/I/71JU-eCbbNL._AC_SX360_SY240_QL70_.jpg'
                />
            </div>
            
            <div className = 'home__row'>
                <Product
                    id='123644'
                    title ='Apple Iphone 11'
                    price ={1100.00}
                    rating={5}
                    image ='https://m.media-amazon.com/images/I/71xn9bCRfhL._AC_UY436_FMwebp_QL65_.jpg'
                />
                <Product
                    id='125534'
                    title ='Apple Macbook Pro 15.5 inch'
                    price ={899.99}
                    rating={4}
                    image ='https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY436_FMwebp_QL65_.jpg'
                />
                <Product
                    id='12323424'
                    title ='Pro Mouse'
                    price ={39.99}
                    rating={5}
                    image ='https://m.media-amazon.com/images/I/71j+nGVh0lL._AC_UY436_FMwebp_QL65_.jpg'
                />
            </div>

            <div className ='home__row'>
                <Product
                    id='123423545'
                    title ='Dell UltraSharp U3415W 34-inch Curved LED-Lit Monitor'
                    price ={1211.99}
                    rating={5}
                    image ='https://m.media-amazon.com/images/I/71br6lyzhuL._AC_UY436_FMwebp_QL65_.jpg'
                />
            </div>

        </div>
    )
}

export default Home
