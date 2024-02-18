import { Navbar } from "@/components";
import { Props } from "@/components/activelink/ActiveLink";

export default function pricingLayout({
 children
}: {
 children: React.ReactNode;
}) {

    const menuItems:Props[] = [
        {
            text: 'About',
            path: '/pricing/about'
        },
        {
            text: 'Contact',
            path: '/pricing/contact'
        },
        {
            text: 'Pricing',
            path: '/pricing/pricing'
        },
    ];


  return (
    <>
        <Navbar links={menuItems}/>
        {children}
    </>
  );
}