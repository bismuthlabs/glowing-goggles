import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config"; // Import the Firebase app instance from your config

// Initialize Firestore
const db = getFirestore(app);

// Function to fetch data for the "Contacts" tab
export const getContactsData = async () => {
  try {
    const contactsCollection = collection(db, "contacts"); // Replace with your Firestore collection name for contacts
    const snapshot = await getDocs(contactsCollection);
    const contactsData = snapshot.docs.map((doc) => doc.data());
    return contactsData;
  } catch (error) {
    console.error("Error fetching contacts data:", error);
    throw error;
  }
};

// Function to fetch data for the "Shop" tab
export const getShopData = async () => {
  try {
    const shopCollection = collection(db, "shop"); // Replace with your Firestore collection name for shop
    const snapshot = await getDocs(shopCollection);
    const shopData = snapshot.docs.map((doc) => doc.data());
    return shopData;
  } catch (error) {
    console.error("Error fetching shop data:", error);
    throw error;
  }
};

// Function to fetch data for the "Promo" tab
export const getPromoData = async () => {
  try {
    const promoCollection = collection(db, "promo"); // Replace with your Firestore collection name for promo
    const snapshot = await getDocs(promoCollection);
    const promoData = snapshot.docs.map((doc) => doc.data());
    return promoData;
  } catch (error) {
    console.error("Error fetching promo data:", error);
    throw error;
  }
};

// Function to fetch data for the "Discover" tab
export const getDiscoverData = async () => {
  try {
    const discoverCollection = collection(db, "discover"); // Replace with your Firestore collection name for discover
    const snapshot = await getDocs(discoverCollection);
    const discoverData = snapshot.docs.map((doc) => doc.data());
    return discoverData;
  } catch (error) {
    console.error("Error fetching discover data:", error);
    throw error;
  }
};