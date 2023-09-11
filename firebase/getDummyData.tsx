// Dummy data for testing (replace this with your actual data structure)

//contacts interface
interface UserContact {
  id: number;
  name: string;
  phoneNumber: SafeNumber;
  socialLinks?: {
    whatsapp: string;
    messeneger: string;
    twitter: string;
    email: string;
    telegram: string;
    youtube?:string;
  };
}
interface ShopProduct{
  id:number;
  name?:string;
  discount?:number;
  description?:string;
  promoCode:string;
  deadline?:string;
  deadlineTime?:string;
}

type SafeNumber = ("+" & number) | number | string;

interface UserContacts extends Array<UserContact> {}
interface ShopProducts extends Array<ShopProduct>{}

const contactsData: UserContacts = [
  {
    id: 1,
    name: "John Doe",
    phoneNumber: "+1234567890",
    socialLinks: {
      whatsapp: "+1234567890",
      messeneger: "@johndoe",
      twitter: "@johndoe",
      email: "john.doe@example.com",
      telegram: "@johndoe",
      youtube: "johndoe"
    }
  },
  {
    id: 2,
    name: "Alice Smith",
    phoneNumber: "+9876543210",
    socialLinks: {
      whatsapp: "+9876543210",
      messeneger: "@alicesmith",
      twitter: "@alicesmith",
      email: "alice.smith@example.com",
      telegram: "@alicesmith",
      youtube: "alicesmith"
    }
  },
  {
    id: 3,
    name: "Bob Johnson",
    phoneNumber: "+5555555555",
    socialLinks: {
      whatsapp: "+5555555555",
      messeneger: "@bobjohnson",
      twitter: "@bobjohnson",
      email: "bob.johnson@example.com",
      telegram: "@bobjohnson"
    }
  },
  {
    id: 4,
    name: "Eva Williams",
    phoneNumber: "+9999999999",
    socialLinks: {
      whatsapp: "+9999999999",
      messeneger: "@evawilliams",
      twitter: "@evawilliams",
      email: "eva.williams@example.com",
      telegram: "@evawilliams",
      youtube: "evawilliams"
    }
  },
  {
    id: 5,
    name: "David Lee",
    phoneNumber: "+7777777777",
    socialLinks: {
      whatsapp: "+7777777777",
      messeneger: "@davidlee",
      twitter: "@davidlee",
      email: "david.lee@example.com",
      telegram: "@davidlee"
    }
  },
  {
    id: 6,
    name: "Sophia Clark",
    phoneNumber: "+1111111111",
    socialLinks: {
      whatsapp: "+1111111111",
      messeneger: "@sophiaclark",
      twitter: "@sophiaclark",
      email: "sophia.clark@example.com",
      telegram: "@sophiaclark",
      youtube: "sophiaclark"
    }
  },
  {
    id: 7,
    name: "Michael Wilson",
    phoneNumber: "+4444444444",
    socialLinks: {
      whatsapp: "+4444444444",
      messeneger: "@michaelwilson",
      twitter: "@michaelwilson",
      email: "michael.wilson@example.com",
      telegram: "@michaelwilson"
    }
  },
  {
    id: 8,
    name: "Olivia Anderson",
    phoneNumber: "+2222222222",
    socialLinks: {
      whatsapp: "+2222222222",
      messeneger: "@oliviaanderson",
      twitter: "@oliviaanderson",
      email: "olivia.anderson@example.com",
      telegram: "@oliviaanderson",
      youtube: "oliviaanderson"
    }
  },
  {
    id: 9,
    name: "William Brown",
    phoneNumber: "+8888888888",
    socialLinks: {
      whatsapp: "+8888888888",
      messeneger: "@williambrown",
      twitter: "@williambrown",
      email: "william.brown@example.com",
      telegram: "@williambrown"
    }
  },
  {
    id: 10,
    name: "Emma Martin",
    phoneNumber: "+6666666666",
    socialLinks: {
      whatsapp: "+6666666666",
      messeneger: "@emmamartin",
      twitter: "@emmamartin",
      email: "emma.martin@example.com",
      telegram: "@emmamartin"
    }
  },
  {
    id: 11,
    name: "James Rodriguez",
    phoneNumber: "+3333333333",
    socialLinks: {
      whatsapp: "+3333333333",
      messeneger: "@jamesrodriguez",
      twitter: "@jamesrodriguez",
      email: "james.rodriguez@example.com",
      telegram: "@jamesrodriguez",
      youtube: "jamesrodriguez"
    }
  },
  {
    id: 12,
    name: "Ava Harris",
    phoneNumber: "+7777777777",
    socialLinks: {
      whatsapp: "+7777777777",
      messeneger: "@avaharris",
      twitter: "@avaharris",
      email: "ava.harris@example.com",
      telegram: "@avaharris"
    }
  },
  {
    id: 13,
    name: "Liam Martinez",
    phoneNumber: "+5555555555",
    socialLinks: {
      whatsapp: "+5555555555",
      messeneger: "@liammartinez",
      twitter: "@liammartinez",
      email: "liam.martinez@example.com",
      telegram: "@liammartinez",
      youtube: "liammartinez"
    }
  },
  {
    id: 14,
    name: "Mia Turner",
    phoneNumber: "+9999999999",
    socialLinks: {
      whatsapp: "+9999999999",
      messeneger: "@miaturner",
      twitter: "@miaturner",
      email: "mia.turner@example.com",
      telegram: "@miaturner"
    }
  },
  {
    id: 15,
    name: "Noah White",
    phoneNumber: "+8888888888",
    socialLinks: {
      whatsapp: "+8888888888",
      messeneger: "@noahwhite",
      twitter: "@noahwhite",
      email: "noah.white@example.com",
      telegram: "@noahwhite"
    }
  },
  {
    id: 16,
    name: "Charlotte Lewis",
    phoneNumber: "+1111111111",
    socialLinks: {
      whatsapp: "+1111111111",
      messeneger: "@charlottelewis",
      twitter: "@charlottelewis",
      email: "charlotte.lewis@example.com",
      telegram: "@charlottelewis",
      youtube: "charlottelewis"
    }
  },
  {
    id: 17,
    name: "Liam Baker",
    phoneNumber: "+4444444444",
    socialLinks: {
      whatsapp: "+4444444444",
      messeneger: "@liambaker",
      twitter: "@liambaker",
      email: "liam.baker@example.com",
      telegram: "@liambaker"
    }
  },
  {
    id: 18,
    name: "Sophia Hall",
    phoneNumber: +1234567890,
    socialLinks: {
      whatsapp: "+1234567890",
      messeneger: "@sophiahall",
      twitter: "@sophiahall",
      email: "sophia.hall@example.com",
      telegram: "@sophiahall",
      youtube: "sophiahall"
    }
  },
  {
    id: 19,
    name: "Oliver Garcia",
    phoneNumber: +9876543210,
    socialLinks: {
      whatsapp: "+9876543210",
      messeneger: "@olivergarcia",
      twitter: "@olivergarcia",
      email: "oliver.garcia@example.com",
      telegram: "@olivergarcia",
      youtube: "olivergarcia"
    }
  },
  {
    id: 20,
    name: "Emma Perez",
    phoneNumber: "+2222222222",
    socialLinks: {
      whatsapp: "+2222222222",
      messeneger: "@emmaperez",
      twitter: "@emmaperez",
      email: "emma.perez@example.com",
      telegram: "@emmaperez"
    }
  },
];
// Add more dummy data items as needed
const shopData:ShopProducts = [
  {
    id: 1,
    discount: 10,
    name: "Product A",
    promoCode: "SALE10",
    deadline: "2023-10-31",
    deadlineTime: "23:59:59",
  },
  {
    id: 2,
    name: "Product B",
    promoCode: "SUMMER20",
  },
  {
    id: 3,
    discount: 15,
    name: "Product C",
    promoCode: "DISCOUNT15",
    deadline: "2023-09-30",
    deadlineTime: "18:00:00",
  },
  {
    id: 4,
    discount: 5,
    name: "Product D",
    promoCode: "FALL5",
    deadline: "2023-11-15",
    deadlineTime: "12:30:00",
  },
  {
    id: 5,
    name: "Product E",
    promoCode: "HOLIDAY25",
  },
  {
    id: 6,
    discount: 12,
    name: "Product F",
    promoCode: "12OFF",
    deadline: "2023-12-31",
    deadlineTime: "23:59:59",
  },
  {
    id: 7,
    discount: 8,
    name: "Product G",
    promoCode: "SAVE8",
    deadline: "2023-10-20",
    deadlineTime: "20:45:00",
  },
  {
    id: 8,
    discount: 20,
    name: "Product H",
    promoCode: "BIGSALE20",
    deadline: "2023-09-15",
    deadlineTime: "15:30:00",
  },
  {
    id: 9,
    name: "Product I",
    promoCode: "SPECIAL5",
  },
  {
    id: 10,
    discount: 25,
    name: "Product J",
    promoCode: "FLASH25",
    deadline: "2023-11-10",
    deadlineTime: "10:00:00",
  },
  {
    id: 11,
    discount: 7,
    name: "Product K",
    promoCode: "AUTUMN7",
    deadline: "2023-11-05",
    deadlineTime: "19:30:00",
  },
  {
    id: 12,
    name: "Product L",
    promoCode: "SAVE5NOW",
  },
  {
    id: 13,
    discount: 18,
    name: "Product M",
    promoCode: "DEAL18",
    deadline: "2023-09-25",
    deadlineTime: "22:00:00",
  },
  {
    id: 14,
    name: "Product N",
    promoCode: "WINTER15",
  },
  {
    id: 15,
    discount: 30,
    name: "Product O",
    promoCode: "HOLIDAY30",
    deadline: "2023-12-24",
    deadlineTime: "23:59:59",
  },
  {
    id: 16,
    discount: 10,
    name: "Product P",
    promoCode: "SALE10OFF",
    deadline: "2023-11-30",
    deadlineTime: "21:15:00",
  },
  {
    id: 17,
    name: "Product Q",
    promoCode: "SAVE5TODAY",
  },
  {
    id: 18,
    discount: 22,
    name: "Product R",
    promoCode: "SPECIAL22",
    deadline: "2023-10-10",
    deadlineTime: "17:45:00",
  },
  {
    id: 19,
    discount: 12,
    name: "Product S",
    promoCode: "DISCOUNT12",
    deadline: "2023-09-20",
    deadlineTime: "14:00:00",
  },
  {
    id: 20,
    name: "Product T",
    promoCode: "SUMMERSALE",
  },
];// Add more dummy data items as needed

const promoData = [
  {
    //
  },
];
const discoverData = [
  {
    //
  },
];

// Function to fetch dummy data for the "Contacts" tab (for testing)
export const getContactsData = async () => {
  // Simulate an asynchronous operation (e.g., fetching from a database)
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve(contactsData);
    }, 1000); // Simulate a delay of 1 second
  });
};

// Function to fetch dummy data for the "Shop" tab (for testing)
export const getShopData = async () => {
  // Simulate an asynchronous operation (e.g., fetching from a database)
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve(shopData);
    }, 1000); // Simulate a delay of 1 second
  });
};

// Function to fetch dummy data for the "Promo" tab (for testing)
export const getPromoData = async () => {
  // Simulate an asynchronous operation (e.g., fetching from a database)
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve(promoData);
    }, 1000); // Simulate a delay of 1 second
  });
};

// Function to fetch dummy data for the "Discover" tab (for testing)
export const getDiscoverData = async () => {
  // Simulate an asynchronous operation (e.g., fetching from a database)
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve(discoverData);
    }, 1000); // Simulate a delay of 1 second
  });
};

// ...
