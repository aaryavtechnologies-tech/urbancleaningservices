export interface CleaningService {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
  scope: string[];
  idealFor: string;
  durationEstimate: string;
}

export const BUSINESS_INFO = {
  name: "Urban Full Home Deep Cleaning Services in Bangalore",
  shortName: "Urban Cleaning",
  tagline: "Your Home, Our Care.",
  heroHeading: "Experience a Cleaner, Fresher & Healthier Home.",
  heroSubheading:
    "Give your home the care it deserves with professional deep cleaning services. We help make your living space fresh, hygienic and beautifully clean.",
  category: "House Cleaning Service",
  rating: 5.0,
  reviewCount: 6,
  hours: "Open 24 Hours",
  is24Hours: true,
  isWomenOwned: true,
  address: {
    street: "Kariyammana Agrahara Rd, near MANTRI ESPANA, Kariyammana Agrahara",
    area: "Bellandur",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560103",
    country: "India",
    full: "Kariyammana Agrahara Rd, near MANTRI ESPANA, Kariyammana Agrahara, Bellandur, Bengaluru, Karnataka 560103, India",
  },
  websiteListed: "urbanleaning.pages.dev",
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Urban+full+home+deep+cleaning+services+Kariyammana+Agrahara+Bellandur+Bengaluru",
  mapsEmbedQuery:
    "Urban+full+home+deep+cleaning+services+Kariyammana+Agrahara+Bellandur+Bengaluru",
  developerCredit: {
    text: "Designed & Developed by Aaryav Technologies",
    companyName: "Aaryav Technologies",
    url: "https://aaryavtech.online/",
  },
  highlights: [
    {
      title: "Women-Owned Business",
      description: "Proudly women-led with meticulous attention to detail, trust, and exceptional care.",
      icon: "HeartHandshake",
    },
    {
      title: "Available 24 Hours",
      description: "Flexible, round-the-clock scheduling tailored to Bangalore's busy lifestyle.",
      icon: "Clock",
    },
    {
      title: "Based in Bellandur, Bangalore",
      description: "Conveniently located near Mantri Espana, serving Bellandur and surrounding communities.",
      icon: "MapPin",
    },
    {
      title: "5.0 Google Rating",
      description: "Flawless 5.0 rating from 6 verified Google reviews for our thorough deep cleaning.",
      icon: "Star",
    },
  ],
};

