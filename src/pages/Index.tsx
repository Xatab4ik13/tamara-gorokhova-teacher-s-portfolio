import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import CreativitySection from "@/components/CreativitySection";
import PhilosophySection from "@/components/PhilosophySection";
import GallerySection from "@/components/GallerySection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <AchievementsSection />
        <CreativitySection />
        <PhilosophySection />
        <GallerySection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
