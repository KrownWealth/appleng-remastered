export interface MenuItem {
  label: string
  href: string
}

export interface MenuSection {
  title: string
  items: MenuItem[]
}

export interface MenuData {
  label: string
  href?: string
  sections?: MenuSection[]
}
