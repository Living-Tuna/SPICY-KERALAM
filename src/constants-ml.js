export const BRAND = {
  heading: "Spicy Keralam",
  subtitle: "സുഗന്ധവ്യഞ്ജനങ്ങൾ & മില്ലറ്റുകൾ",
};

export const CONTACT = {
  whatsapp: "+919447282695",
  phone: "+919447282695",
  email: "spicykeralamalpy@gmail.com",
};

export const STORE = {
  name: "Spicy Keralam Spices & Millets",
  place: "Spicy Keralam Spices and Millets store, Alappuzha",
  address: "കൊട്ടാരപാലം, ഫെഡറൽ ബാങ്കിന് എതിർവശം, പാലസ് വാർഡ്, ആലപ്പുഴ, കേരളം, ഇന്ത്യ",
  mapEmbed:
    "https://maps.google.com/maps?q=Spicy%20Keralam%20Spices%20and%20Millets%20store%20Alappuzha&t=&z=15&ie=UTF8&iwloc=&output=embed",
  directionUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Spicy+Keralam+Spices+and+Millets+store+Alappuzha",
};

export const ITEMS = [
  {
    name: "ഏലം",
    nameML: "Green Cardamom",
    image: "/images/cardamom.jpg",
    width: 1536,
    height: 1024,
    highlight: "ഊർജ്ജസ്വലവും സുഗന്ധവും",
  },
  {
    name: "ഗ്രാമ്പൂ",
    nameML: "Clove",
    image: "/images/clove.jpg",
    width: 1536,
    height: 1024,
    highlight: "പുതുതായി ഉണക്കിയത്",
  },
  {
    name: "ജാതിപ്പത്രി",
    nameML: "Nutmeg maise",
    image: "/images/nutmeg-maze.jpg",
    width: 1536,
    height: 1024,
    highlight: "മുഴുവനുമായ സുഗന്ധം",
  },
  {
    name: "ജാതിക്ക",
    nameML: "Nutmeg",
    image: "/images/nutmeg.png",
    width: 600,
    height: 600,
    highlight: "മുഴുവനുമായ സുഗന്ധം",
  },
  {
    name: "കുരുമുളക്",
    nameML: "Black Pepper",
    image: "/images/pepper.jpg",
    width: 1536,
    height: 1024,
    highlight: "വെയിലിൽ ഉണക്കിയത്, കടുപ്പമേറിയത്",
  },
  {
    name: "തക്കോലം",
    nameML: "Star Anise",
    image: "/images/star-annice.jpg",
    width: 1448,
    height: 1086,
    highlight: "പ്രീമിയം ഗ്രേഡ്",
  },
  {
    name: "കറുവാപ്പട്ട",
    nameML: "Cinnamon Stick",
    image: "/images/cinnamon-stick.jpg",
    width: 1536,
    height: 1024,
    highlight: "മധുരവും സുഗന്ധവും",
  },
  {
    name: "മരയൂർ ചക്കര",
    nameML: "Marayur Jaggery",
    image: "/images/marayur-jaggery.png",
    width: 800,
    height: 800,
    highlight: "പാരമ്പര്യവും ശുദ്ധവും",
  },
  {
    name: "കറുവാപ്പട്ട",
    nameML: "Cinnamon",
    image: "/images/cinnamon.png",
    width: 486,
    height: 452,
    highlight: "സുഗന്ധവും രുചികരവും",
  },
];

const GALLERY_DESC =
  "ഞങ്ങളുടെ സുഗന്ധവ്യഞ്ജനങ്ങളും തേനും എല്ലാ ഉൽപ്പന്നങ്ങളും സ്വന്തം കർഷകരിൽ നിന്ന് നേരിട്ട് സ്റ്റോറിലേക്ക് എത്തിച്ച സ്വാഭാവിക ഉൽപ്പന്നങ്ങളാണ്. ശുദ്ധമായതും നന്നായി പാക്ക് ചെയ്തതും സൂക്ഷിച്ചതും.";

const gallery = (name, image) => ({
  name,
  image: `/pictures/${image}.jpg`,
  width: 400,
  height: 400,
  description: GALLERY_DESC,
});

export const GALLERY = [
  gallery("മുള അരി", "bamboo-rice"),
  gallery("ചിയ വിത്തുകൾ", "chia-seeds"),
  gallery("കറുവാപ്പട്ട", "cinnamon-stick"),
  gallery("തേങ്ങ എള്ളുരുണ്ട", "coconut-sesame-balls"),
  gallery("കാപ്പിപ്പൊടി", "coffee-powder"),
  gallery("റാഗി (മുതിര)", "finger-millet"),
  gallery("തേൻ", "honey"),
  gallery("ഞങ്ങളുടെ സ്റ്റോർ", "items"),
  gallery("സ്റ്റോർ ഷെൽഫുകൾ", "items2"),
  gallery("സ്റ്റോറിൽ നിന്നുള്ള പുതിയ സ്റ്റോക്ക്", "items3"),
  gallery("കിനോവ വിത്തുകൾ", "kinova-seeds"),
  gallery("ലെമൺഗ്രാസ് ഓയിൽ", "lemongrass-oil"),
  gallery("ജാതിപ്പത്രി", "nutmeg-maze"),
  gallery("പഞ്ചസാര രഹിത പീനട്ട് ബൈറ്റ്സ്", "peanut-bites-sugar-free"),
  gallery("കമ്പ് (പേൾ മില്ലറ്റ്)", "pearl-millet"),
  gallery("സ്പൈസ് ബോക്സ്", "spice-box"),
  gallery("സ്പൈസ് ഗിഫ്റ്റ് ബോക്സ്", "spice-gift-box"),
];

