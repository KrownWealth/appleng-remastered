interface Slide {
  id: number;
  description: string;
  image?: string;
  video?: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    description: "M4, M4 Pro, and M4 Max.\nReady for whatever's impossible.",
    video: "apple-remastered/images/large_kdwara",
  },
  {
    id: 2,
    description: "Longest battery life ever in a Mac.\nUp to 24 hours.",
    image: "apple-remastered/images/highlights_battery_bsnzeb",
  },
  {
    id: 3,
    description: "Liquid Retina XDR display.\nBright beyond belief.",
    image: "apple-remastered/images/highlights_display_hq0ufv",
    // image: "/placeholder.svg?height=600&width=1000",
  },
  {
    id: 4,
    description: "12MP Center Stage camera.\nKeeps you front and center.",
    video: "apple-remastered/images/highlights_12_video_x9zjb9",
    // image: "/images/highlights/highlights_12.jpg",
  },
  {
    id: 5,
    description: "Built for Apple Intelligence.\nPersonal, private, powerful.",
    image: "apple-remastered/images/highlights_built_wko4oj",
  },
];
