// data.js updated with Deep Clean & Valeting Service

export const serviceBannerData = {
  title: "Deep Clean & Valeting Services",
  description: "Restore your vehicle inside and out with our professional deep cleaning services. From a safe exterior wash to a full interior transformation, Crystal Clean delivers premium results at our Okehampton studio or via our fully equipped mobile service across Devon.",
  thumbnailImage: "7.jpg",
};

export const serviceDetailData = {
  mainTitle: "Professional Deep Cleaning & Valeting",
  mainDescription: "Our Deep Clean services are designed to thoroughly refresh, protect, and maintain your vehicle. Whether you need a quick exterior refresh or a complete interior and exterior transformation, we use professional-grade products, PH-neutral solutions (safe for ceramic coated vehicles), and proven detailing techniques.",
  subDesc: "We are fully self-sufficient for mobile detailing — no water or power required — and our indoor studio ensures year-round service regardless of weather.",

  benefits: {
    title: "When You Need a Deep Clean",
    items: [
      {
        heading: "Exterior Looking Dull or Dirty",
        text: "Road grime, brake dust, and environmental contamination are reducing your vehicle’s shine."
      },
      {
        heading: "Interior Needs Refreshing",
        text: "Seats, carpets, and plastics have built-up dirt, stains, or odours that need professional attention."
      },
      {
        heading: "Preparing for Sale",
        text: "A professional valet increases resale value and makes a strong first impression."
      },
      {
        heading: "Regular Maintenance",
        text: "You want to protect your vehicle’s condition and keep it looking its best all year round."
      }
    ]
  },

  process: {
    title: "How It Works",
    steps: [
      {
        heading: "Request Your Booking",
        text: "Contact us by phone or WhatsApp to choose the valet package that suits your vehicle."
      },
      {
        heading: "Mobile or Studio Appointment",
        text: "We arrive fully equipped at your location or welcome you to our Okehampton unit."
      },
      {
        heading: "Professional Deep Cleaning",
        text: "We carry out a thorough, safe, and detailed cleaning process tailored to your chosen package."
      },
      {
        heading: "Final Inspection & Finish",
        text: "We complete a quality check to ensure your vehicle leaves looking fresh, clean, and revitalised."
      }
    ]
  }
};

export const packagesData = {
  detail: [
    {
      tittle: "Discover Our Complete Deep Clean Packages",
      desc: "Essential Valeting Services"
    }
  ],
  contactLinks: [
    { icon: "Phone", title: "+44 7446 253967", href: "tel:07446253967" },
    { icon: "Mail", title: "crystal.cl34n@gmail.com", href: "mailto:crystal.cl34n@gmail.com" },
    { icon: "MapPin", title: "Unit 1B Cranmere Rd, Okehampton EX20 1UE", href: "https://maps.app.goo.gl/x37S2ncozFs2e4B67" },
  ],

  packages: [
    {
      type: "EXTERIOR WASH",
      price: "£40",
      features: [
        { description: "Premium exterior wash using PH-neutral products (safe for ceramic coated vehicles)." },
        { description: "Safe hand wash, wheel cleaning, tyre dressing, fuel cap cleaning, door seal wipe-down." },
      ],
      btnText: "Book Exterior Wash",
      iconColor: "#0FB981",
      bgColor: "#0FB98120",
      borderColor: "#0FB98130",
    },
    {
      type: "FULL VALET",
      price: "£75",
      features: [
        { description: "Complete interior and exterior clean for a refreshed vehicle." },
        { description: "Includes exterior wash, interior hoover, rubbish removal, window cleaning, wheel cleaning." },
      ],
      btnText: "Book Full Valet",
      iconColor: "#0FB981",
      bgColor: "#0FB98120",
      borderColor: "#0FB98130",
    },
    {
      type: "DEEP FULL VALET",
      price: "£120",
      features: [
        { description: "Our most comprehensive cleaning package." },
        { description: "Includes everything in Full Valet plus tar removal, seat shampoo, mat shampoo, plastic deep clean, air vent detailing, under boot cleaning." },
      ],
      btnText: "Book Deep Full Valet",
      iconColor: "#0FB981",
      bgColor: "#0FB98120",
      borderColor: "#0FB98130",
    },
    {
      type: "ENGINE BAY CLEANING (Add-On)",
      price: "£40",
      features: [
        { description: "Safely detail your engine bay using steam or foam methods depending on individual requirements." },
        { description: "A careful and professional clean — not just a rinse." },
      ],
      btnText: "Add Engine Bay Cleaning",
      iconColor: "#0FB981",
      bgColor: "#0FB98120",
      borderColor: "#0FB98130",
    },
  ]
};