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
    // image: "/images/highlights/highlights-mx_endframe.jpg",
    video:
      "https://res.cloudinary.com/dtainagml/video/upload/v1742051184/apple-remastered/images/large_kdwara.mp4",
  },
  {
    id: 2,
    description: "Longest battery life ever in a Mac.\nUp to 24 hours.",
    image:
      "https://res.cloudinary.com/dtainagml/image/upload/v1742051178/apple-remastered/images/highlights_battery_bsnzeb.jpg",
  },
  {
    id: 3,
    description: "Liquid Retina XDR display.\nBright beyond belief.",
    image: "/images/highlights/highlights_display.jpg",
    // image: "/placeholder.svg?height=600&width=1000",
  },
  {
    id: 4,
    description: "12MP Center Stage camera.\nKeeps you front and center.",
    video:
      "https://res.cloudinary.com/dtainagml/video/upload/v1742051178/apple-remastered/images/highlights_12_video_x9zjb9.mp4",
    // image: "/images/highlights/highlights_12.jpg",
  },
  {
    id: 5,
    description: "Built for Apple Intelligence.\nPersonal, private, powerful.",
    image:
      "https://res.cloudinary.com/dtainagml/image/upload/v1742051177/apple-remastered/images/highlights_built_wko4oj.jpg",
  },
];
