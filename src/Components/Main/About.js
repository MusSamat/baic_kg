import React from "react";

const About = () => {
    return (
        <div id="main">
            <div className='inner'>
                <div className="about">
                    <div className="about_title">
                        <div className="about_item1">
                            For developers, by Developers
                        </div>
                        <h2 className="about_theme">
                            Simple Integration
                        </h2>

                        <div className='about_desc'>The Cloverly API calculates and offsets carbon
                            emissions on a per-transaction basis. We can determine
                            the amount of carbon emitted and offset that quantity
                            by purchasing carbon offsets in real time. Explore our
                            developer docs to find the right endpoints for your
                            application, and sign up for free to get the Cloverly
                            sandbox keys.
                        </div>
                        <div className="about_buttons">
                            <button className='btn1'>Оставить заявку</button>
                            <button style={{borderRadius: 12}}> Наш каталог</button>
                        </div>

                    </div>
                    <div className="about_scItem">
                        <div className="about_scAllItems">
                            <img src="./images/svgFiles/car1.svg" alt="car_electro"/>
                            <div>  Miles traveled and carbon emitted can be easily
                                calculated and offset in real time with Cloverly.
                            </div>
                        </div>
                        <div className='about_scAllItems'>
                            <img src="./images/svgFiles/coin.svg" alt="car_electro"/>
                            <div>
                                Cloverly can help identify carbon footprints based on financial transaction
                                data and purchase the offsets needed to mitigate these effects.
                            </div>
                        </div>
                    </div>
                </div>


                {/*    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque*/}
                {/*        venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor*/}
                {/*        sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu*/}
                {/*        massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris.*/}
                {/*        Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis,*/}
                {/*        hendrerit tristique.</p>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent*/}
                {/*        taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique*/}
                {/*        libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut*/}
                {/*        ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor.*/}
                {/*        Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique*/}
                {/*        senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus.*/}
                {/*        Pellentesque aliquam maximus risus, vel venenatis mauris vehicula hendrerit.</p>*/}
                {/*    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet*/}
                {/*        dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque*/}
                {/*        leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum*/}
                {/*        convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>*/}
            </div>
        </div>
    )
}

export default About