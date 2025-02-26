export interface MenuItem {
  label: string;
  href: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface MenuData {
  label: string;
  href?: string;
  sections?: MenuSection[];
}

export const mainMenuItems: MenuData[] = [
  {
    label: "Mac",
    sections: [
      {
        title: "Explore Mac",
        items: [
          { label: "Explore All Mac", href: "#" },
          { label: "MacBook Air", href: "#" },
          { label: "MacBook Pro", href: "#" },
          { label: "iMac", href: "#" },
          { label: "Mac mini", href: "#" },
          { label: "Mac Studio", href: "#" },
          { label: "Mac Pro", href: "#" },
          { label: "Displays", href: "#" },
        ],
      },
      {
        title: "More from Mac",
        items: [{ label: "Mac Support", href: "#" }],
      },
    ],
  },
  {
    label: "iPad",
    sections: [
      {
        title: "Explore iPad",
        items: [
          { label: "Explore All iPad", href: "#" },
          { label: "iPad Pro", href: "#" },
          { label: "iPad Air", href: "#" },
          { label: "iPad", href: "#" },
          { label: "iPad mini", href: "#" },
        ],
      },
      {
        title: "More from iPad",
        items: [{ label: "iPad Support", href: "#" }],
      },
    ],
  },
  {
    label: "iPhone",
    href: "#",
  },
  {
    label: "Support",
    href: "#",
  },
  {
    label: "Where to Buy",
    href: "#",
  },
];
