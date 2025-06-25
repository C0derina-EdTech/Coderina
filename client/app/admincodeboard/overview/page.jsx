import SummaryCards from '../../components/dashboardComponent/overview/SummaryCards';
import CenterSection from '../../components/dashboardComponent/overview/CenterSection';
import TableSection from '../../components/dashboardComponent/overview/TableSection';
import React from 'react'


export const metadata = {
  title: "Dashboard",
  description: "Learn more about us.",
};

const page = () => {
  return (
    <div>
      <SummaryCards/>
      <CenterSection/>
      <TableSection/>
    </div>
  )
}

export default page