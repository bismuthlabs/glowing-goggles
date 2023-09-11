"use client";
import WhatsappIcon from "./icons/contactsIcons/whatsappIcon";
import MessengerIcon from "./icons/contactsIcons/messengerIcon";
import TwitterIcon from "./icons/contactsIcons/twitterIcon";
import EmailIcon from "./icons/contactsIcons/emailIcon";
import TelegramIcon from "./icons/contactsIcons/telegramIcon";
import { getContactsData } from "@/firebase/getDummyData";
// import { resolve } from "path";
import UserContactData from "../../firebase/DummyData.json";
// import { Dispatch, SetStateAction } from "react";

type contactsData = Promise<any[] | undefined>;
interface contactsContent {
  contactsDataReceived: contactsData;
}
// type UserContact = {
//   id: number;
//   name: string;
//   phoneNumber: string | number;
//   socialLinks?: {
//     whatsapp: string;
//     messeneger: string;
//     twitter: string;
//     email: string;
//     telegram: string;
//     youtube?:string;
//   };
// }
// use a map to populate the links
export default function Contacts(props: contactsContent) {
  // const getData = async () => {
  //   const data = await getContactsData();
  //   console.log(data);
  // }
  // getData()
  let dataReceive
  const data = async()=> await props.contactsDataReceived;
  const currentUser: string = "John Doe";
  return (
    <>
      <div className='flex flex-col gap-2 p-2'>
        <div className='flex justify-center items-center h-2/5'>
          <div className='flex flex-col min-w-full justify-center p-2 bg-white rounded'>
            <h1 className='font-semibold'>Bookings</h1>
            <div className='text-black flex h-10'>
            </div>
          </div>
        </div>
        {/* Social profile */}
        <div className='flex justify-center items-center h-2/5'>
          <div className='flex flex-col justify-center p-2 bg-white rounded w-full'>
            <h1 className='font-semibold'>Social profile</h1>
            <div className='flex gap-3 justify-center w-full p-4'>
              {/* Icons */}
              <WhatsappIcon iconWidth={55} iconHeight={55} />
              <MessengerIcon iconWidth={55} iconHeight={55} />
              <TwitterIcon iconWidth={55} iconHeight={55} />
              <EmailIcon iconWidth={55} iconHeight={55} />
              <TelegramIcon iconWidth={55} iconHeight={55} />
            </div>
          </div>
        </div>
        {/* links */}
        <div className='flex justify-center h-80'>
          <div className='flex min-w-full flex-col p-2 bg-white rounded'>
            <h1 className='font-semibold'>Links</h1>
            <div className='flex flex-col'>
              {UserContactData.map((data) =>
                data.id === 1 && data.socialLinks ? (
                  <div className='text-black' key={data.id}>
                    <p className='border-b-2 h-10 flex items-end'>
                      Whatsapp : {data.socialLinks.whatsapp}
                    </p>
                    <p className='border-b-2 h-10 flex items-end'>
                      Telegram : {data.socialLinks.telegram}
                    </p>
                    <p className='border-b-2 h-10 flex items-end'>
                      Messenger : {data.socialLinks.messenger}
                    </p>
                    <p className='border-b-2 h-10 flex items-end'>
                      Email : {data.socialLinks.email}
                    </p>
                    {data.socialLinks.youtube ? (
                      <p className="border-b-2 h-10 flex items-end">Youtube : {data.socialLinks.youtube}</p>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
