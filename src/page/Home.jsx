
import HeroSection from "../components/HeroSection"
import ContactSection from "../components/ContactSection"
import MapSection from "../components/MapSection"
import AboutSection from '../components/About'
import WhyChooseUs from "../components/WhyChoose"
import ServiceSection from "../components/ServiceSection"
import TestimonialsSection from "../components/Testimonial"

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <WhyChooseUs />
            <ServiceSection />
            <TestimonialsSection />
            <ContactSection />
            <MapSection />
        </div>
    )
}

export default Home
