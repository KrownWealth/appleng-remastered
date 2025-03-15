import { ChevronLeft, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { footerSections, footnotes } from "@/assets/constants/footerData";



export default function Footer() {
  return (
    <footer className="w-full mx-auto bottom-0 bg-[#1d1d1f] px-8 lg:px-0">
      <div className="md:w-[692px] lg:w-[700px] mx-auto relative  flex flex-col items-center justify-center">


        <ol className="text-textGray px-0 py-4 footer-list list-decimal border-b border-b-textGray">
          {footnotes.map((footnote) => (
            <li key={footnote.id} id={footnote.id} dangerouslySetInnerHTML={{ __html: footnote.content || "" }} />
          ))}
        </ol>
        <div className="bg-[#1D1D1F] text-[#6E6E73] py-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm border-b border-b-textGray">
            <a href="/" className="text-[#f5f5f5] hover:underline">
              <span className="bg-[#f5f5f5] w-[14px] h-[18px] block relative z-20 footer-image-mask"></span>
            </a>
            <ChevronLeft className="h-3 w-3" />
            <a href="/mac" className="text-white hover:underline">
              Mac
            </a>
            <ChevronRight className="h-3 w-3" />
            <a href="/mac/macbook-pro" className="text-white hover:underline">
              MacBook Pro
            </a>
          </nav>

          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
              {footerSections.map((section) => (
                <AccordionItem key={section.id} value={section.id} className="border-[#424245]">
                  <AccordionTrigger className="text-white text-sm font-medium">{section.title}</AccordionTrigger>
                  <AccordionContent>
                    <LinkList links={section.links} className="space-y-4 py-2" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-8 mb-8">
            {footerSections.map((section) => (
              <div key={section.id}>
                <h3 className="text-white text-sm font-medium mb-4">{section.title}</h3>
                <LinkList links={section.links} />
              </div>
            ))}
          </div>

          {/* Find a retailer */}
          <div className="mb-8 border-b border-b-textGray">
            <a href="/retail" className="text-[#2997FF] text-sm hover:underline">
              Find a retailer
            </a>
            <span className="text-sm"> near you.</span>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs border-b border-b-textGray">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4 md:mb-0">
              <span>Copyright © 2025 Apple Inc. All rights reserved.</span>
              <div className="flex gap-4">
                <a href="/terms" className="hover:underline">
                  Terms of Use
                </a>
                <a href="/sitemap" className="hover:underline">
                  Site Map
                </a>
              </div>
            </div>
            <a href="/ng" className="hover:underline">
              Nigeria
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}


const LinkList = ({
  links,
  className = "",
}: {
  links: { href: string; label: string }[];
  className?: string;
}) => (
  <ul className={`space-y-2 ${className}`}>
    {links.map((link) => (
      <li key={link.href}>
        <a href={link.href} className="text-sm hover:underline">
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);




