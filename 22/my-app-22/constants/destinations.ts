export interface DestinationTypes {
    id: number, 
    title: string, 
    description: string,
    tags: string[],
    isHighlight: boolean,
    image: string,
    rating: number,
    duration: string,
    priceCategory: string
}

export const destinationArr: DestinationTypes[] = [
  {
    id: 1,
    title: "Kyoto, Japan",
    description: "A vibrant blend of ancient temples, traditional wooden houses, and stunning bamboo forests.",
    tags: ["Culture", "History", "Nature", "Asia"],
    isHighlight: true,
    image: "https://example.com/images/kyoto.jpg",
    rating: 4.9,
    duration: "5-7 days",
    priceCategory: "$$$"
  },
  {
    id: 2,
    title: "Santorini, Greece",
    description: "Famous for its whitewashed houses clinging to cliffs, brilliant sunsets, and breathtaking Aegean Sea views.",
    tags: ["Beach", "Romantic", "Europe"],
    isHighlight: true,
    image: "https://example.com/images/santorini.jpg",
    rating: 4.8,
    duration: "3-5 days",
    priceCategory: "$$$$"
  },
  {
    id: 3,
    title: "Reykjavík, Iceland",
    description: "The gateway to Iceland's volcanic landscapes, dramatic waterfalls, and the mesmerizing Northern Lights.",
    tags: ["Adventure", "Nature", "Cold Weather"],
    isHighlight: false,
    image: "https://example.com/images/reykjavik.jpg",
    rating: 4.7,
    duration: "4-6 days",
    priceCategory: "$$$$"
  },
  {
    id: 4,
    title: "Machu Picchu, Peru",
    description: "An ancient Incan citadel set high in the Andes Mountains, offering incredible hiking and rich history.",
    tags: ["History", "Hiking", "Adventure", "South America"],
    isHighlight: true,
    image: "https://example.com/images/machu-picchu.jpg",
    rating: 4.9,
    duration: "4-5 days",
    priceCategory: "$$$"
  },
  {
    id: 5,
    title: "Cape Town, South Africa",
    description: "A harbor city dominated by the magnificent Table Mountain, offering wine tours and wildlife viewing.",
    tags: ["City", "Nature", "Wildlife", "Africa"],
    isHighlight: false,
    image: "https://example.com/images/cape-town.jpg",
    rating: 4.6,
    duration: "5-7 days",
    priceCategory: "$$"
  },
  {
    id: 6,
    title: "Banff National Park, Canada",
    description: "Canada's oldest national park, known for its surreal turquoise glacial lakes and majestic mountain peaks.",
    tags: ["Nature", "Hiking", "Adventure", "North America"],
    isHighlight: false,
    image: "https://example.com/images/banff.jpg",
    rating: 4.8,
    duration: "3-5 days",
    priceCategory: "$$"
  },
  {
    id: 7,
    title: "Rome, Italy",
    description: "A globally renowned city center packed with nearly 3,000 years of globally influential art, architecture, and culture.",
    tags: ["History", "Food", "Culture", "Europe"],
    isHighlight: true,
    image: "https://example.com/images/rome.jpg",
    rating: 4.7,
    duration: "4-5 days",
    priceCategory: "$$$"
  },
  {
    id: 8,
    title: "Queenstown, New Zealand",
    description: "The ultimate adventure capital of the world, offering bungee jumping, skiing, and jet boating.",
    tags: ["Adventure", "Extreme Sports", "Nature"],
    isHighlight: false,
    image: "https://example.com/images/queenstown.jpg",
    rating: 4.9,
    duration: "5-7 days",
    priceCategory: "$$$$"
  },
  {
    id: 9,
    title: "Oaxaca, Mexico",
    description: "A vibrant culinary hotspot famous for its indigenous culture, colorful markets, and incredible street food.",
    tags: ["Food", "Culture", "Budget-Friendly"],
    isHighlight: false,
    image: "https://example.com/images/oaxaca.jpg",
    rating: 4.8,
    duration: "3-5 days",
    priceCategory: "$"
  },
  {
    id: 10,
    title: "Petra, Jordan",
    description: "A famous archaeological site in Jordan's southwestern desert containing tombs and temples carved into pink sandstone cliffs.",
    tags: ["History", "Archaeology", "Middle East"],
    isHighlight: true,
    image: "https://example.com/images/petra.jpg",
    rating: 4.9,
    duration: "2-3 days",
    priceCategory: "$$$"
  },
  {
    id: 11,
    title: "Cairo, Egypt",
    description: "Home to the iconic Giza Pyramids and the Sphinx, offering a chaotic yet deeply mesmerizing look into ancient human history.",
    tags: ["History", "Culture", "Africa"],
    isHighlight: false,
    image: "https://example.com/images/cairo.jpg",
    rating: 4.5,
    duration: "3-4 days",
    priceCategory: "$$"
  },
  {
    id: 12,
    title: "Bora Bora, French Polynesia",
    description: "A small South Pacific island northwest of Tahiti, famous for its turquoise lagoons, coral reefs, and luxury overwater bungalows.",
    tags: ["Beach", "Luxury", "Romantic"],
    isHighlight: true,
    image: "https://example.com/images/bora-bora.jpg",
    rating: 4.9,
    duration: "5-7 days",
    priceCategory: "$$$$$"
  }
]