export const SERVICES: CleaningService[] = [
  {
    id: "full-home",
    slug: "full-home-deep-cleaning",
    name: "Full Home Deep Cleaning",
    shortDescription: "Detailed cleaning for different areas of your home.",
    fullDescription:
      "A comprehensive, corner-to-corner sanitization and intensive deep cleaning for your entire residence. We meticulously clean living rooms, bedrooms, kitchens, bathrooms, balconies, doors, and fixtures to restore total freshness and hygiene.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    iconName: "Home",
    features: [
      "Deep floor scrubbing and machine polishing prep",
      "Wall dusting and cobweb removal across all rooms",
      "Cabinet, wardrobe, and drawer exterior detailing",
      "Ceiling fan, switchboard, and lighting fixture dusting",
      "Window panes, glass sliders, and track vacuuming",
      "Complete sanitization of touchpoints and handles",
    ],
    scope: [
      "All Living & Dining Areas",
      "Master & Guest Bedrooms",
      "Full Kitchen & Utility Zones",
      "All Bathrooms & Powder Rooms",
      "Balconies, Grills & Entryways",
    ],
    idealFor: "Annual deep cleaning, festive preparation, post-renovation refresh, or thorough seasonal hygiene.",
    durationEstimate: "4 to 7 hours (depending on home size)",
  },
  {
    id: "kitchen",
    slug: "kitchen-deep-cleaning",
    name: "Kitchen Deep Cleaning",
    shortDescription: "Focus on kitchen surfaces, cabinets and everyday dirt buildup.",
    fullDescription:
      "The kitchen is the heart of your home and deserves rigorous hygienic attention. Our kitchen deep cleaning removes grease buildup, stains, oil residues, and grime from countertops, tiled splashbacks, sinks, and cabinet exteriors.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    iconName: "Utensils",
    features: [
      "Degreasing of kitchen countertops, slab, and backsplash tiles",
      "Cabinet and drawer exterior wipe-down and handle degreasing",
      "Exhaust fan and chimney exterior surface cleaning",
      "Stainless steel sink descaling and drain area sanitization",
      "Appliance exterior detailing (refrigerator, microwave, hob)",
      "Floor scrubbing to eliminate greasy residues and spills",
    ],
    scope: [
      "Countertop & Preparation Slabs",
      "Kitchen Wall Tiles & Grout",
      "External Cabinetry & Pulls",
      "Sink, Faucet & Drainage Area",
      "Chimney & Exhaust Exterior Surfaces",
      "Kitchen Floor & Skirting",
    ],
    idealFor: "Homes cooking frequent Indian meals, moving into a pre-occupied flat, or biannual grease eradication.",
    durationEstimate: "2 to 3.5 hours",
  },
  {
    id: "bathroom",
    slug: "bathroom-deep-cleaning",
    name: "Bathroom Deep Cleaning",
    shortDescription: "Detailed cleaning of bathroom surfaces, tiles and fixtures.",
    fullDescription:
      "Target stubborn Bangalore hard water stains, soap scum, limescale, and tile discoloration. We disinfect and restore toilet bowls, washbasins, shower enclosures, taps, and wall tiles to a sparkling, sanitary shine.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    iconName: "Droplets",
    features: [
      "Hard water stain removal on wall tiles and shower partitions",
      "Intensive toilet pot descaling, sanitization, and disinfection",
      "Washbasin, vanity counter, and faucet polishing",
      "Mirror streak-free cleaning and chrome fixture gleam",
      "Tile grout scrubbing and bathroom floor deep washing",
      "Exhaust fan dust removal and drain point clearance",
    ],
    scope: [
      "Tile Walls & Floor Grout",
      "WC / Toilet Fixture & Tank",
      "Shower Cubicle / Glass Partitions",
      "Washbasin, Mirrors & Vanity Tops",
      "Faucets, Taps & Showerheads",
    ],
    idealFor: "Combatting Bangalore hard water scaling, weekly or monthly hygiene assurance, and odor elimination.",
    durationEstimate: "1.5 to 2.5 hours per bathroom",
  },
  {
    id: "bedroom",
    slug: "bedroom-cleaning",
    name: "Bedroom Cleaning",
    shortDescription: "Refresh your bedroom with detailed cleaning.",
    fullDescription:
      "Transform your sleeping sanctuary into a spotless, allergen-free environment. We tackle dust mite buildup, under-bed dust, wardrobe surfaces, window sills, and mattress vacuuming for peaceful, healthy sleep.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    iconName: "Bed",
    features: [
      "Under-bed and hard-to-reach area dust extraction",
      "Wardrobe, dressing table, and mirror polishing",
      "Mattress surface vacuuming to minimize dust and allergens",
      "Ceiling fan blades and air conditioner filter dusting",
      "Window glass, mesh frame, and track clearing",
      "Floor vacuuming, mopping, and skirting line sanitization",
    ],
    scope: [
      "Sleeping Space & Bed Frame Area",
      "Wardrobe & Closet Exteriors",
      "Dressing Table & Mirror",
      "Ceiling Fans, Lights & AC Filters",
      "Windows, Grills & Curtains Dusting",
    ],
    idealFor: "Allergy sufferers, seasonal refreshes, guest room prep, or restful bedroom revitalization.",
    durationEstimate: "1.5 to 2.5 hours",
  },
  {
    id: "living-room",
    slug: "living-room-cleaning",
    name: "Living Room Cleaning",
    shortDescription: "Make your living spaces cleaner and more comfortable.",
    fullDescription:
      "Your living room is where your family gathers and guests are welcomed. We clean and revitalize sofa upholstery surfaces, entertainment units, decorative shelves, balconies, and floor surfaces for a warm and pristine ambiance.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    iconName: "Armchair",
    features: [
      "Sofa and armchair dry vacuuming and fabric refreshing",
      "TV unit, media console, and curio shelf dusting",
      "Window sliders, glass panes, and French door polishing",
      "Balcony floor wash, railing wipe-down, and bird dropping cleanup",
      "Fan, chandelier, and modern light fixture dusting",
      "Floor scrubbing, carpet vacuuming, and entryway detailing",
    ],
    scope: [
      "Main Hallway & Living Room",
      "Dining Table & Seating Area",
      "Balcony & Glass Sliding Doors",
      "Media Console & Decor Shelving",
      "Main Door & Foyer Entrance",
    ],
    idealFor: "Pre-party prep, post-event cleanup, welcoming visiting relatives, or weekly family refresh.",
    durationEstimate: "2 to 3 hours",
  },
  {
    id: "move-in-move-out",
    slug: "move-in-move-out-cleaning",
    name: "Move-In / Move-Out Cleaning",
    shortDescription: "Cleaning support when moving into or out of a home.",
    fullDescription:
      "Moving is stressful enough without having to worry about cleaning. Our Move-In/Move-Out deep cleaning ensures you step into a spotless, sanitized new home or leave your vacated flat in immaculate condition for full deposit recovery.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
    iconName: "Truck",
    features: [
      "Inside-and-out empty cabinet and cupboard cleaning",
      "Intensive kitchen degreasing and tile stain removal",
      "Full bathroom acid-wash descaling and disinfection",
      "Paint splash, tape mark, and post-construction dust cleanup",
      "Comprehensive balcony, utility, and window sill washing",
      "Thorough floor scrubbing for immediate bare-foot move-in",
    ],
    scope: [
      "Complete Empty Residence",
      "All Inside & Outside Cupboards",
      "Bathrooms, Kitchen & Utility Sinks",
      "Electrical Points, Grills & Door Hardware",
      "All Floors, Baseboards & Balconies",
    ],
    idealFor: "Tenants aiming for 100% security deposit refund, new homeowners receiving handover, or landlords.",
    durationEstimate: "5 to 8 hours",
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "customer-focused",
    title: "Customer-Focused Service",
    description: "We prioritize customer satisfaction and convenient cleaning solutions tailored to your schedule.",
    icon: "Smile",
    details:
      "Every home has distinct needs. We listen attentively to your specific requirements, prioritize your critical areas, and treat your living space with the utmost care and respect.",
  },
  {
    id: "detailed-cleaning",
    title: "Detailed Home Cleaning",
    description: "Focus on making your living spaces fresh and clean with thorough attention to corners and edges.",
    icon: "Sparkles",
    details:
      "We don't do superficial sweep-and-mop jobs. Our cleaning targets accumulated dust, tile grout, grease lines, window tracks, and neglected corners that regular daily cleaning misses.",
  },
  {
    id: "available-24-hours",
    title: "Available 24 Hours",
    description: "Convenient availability around the clock to suit Bangalore's dynamic routines and busy professionals.",
    icon: "Clock",
    details:
      "Whether you need an early-morning handover cleaning before your packers arrive or a weekend evening deep clean, our 24/7 service availability gives you total scheduling freedom.",
  },
  {
    id: "women-owned",
    title: "Women-Owned Business",
    description: "Proudly identify as a women-owned business bringing high hygiene standards and trusted care.",
    icon: "ShieldCheck",
    details:
      "As a women-led home service in Bangalore, we bring genuine care, domestic hygiene empathy, dependable work ethics, and meticulous attention to creating healthy home sanctuaries.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Send Your Enquiry",
    description: "Tell us about your home cleaning requirements using our quick online form or location details.",
    icon: "FileText",
  },
  {
    step: "02",
    title: "Discuss Your Requirements",
    description: "Share your location in Bangalore and the specific type of deep cleaning your home needs.",
    icon: "MessageSquare",
  },
  {
    step: "03",
    title: "Get Your Quote",
    description: "Receive a transparent, personalized quotation tailored to your home layout and requirements.",
    icon: "Calculator",
  },
  {
    step: "04",
    title: "Enjoy a Cleaner Home",
    description: "Get ready to enjoy a fresh, hygienic, and beautifully clean living space for you and your family.",
    icon: "Sparkle",
  },
];

