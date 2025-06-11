import Aboutbox from "@/components/about/Aboutbox";
import Companysbox from "@/components/company/Companysbox";
import Faqsection from "@/components/faq/Faqsection";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Nav from "@/components/nav/Nav";
import Service from "@/components/servicepages/Service";
import Testimonial from "@/components/testimonial/Testimonial";

export default function Home() {
  return (
    <main className="--font-sans">
      <Nav />
      <Header />
      <Companysbox />
      <Service />
      <Aboutbox />
      <Testimonial />
      <Faqsection />
      <Footer />
    </main>
  );
}
