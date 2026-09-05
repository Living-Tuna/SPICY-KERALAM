export const BRAND = {
  heading: "Spicy Keralam",
  subtitle: "Spices & Millets",
};

export const CONTACT = {
  whatsapp: "+919447282695",
  phone: "+919447282695",
  email: "spicykeralamalpy@gmail.com",
};

export const STORE = {
  name: "Spicy Keralam Spices & Millets",
  place: "Spicy Keralam Spices and Millets store, Alappuzha",
  address: "Kottarapalam, Opp. Federal Bank, Palace Ward, Alappuzha, Kerala, India",
  mapEmbed:
    "https://maps.google.com/maps?q=Spicy%20Keralam%20Spices%20and%20Millets%20store%20Alappuzha&t=&z=15&ie=UTF8&iwloc=&output=embed",
  directionUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Spicy+Keralam+Spices+and+Millets+store+Alappuzha",
};

export const ITEMS = [
  {
    name: "Green Cardamom",
    nameML: "ഏലം",
    image: "/images/cardamom.jpg",
    width: 1536,
    height: 1024,
    highlight: "Vibrant & aromatic",
  },
  {
    name: "Clove",
    nameML: "ഗ്രാമ്പൂ",
    image: "/images/clove.jpg",
    width: 1536,
    height: 1024,
    highlight: "Freshly dried",
  },
  {
    name: "Nutmeg maise",
    nameML: "ജാതിപ്പത്രി",
    image: "/images/nutmeg-maze.jpg",
    width: 1536,
    height: 1024,
    highlight: "Whole & fragrant",
  },
  {
    name: "Nutmeg",
    nameML: "ജാതിക്ക",
    image: "/images/nutmeg.png",
    width: 600,
    height: 600,
    highlight: "Whole & fragrant",
  },
  {
    name: "Black Pepper",
    nameML: "കുരുമുളക്",
    image: "/images/pepper.jpg",
    width: 1536,
    height: 1024,
    highlight: "Sun-dried & pungent",
  },
  {
    name: "Star Anise",
    nameML: "തക്കോലം",
    image: "/images/star-annice.jpg",
    width: 1448,
    height: 1086,
    highlight: "Premium grade",
  },
  {
    name: "Cinnamon Stick",
    nameML: "കറുവാപ്പട്ട",
    image: "/images/cinnamon-stick.jpg",
    width: 1536,
    height: 1024,
    highlight: "Sweet & woody",
  },
  {
    name: "Marayur Jaggery",
    nameML: "മരയൂർ ചക്കര",
    image: "/images/marayur-jaggery.png",
    width: 800,
    height: 800,
    highlight: "Traditional & pure",
  },
  {
    name: "Cinnamon",
    nameML: "കറുവാപ്പട്ട",
    image: "/images/cinnamon.png",
    width: 486,
    height: 452,
    highlight: "Rich & aromatic",
  },
];

const GALLERY_DESC =
  "Our spices, honey and all our products are our own natural items, sourced directly from farms to our store. Pure, well-packed and stored well.";

const gallery = (name, image) => ({
  name,
  image: `/pictures/${image}.jpg`,
  width: 400,
  height: 400,
  description: GALLERY_DESC,
});

export const GALLERY = [
  gallery("Bamboo Rice", "bamboo-rice"),
  gallery("Chia Seeds", "chia-seeds"),
  gallery("Cinnamon Stick", "cinnamon-stick"),
  gallery("Coconut Sesame Balls", "coconut-sesame-balls"),
  gallery("Coffee Powder", "coffee-powder"),
  gallery("Finger Millet", "finger-millet"),
  gallery("Honey", "honey"),
  gallery("Our Store", "items"),
  gallery("Store Shelves", "items2"),
  gallery("Fresh From Store", "items3"),
  gallery("Kinova Seeds", "kinova-seeds"),
  gallery("Lemongrass Oil", "lemongrass-oil"),
  gallery("Nutmeg maise (jaathipathri (malayalam))", "nutmeg-maze"),
  gallery("Sugar-Free Peanut Bites", "peanut-bites-sugar-free"),
  gallery("Pearl Millet", "pearl-millet"),
  gallery("Spice Box", "spice-box"),
  gallery("Spice Gift Box", "spice-gift-box"),
];

export const TESTIMONIALS = [
  {
    name: "Aswin R",
    rating: 5,
    text: "Bought black pepper, cinnamon, star anise, green cardamom and cloves — every single item was fresh, aromatic and of premium quality. Very reasonable prices compared to other shops in Alappuzha.",
  },
  {
    name: "Meera S",
    rating: 5,
    text: "Fresh, aromatic and authentic spices that truly capture the essence of Kerala. Excellent quality, rich natural flavour, neatly packed — highly recommended for anyone who loves real spices.",
  },
  {
    name: "Arjun K",
    rating: 5,
    text: "A mind-blowing discovery. I had gone to many shops in Alappuzha before this, but none of them felt affordable or had what I was really looking for. This one had it all.",
  },
  {
    name: "Nithin V",
    rating: 5,
    text: "Bought millets and dry fruits from there — great quality and I absolutely loved it. I would continue purchasing from here.",
  },
  {
    name: "Reshma P",
    rating: 4,
    text: "Good quality millets and dry fruits for very affordable prices, plus great customer service. A warm purchasing atmosphere that keeps you coming back.",
  },
  {
    name: "Raghu M",
    rating: 5,
    text: "Premium shop in Alappuzha town. Cardamom, clove, black pepper, karipetty — all good and fresh. Definitely worth a visit!",
  },
];

export const REVIEWS = [
  {
    heading: "More Than Just Spices",
    sub: "Millets, honey, seeds & healthy essentials",
    desc: "From aromatic Kerala spices to nutrient-rich millets, organic honey, chia seeds, coconut sesame balls, lemongrass oil and more — we bring you a complete range of natural, farm-fresh products.",
    hashtags: ["#Millets", "#OrganicHoney", "#Seeds", "#DryFruits", "#HealthyEssentials"],
    button: { label: "Explore Our Collection", href: "#gallery" },
  },
  {
    heading: "Glimpse of Our World",
    sub: "Fresh from farm to store",
    desc: "Take a look at what fills our shelves — bamboo rice, finger millet, pearl millet, spice gift boxes, coffee powder and many more natural treasures from Kerala's heartland.",
  },
  {
    heading: "Pure & Organic, Always",
    sub: "No artificials · no pesticides · 100% natural",
    desc: "Every product we offer — whether spices, millets, honey or seeds — is 100% organic, chemical-free and sourced directly from trusted farms across Kerala.",
  },
];