export const TESTIMONIALS = [
  {
    name: "അശ്വിൻ ആർ",
    rating: 5,
    text: "കുരുമുളക്, കറുവാപ്പട്ട, തക്കോലം, ഏലം, ഗ്രാമ്പൂ — എല്ലാം പുതിയതും സുഗന്ധമുള്ളതും പ്രീമിയം നിലവാരത്തിലുള്ളതും. ആലപ്പുഴയിലെ മറ്റ് കടകളെ അപേക്ഷിച്ച് വളരെ ന്യായമായ വില.",
  },
  {
    name: "മീര എസ്",
    rating: 5,
    text: "കേരളത്തിന്റെ സാരാംശം ഉൾക്കൊള്ളുന്ന പുതിയതും സുഗന്ധമുള്ളതും ആധികാരികവുമായ സുഗന്ധവ്യഞ്ജനങ്ങൾ. മികച്ച ഗുണനിലവാരം, സ്വാഭാവിക സുഗന്ധം, വൃത്തിയായ പാക്കിംഗ് — യഥാർത്ഥ സുഗന്ധവ്യഞ്ജനങ്ങൾ ഇഷ്ടപ്പെടുന്നവർക്ക് സംശയമില്ലാതെ ശുപാർശ ചെയ്യുന്നു.",
  },
  {
    name: "അർജുൻ കെ",
    rating: 5,
    text: "അവിശ്വസനീയമായ ഒരു കണ്ടെത്തൽ. ഇതിന് മുമ്പ് ആലപ്പുഴയിൽ പല കടകളിലും പോയി — എന്നാൽ താങ്ങാവുന്ന വിലയോ ഞാൻ തേടിയതോ അവിടെ കിട്ടിയില്ല. ഈ കടയിൽ എല്ലാം കിട്ടി.",
  },
  {
    name: "നിതിൻ വി",
    rating: 5,
    text: "അവിടെ നിന്ന് മില്ലറ്റും ഡ്രൈ ഫ്രൂട്ട്സും വാങ്ങി — മികച്ച ഗുണനിലവാരം, തികച്ചും ഇഷ്ടപ്പെട്ടു. ഇനിയും ഇവിടെ നിന്ന് തന്നെ വാങ്ങും.",
  },
  {
    name: "രേഷ്മ പി",
    rating: 4,
    text: "മികച്ച ഗുണമേന്മയുള്ള മില്ലറ്റും ഡ്രൈ ഫ്രൂട്ട്സും വളരെ താങ്ങാവുന്ന വിലയിൽ, മികച്ച ഉപഭോക്തൃ സേവനത്തോടെ. വീണ്ടും വരാൻ പറ്റാത്ത ഊഷ്മളമായ വാങ്ങൽ അന്തരീക്ഷം.",
  },
  {
    name: "രഘു എം",
    rating: 5,
    text: "ആലപ്പുഴ നഗരത്തിലെ പ്രീമിയം കട. ഏലം, ഗ്രാമ്പൂ, കുരുമുളക്, കരിപ്പട്ടി — എല്ലാം നല്ലതും പുതിയതും. തീർച്ചയായും സന്ദർശിക്കേണ്ട സ്ഥലം!",
  },
];

export const REVIEWS = [
  {
    heading: "ഞങ്ങളുടെ സ്പൈസി ബോക്സ്",
    sub: "100% ഓർഗാനിക് · കൃത്രിമം ഇല്ല · കീടനാശിനി ഇല്ല",
    desc: "പുതിയതും ആധികാരികവുമായ കേരള സുഗന്ധവ്യഞ്ജനങ്ങളും മില്ലറ്റുകളും — 100% ഓർഗാനിക്, കൃത്രിമവസ്തുക്കളോ കീടനാശിനികളോ ഇല്ലാതെ. ഞങ്ങളുടെ ചെടികളിൽ നിന്ന് നേരിട്ട് നിങ്ങളുടെ വീട്ടിലേക്ക്.",
    hashtags: ["#100%Organic", "#NoArtificials", "#NoPesticides", "#PlantsToStore"],
    button: { label: "അന്വേഷിക്കുക", href: "#contact" },
  },
  {
    heading: "കേരളത്തിന്റെ സുഗന്ധം, എല്ലായിടത്തും",
    sub: "ആലപ്പുഴയിൽ നിന്ന് നിങ്ങളുടെ വീട്ടിലേക്ക്",
    desc: "കേരളത്തിന്റെ സാരാംശം ഉൾക്കൊള്ളുന്ന ആധികാരിക സുഗന്ധവ്യഞ്ജനങ്ങൾ — ഉയർന്ന ഗുണമേന്മ, സ്വാഭാവിക സുഗന്ധം, വൃത്തിയായി പാക്ക് ചെയ്തത്.",
  },
  {
    heading: "ഇന്ത്യയിലെങ്ങും ഡെലിവറി",
    sub: "നിങ്ങളുടെ സ്പൈസി ബോക്സ്, വീട്ടിൽ എത്തിക്കുന്നു",
    desc: "ഞങ്ങളുടെ ശുദ്ധവും ഓർഗാനിക് സുഗന്ധവ്യഞ്ജനങ്ങളും മില്ലറ്റുകളും ഇന്ത്യയിലെ എല്ലാ കോണുകളിലേക്കും — പുതുതായി പാക്ക് ചെയ്ത് ശ്രദ്ധയോടെ എത്തിക്കുന്നു.",
  },
];