export const SERVICE_AREAS = [
  { name: "Bellandur", landmark: "Near Mantri Espana & Central Mall", zip: "560103" },
  { name: "Outer Ring Road (ORR)", landmark: "EcoSpace & Ecoworld Corridor", zip: "560103" },
  { name: "Kariyammana Agrahara", landmark: "Primary Base Location", zip: "560103" },
  { name: "Kadubeesanahalli", landmark: "Near Marathahalli-Sarjapur Link", zip: "560103" },
  { name: "HSR Layout", landmark: "Sectors 1 to 7", zip: "560102" },
  { name: "Sarjapur Road", landmark: "Carmelaram & Wipro Gate", zip: "560035" },
  { name: "Marathahalli", landmark: "Innovative Multiplex & Spice Garden", zip: "560037" },
  { name: "Whitefield", landmark: "ITPL & Hope Farm", zip: "560066" },
  { name: "Kasavanahalli", landmark: "Sarjapur-Haralur Zone", zip: "560035" },
  { name: "Green Glen Layout", landmark: "Bellandur Lake Environs", zip: "560103" },
  { name: "Haralur Road", landmark: "HSR Extension", zip: "560102" },
  { name: "Koramangala", landmark: "Sony World & Forum Mall Area", zip: "560034" },
];

export const BANGALORE_CLEANING_CHECKLIST = [
  {
    category: "Living & Common Areas",
    items: [
      "Ceiling cobwebs and corner dust removal",
      "Ceiling fans and light fixtures dry/wet dusted",
      "Switchboards, skirting boards and door frames wiped",
      "Sofa, cushions and armchair surfaces dry vacuumed",
      "Balcony floor scrubbing and railing dust removal",
      "Window glasses, sliding doors and tracks detailed",
      "Floors machine buffed or thoroughly scrubbed and sanitized",
    ],
  },
  {
    category: "Kitchen & Pantry",
    items: [
      "Countertop and tiled backsplashes degreased and sanitized",
      "Cabinet exteriors and drawer handles wiped clean",
      "Exhaust fan and chimney exterior cleaned of grease",
      "Sink and tap descaled and polished",
      "Appliance exterior wiping (fridge, oven, gas stove)",
      "Kitchen floor deep mopping to remove oily residues",
    ],
  },
  {
    category: "Bathrooms & Restrooms",
    items: [
      "Wall tiles scrubbed and descaled for hard water stains",
      "WC / Commode deep descaled, disinfected inside and out",
      "Washbasin, mirrors, and faucets descaled and shined",
      "Shower partition glass descaled for water drop spots",
      "Floor scrubbed with anti-fungal tile disinfectant",
      "Exhaust fan and drain grille cleared",
    ],
  },
  {
    category: "Bedrooms",
    items: [
      "Wardrobe and cabinet exterior surfaces wiped down",
      "Dressing table mirrors polished streak-free",
      "Under-bed and heavy furniture perimeter vacuumed",
      "Mattress surface vacuumed for dust-free rest",
      "Window panes, safety grills, and mosquito mesh dusted",
      "Door surfaces, handles, and latches sanitized",
    ],
  },
];
