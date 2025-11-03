import Hero from "@/components/Hero";
import ChaiMenu from "@/components/ChaiMenu";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ChaiMenu />
      <About />
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
