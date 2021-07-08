import React from 'react'
import LiquidBuble from '../Animation/LiquidBuble'
import Logo from '../Button/Logo'
import './pages.css'
const Company = () => {
    return (
        <div className="company">
            <Logo/>
            <div className="page__tittle"><h2>Blog</h2></div>
            <div className="company__text">
                <p><span>Representative:</span> Shuichiro Saito</p>
                <p><span>Contact information:</span> info@dougact.com</p>

                <p><span>Founded:</span> April 15,2019</p>

                <p><span> Main bank:</span> Sumitomo Mitsui Banking Corporation</p>

                <p>Buisiness content</p>
                <div className="about__list">
                    <ul>
                        <li>01.Video planning and production</li>
                        <li>02.Movie shooting</li>
                        <li>03.3DCG production</li>
                        <li>04.Website Produce</li>
                        <li>05.Web marketing</li>
                    </ul>
                </div>

            </div>
            <LiquidBuble/>
        </div>
    )
}

export default Company
