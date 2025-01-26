import ContactForm from "@/components/contactform/contactform";
import Doctors from "@/components/doctors/doctors";
import FAQ from "@/components/faq/faq";
import ImageSliderClient from "@/components/imageslider/imageslider-client";
import IntroClient from "@/components/fullscreenslider/fullscreensliderclient";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <IntroClient />
      <Doctors />
      <ImageSliderClient />
      <FAQ />
      <Testimonials />
      <ContactForm />
    </>
  );
}