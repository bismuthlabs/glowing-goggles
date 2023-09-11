"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ContactsContent from "./tabs/contacts";
import ShopContent from "./tabs/shop";
import Promos from "./tabs/promo";
import Discover from "./tabs/discover";
import {
  getContactsData,
  getShopData,
  getPromoData,
  getDiscoverData,
} from "../firebase/getDataFromFirebase";
import useSWR from "swr";
import Profiles from "./profile";
import ContactsIcon from "./tabs/icons/ProfileNavIcons/contactsIcon";
import ShopIcon from "./tabs/icons/ProfileNavIcons/shopIcon";
import PromoIcon from "./tabs/icons/ProfileNavIcons/promosIcon";
import DiscoverIcon from "./tabs/icons/ProfileNavIcons/discoverIcon";

export default function ProfileNavStick() {
  const searchParams = useSearchParams();
  const activeTabFromQuery = searchParams.get("tab") || "contacts";
  const [activeTab, setActiveTab] = useState<string>(
    activeTabFromQuery
  );

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
    const newSearchParams = new URLSearchParams(
      searchParams.toString()
    );
    newSearchParams.set("tab", tab);
    const newSearch = newSearchParams.toString();
    window.history.replaceState(null, "", `?${newSearch}`);
    setActiveTab(tab);
  };

  return (
    <>
      <div className=''>
        <div className="max-h-fit">
          <Profiles />
        </div>
        {/* Tab contents */}

        <div className='top-[18rem]'>
          <div
            className='focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300'
            style={{ backgroundColor: "#EEF1F4"}}
            >
            {/* Conditionally render the appropriate content based on the active tab */}
            {activeTab === "contacts" && <ContactsContent contactsDataReceived={(fetchDataForTab("contacts"))}/>}
            {activeTab === "shop" && <ShopContent/>}
            {activeTab === "promo" && <Promos/>}
            {activeTab === "discover" && <Discover/>}
          </div>
        </div>

        {/*Bottom navigation bar*/}
        <ul
          className='border fixed z-50 bottom-4 rounded-3xl left-1/2 transform -translate-x-1/2 -translate-y-1/2  inline-flex h-16 p-5 gap-7 w-5/6 items-center justify-between  text-slate-500 dark:bg-slate-800 dark:text-slate-400'
          style={{ backgroundColor: "#e6e9ec" }}
          >
          <li
            className={`inline-flex flex-col text-xs items-center justify-center whitespace-nowrap  ${
              activeTab === "contacts"
                ? "bg-white rounded-md text-slate-950 shadow-sm"
                : "data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50"
            }`}
            onClick={() => handleTabChange("contacts")}>
              <ContactsIcon iconWidth={30} iconHeight={30}/>
            Contacts
          </li>
          <li
            className={`inline-flex flex-col text-xs items-center justify-center whitespace-nowrap  ${
              activeTab === "shop"
                ? "bg-white text-slate-950 shadow-sm"
                : "data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50"
            }`}
            onClick={() => handleTabChange("shop")}>
              <ShopIcon iconWidth={30} iconHeight={30}/>
            Shop
          </li>
          <li
            className={`inline-flex flex-col text-xs items-center justify-center whitespace-nowrap  ${
              activeTab === "promo"
                ? "bg-white text-slate-950 shadow-sm"
                : "data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50"
            }`}
            onClick={() => handleTabChange("promo")}>
              <PromoIcon iconWidth={30} iconHeight={30}/>
            Promo
          </li>
          <li
            className={`inline-flex flex-col text-xs items-center justify-center whitespace-nowrap  ${
              activeTab === "discover"
                ? "bg-white text-slate-950 shadow-sm"
                : "data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50"
            }`}
            onClick={() => handleTabChange("discover")}>
              <DiscoverIcon iconWidth={30} iconHeight={30}/>
            Discover
          </li>
        </ul>
      </div>
    </>
  );
}
