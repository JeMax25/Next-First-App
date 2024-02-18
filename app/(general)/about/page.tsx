import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: 'About Page',
};

export default function about() {
  return (
    <span className="text-4xl">About</span>
  )
}
