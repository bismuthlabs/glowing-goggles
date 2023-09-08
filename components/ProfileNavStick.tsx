'use client'

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ContactsContent from "./tabs/contacts";
import ShopContent from "./tabs/shop";
import Promos from "./tabs/promo";
import Discover from "./tabs/discover";
import { getContactsData, getShopData, getPromoData, getDiscoverData } from "../firebase/getDataFromFirebase";
import useSWR from "swr";
import Profiles from "./profile";

export default function ProfileNavStick() {
  const searchParams = useSearchParams();
  const activeTabFromQuery = searchParams.get("tab") || "contacts";
  const [activeTab, setActiveTab] = useState<string>(activeTabFromQuery);

  const fetchDataForTab = async (tab: string) => {
    try {
      let data: any[];
      switch (tab) {
        case "contacts":
          data = await getContactsData();
          console.log("Fetching contacts data...");
          break;
        case "shop":
          data = await getShopData();
          console.log("Fetching shop data...");
          break;
        case "promo":
          data = await getPromoData();
          console.log("Fetching promo data...");
          break;
        case "discover":
          data = await getDiscoverData();
          console.log("Fetching discover data...");
          break;
        default:
          data = [];
          break;
      }

      return data;
    } catch (error) {
      console.error("Error fetching data for tab:", error);
    }
  };

  const { data, isLoading } = useSWR(activeTab, fetchDataForTab);

  const handleTabChange = (tab: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("tab", tab);
    const newSearch = newSearchParams.toString();
    window.history.replaceState(null, "", `?${newSearch}`);
    setActiveTab(tab);
  };

  return (
    <>
      <div className="">
        <Profiles /> 

      {/* Tab contents */}

        <div className="top-[18rem]">
        <div className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300">
          {/* Conditionally render the appropriate content based on the active tab */}
          {activeTab === "contacts" && <ContactsContent />}
          {activeTab === "shop" && <ShopContent />}
          {activeTab === "promo" && <Promos />}
          {activeTab === "discover" && <Discover />}
        </div>
      </div>
      
      {/*Bottom navigation bar*/}
        <ul className="border border-red-400 fixed z-50 bottom-4 rounded-3xl left-1/2 transform -translate-x-1/2 -translate-y-1/2  inline-flex h-10 items-center justify-between w-72  bg-white p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          <li
            className={`inline-flex items-center justify-center whitespace-nowrap  ${activeTab === "contacts" ? "bg-white text-slate-950 shadow-sm" : "data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50"
              }`}
            onClick={() => handleTabChange("contacts")}
          >
            Contacts
          </li>
          <li
            className={`inline-flex items-center justify-center whitespace-nowrap  ${activeTab === "shop" ? "bg-white text-slate-950 shadow-sm" : "data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50"
              }`}
            onClick={() => handleTabChange("shop")}
          >
            Shop
          </li>
          <li
            className={`inline-flex items-center justify-center whitespace-nowrap  ${activeTab === "promo" ? "bg-white text-slate-950 shadow-sm" : "data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50"
              }`}
            onClick={() => handleTabChange("promo")}
          >
            Promo
          </li>
          <li
            className={`inline-flex items-center justify-center whitespace-nowrap  ${activeTab === "discover" ? "bg-white text-slate-950 shadow-sm" : "data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50"
              }`}
            onClick={() => handleTabChange("discover")}
          >
            Discover
          </li>
        </ul>
        
      </div>
     
    </>
  );
}