import React from 'react'
import DashboardHeader from './dashboardHeader/DashboardHeader'
import DashboardSection1 from './dashboardSection1/DashboardSection1'
import "./style.css"
import DashboardSection2 from './dashboardSection2/DashboardSection2'
import DashboardSection3 from './dashboardSection3/DashboardSection3'
import DashboardPagination from './dashboardPagination/DashboardPagination'

function Dashboard() {
    return (
        <>
            <div className="dashboardContainer">
                <DashboardHeader />
                <div className="dashboardSection">
                    <DashboardSection1 />
                    <div className="dashboardSectionGap">
                        <DashboardSection2 />
                        <DashboardSection3 />
                    </div>
                    <DashboardPagination />
                </div>
            </div>
        </>
    )
}

export default Dashboard