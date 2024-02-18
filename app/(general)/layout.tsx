import { Navbar } from "@/components";
import { Props } from "@/components/activelink/ActiveLink";

export default function generalLayout({
 children
}: {
 children: React.ReactNode;
}) {

  const Urls:Props[] = [
    {path: '/about' , text:'About'},
    {path: '/contact' , text:'Contact'},
    {path: '/pricing' , text:'Pricing'}
];

  return (
    <>
      <Navbar links={Urls}/>
      <main className="flex flex-col items-center p-24">
      { children }
    </main>
    </>
    
  );
}