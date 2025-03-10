interface Slide {
  id: number;
  description: string;
  image: string;
}

export const slides: Slide[] = [
  {
    id: 0,
    description: "M4, M4 Pro, and M4 Max.\nReady for whatever's impossible.",
    image: "/images/highlights/highlights-mx_endframe.jpg",
  },
  {
    id: 1,
    description: "Longest battery life ever in a Mac.\nUp to 24 hours.",
    image: "/images/highlights/highlights_battery.jpg",
  },
  {
    id: 2,
    description: "Liquid Retina XDR display.\nBright beyond belief.",
    image: "/images/highlights/highlights_display.jpg",
    // image: "/placeholder.svg?height=600&width=1000",
  },
  {
    id: 3,
    description: "12MP Center Stage camera.\nKeeps you front and center.",
    image: "/images/highlights/highlights_camera.jpg",
  },
  {
    id: 4,
    description: "Built for Apple Intelligence.\nPersonal, private, powerful.",
    image: "/images/highlights/highlights_intelligence.jpg",
  },
];
