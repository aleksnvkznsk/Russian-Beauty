import Doctors from "@/components/doctors/doctors";
import FAQ from "@/components/faq/faq";
import ImageSliderClient from "@/components/imageslider/imageslider-client";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <Doctors />
      <ImageSliderClient/>
      <FAQ />
      <Testimonials />
    </>
  );
}