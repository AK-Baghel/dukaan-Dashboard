import React from 'react'
import "./style.css"

import questionMark from "../../../assets/questionMark.png"
import search from "../../../assets/search.png"
import Group from "../../../assets/Group.png"
import menu from "../../../assets/menu.png"
import Ellipse_2 from "../../../assets/Ellipse_2.png"

function DashboardHeader() {
    return (
        <div className="dashboardHeaderContainer">

            <div className="dashboardHeaderBox1">
                <div className="dashboardHeaderBox1Item1">Payments</div>
                <div className="dashboardHeaderBox1Item2">
                    <img src={questionMark} alt="" className="dashboardHeaderBox1Item2Icon" />
                    <div className="dashboardHeaderBox1Item2Text">How it works</div>
                </div>
            </div>
            <div className="dashboardHeaderBox2">
                <img src={search} alt="" className="dashboardHeaderBox2Icon" />
                <div className="dashboardHeaderBox2Text">Search features, tutorials, etc.</div>
            </div>
            <div className="dashboardHeaderBox3">
                <div className="dashboardHeaderBox3Parent">
                    <div className="dashboardHeaderBox3Icon1Parent">
                        {/* <img src={Ellipse_2} alt="" className="dashboardHeaderBox3Icon1Ellipse" /> */}
                        <img src={Group} alt="" className="dashboardHeaderBox3Icon1" />

                    </div>
                    <img src={menu} alt="" className="dashboardHeaderBox3Icon2" />
                </div>

            </div>
        </div>
    )
}

export default DashboardHeader