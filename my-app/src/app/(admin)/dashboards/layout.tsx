
import { Main } from "next/document";
import React from "react";

export interface LayoutProps {
    children: React.ReactNode;
    stats: React.ReactNode;
    sales: React.ReactNode;
    categories: React.ReactNode;
    countries: React.ReactNode;
    promotions: React.ReactNode;
  }
export default function Layout({children,stats,sales,categories,countries,promotions}:LayoutProps){
    return(
     <main className="grid grid-cols-12 gap-5 py-10 ol10 pr-7">
        {children}
        <div className="col-span-12">{stats}</div>
        <div className="col-span-5">{sales}</div>
        <div className="col-span-7">{categories}</div>
        <div className="col-span-6">{countries}</div>
        <div className="col-span-6">{promotions}</div>
     </main>
       
    )
}