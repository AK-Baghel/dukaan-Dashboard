import React from 'react'
import image from "../../assets/Image.png"
import chevron from "../../assets/Chevron-Down.png"
import home from "../../assets/home.png"
import orders from "../../assets/orders.png"
import products from "../../assets/products.png"
import delivery from "../../assets/delivery.png"
import marketing from "../../assets/marketing.png"
import analytics from "../../assets/analytics.png"
import payments from "../../assets/payments.png"
import tools from "../../assets/tools.png"
import discounts from "../../assets/discounts.png"
import audience from "../../assets/audience.png"
import appearance from "../../assets/appearance.png"
import plugins from "../../assets/plugins.png"
import wallet from "../../assets/wallet.png"

import "./style.css"


function VerticalNavbar() {
    return (
        <div className="verticalNavbarContainer">

            <div className="verticalNavbarBox">

                <div className="verticalNavbarBoxParent">

                    <div className="verticalNavbarBox1">
                        <img className='verticalNavbarBox1Image' src={image} alt="" />
                        <div className="verticalNavbarBox1Texts">
                            <div className="verticalNavbarBox1Text1">Nishyan</div>
                            <div className="verticalNavbarBox1Text2">Visit store</div>
                        </div>
                        <img className='verticalNavbarBox1Icon' src={chevron} alt="" />

                    </div>

                    <div className="verticalNavbarBox2Parent">

                        <div className="verticalNavbarBox2">
                            <img className="verticalNavbarBox2Icon" src={home} alt="" />
                            <div className="verticalNavbarBox2Text">Home</div>
                        </div>
                        <div className="verticalNavbarBox2">
                            <img className="verticalNavbarBox2Icon" src={orders} alt="" />
                            <div className="verticalNavbarBox2Text">Orders</div>
                        </div>
                        <div className="verticalNavbarBox2">
                            <img className="verticalNavbarBox2Icon" src={products} alt="" />
                            <div className="verticalNavbarBox2Text">Products</div>
                        </div>
                        <div className="verticalNavbarBox2">
                            <img className="verticalNavbarBox2Icon" src={delivery} alt="" />
                            <div className="verticalNavbarBox2Text">Delivery</div>
                        </div>
                        <div className="verticalNavbarBox2">
                            <img className="verticalNavbarBox2Icon" src={marketing} alt="" />
                            <div className="verticalNavbarBox2Text">Marketing</div>
                        </div>
                        <div className="verticalNavbarBox2">
                            <img className="verticalNavbarBox2Icon" src={analytics} alt="" />
                            <div className="verticalNavbarBox2Text">Analytics</div>
                        </div>
                        <div className="verticalNavbarBox2 payments">
                            <img className="verticalNavbarBox2Icon" src={payments} alt="" />
                            <div className="verticalNavbarBox2Text">Payments</div>
                        </div>
                        <div className="verticalNavbarBox2">
                            <img className="verticalNavbarBox2Icon" src={tools} alt="" />
                            <div className="verticalNavbarBox2Text">Tools</div>
                        </div>
                        <div className="verticalNavbarBox2">
                            <img className="verticalNavbarBox2Icon" src={discounts} alt="" />
                            <div className="verticalNavbarBox2Text">Discounts</div>
                        </div>
                        <div className="verticalNavbarBox2">
                            <img className="verticalNavbarBox2Icon" src={audience} alt="" />
                            <div className="verticalNavbarBox2Text">Audience</div>
                        </div>
                        <div className="verticalNavbarBox2">
                            <img className="verticalNavbarBox2Icon" src={appearance} alt="" />
                            <div className="verticalNavbarBox2Text">Appearance</div>
                        </div>
                        <div className="verticalNavbarBox2">
                            <img className="verticalNavbarBox2Icon" src={plugins} alt="" />
                            <div className="verticalNavbarBox2Text">Plugins</div>
                        </div>

                    </div>

                </div>


                <div className="verticalNavbarBoxFooter">
                    <div className="verticalNavbarBoxFooterParent">

                        <div className="verticalNavbarBoxFooter1">
                            <img src={wallet} alt="" className="verticalNavbarBoxFooterIcon" />
                        </div>
                        <div className="verticalNavbarBoxFooter2">
                            <div className="verticalNavbarBoxFooter2Text1">Available credits</div>
                            <div className="verticalNavbarBoxFooter2Text2">222.10</div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default VerticalNavbar