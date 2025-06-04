import Aboutbox from "@/components/about/Aboutbox";
import Companysbox from "@/components/company/Companysbox";
import Faqsection from "@/components/faq/Faqsection";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Service from "@/components/servicepages/Service";

export default function Home() {
  return (
    <main className="--font-sans">
      <Header />
      <Companysbox />
      <Service />
      <Aboutbox />
      <Faqsection />
      <Footer />
    </main>
  );
}
