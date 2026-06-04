"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="circleGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "Reviews",
          id: "#reviews",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="The Modern Barber"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "rotated-rays-animated-grid",
      }}
      title="Premium Haarschnitte & Barbering für den modernen Mann"
      description="Erleben Sie meisterhaftes Handwerk, präzise Schnitte und eine entspannte Atmosphäre. Ihr Stil beginnt hier."
      buttons={[
        {
          text: "Jetzt anrufen",
          href: "tel:+4994146720624",
        },
        {
          text: "Termin buchen",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/young-man-barber-s-shop-getting-his-beard-trimmed_23-2149186494.jpg"
      imageAlt="Moderner Barbershop mit stilvoller Einrichtung"
    />
  </div>

  <div id="services" data-section="services">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "haircut",
          name: "Klassischer Haarschnitt",
          price: "35€",
          features: [
            "Professioneller Haarschnitt",
            "Haarwäsche & Styling",
            "Nackenrasur mit Rasiermesser",
          ],
          buttons: [
            {
              text: "Jetzt buchen",
              href: "#contact",
            },
          ],
        },
        {
          id: "beard",
          name: "Bartpflege & Kontur",
          price: "25€",
          features: [
            "Barttrimmen & Konturieren",
            "Heiße Kompresse",
            "Pflegeöl & Balm",
          ],
          badge: "Beliebt",
          badgeIcon: Sparkles,
          buttons: [
            {
              text: "Jetzt buchen",
              href: "#contact",
            },
          ],
        },
        {
          id: "shave",
          name: "Rasiermesser-Rasur",
          price: "30€",
          features: [
            "Traditionelle Nassrasur",
            "Heiße Handtücher",
            "Beruhigende Lotion",
          ],
          buttons: [
            {
              text: "Jetzt buchen",
              href: "#contact",
            },
          ],
        },
        {
          id: "combo",
          name: "Premium Komplet-Paket",
          price: "60€",
          features: [
            "Klassischer Haarschnitt",
            "Bartpflege & Kontur",
            "Gesichtsmassage",
          ],
          buttons: [
            {
              text: "Jetzt buchen",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Unsere Dienstleistungen & Preise"
      description="Entdecken Sie unsere Premium-Services, die speziell auf den modernen Mann zugeschnitten sind. Qualität, die Sie sehen und fühlen können."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardThree
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Klassischer Fade",
          price: "35€",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-maledressed-suit-grey-background_613910-1592.jpg",
          imageAlt: "Klassischer Fade Haarschnitt",
        },
        {
          id: "p2",
          name: "Texturierter Schnitt",
          price: "35€",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-man-getting-haircut_23-2148506228.jpg",
          imageAlt: "Texturierter Haarschnitt",
        },
        {
          id: "p3",
          name: "Locken-Styling",
          price: "35€",
          imageSrc: "http://img.b2bpic.net/free-photo/negative-human-facial-expressions-feelings-reaction-emotions-headshot-gloomy-handsome-young-european-male-with-fuzzy-thick-beard-with-displeased-scrutinizing-look_343059-1819.jpg",
          imageAlt: "Styling für lockiges Haar",
        },
        {
          id: "p4",
          name: "Innenansicht Salon",
          price: "—",
          imageSrc: "http://img.b2bpic.net/free-photo/barber-equipment-working-surface-by-mirror-barbershop_627829-8282.jpg",
          imageAlt: "Elegantes Salon-Interieur",
        },
        {
          id: "p5",
          name: "Barber-Station",
          price: "—",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-male-beauty-products-with-display_23-2150435206.jpg",
          imageAlt: "Saubere Barber-Station",
        },
        {
          id: "p6",
          name: "Werkzeuge des Handwerks",
          price: "—",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-selfcare-products_23-2149313026.jpg",
          imageAlt: "Professionelle Friseurwerkzeuge",
        },
      ]}
      title="Unsere Arbeit: Stil & Handwerk"
      description="Ein Blick auf unsere neuesten Kreationen und das Ambiente, das uns auszeichnet. Lassen Sie sich inspirieren."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Max Schmidt",
          role: "Softwareentwickler",
          company: "Tech Innovations",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businessman-smiling-speaking-phone-black-background_176420-55697.jpg",
        },
        {
          id: "t2",
          name: "Lukas Müller",
          role: "Marketing Manager",
          company: "Digital Growth",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-blond-bearded-male-dressed-black-leather-jacket_613910-11915.jpg",
        },
        {
          id: "t3",
          name: "Thomas Wagner",
          role: "Unternehmer",
          company: "Stadtbäckerei",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-bearded-male-grey-vignette-background_613910-7140.jpg",
        },
        {
          id: "t4",
          name: "Julian Becker",
          role: "Student",
          company: "Universität München",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-combing-beard_23-2149137904.jpg",
        },
        {
          id: "t5",
          name: "Paul Fischer",
          role: "Architekt",
          company: "Design & Bau",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-near-mirror-scrutinizing-himself_259150-57863.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "5.0",
          label: "Sternebewertung",
        },
        {
          value: "100+",
          label: "Zufriedene Kunden",
        },
        {
          value: "10+",
          label: "Jahre Erfahrung",
        },
      ]}
      title="Was unsere Kunden sagen"
      description="Ihre Zufriedenheit ist unser größter Erfolg. Lesen Sie, warum Männer uns vertrauen."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Groomed Gent",
        "Hair & Hues",
        "Manly Mane",
        "Sharp Edges",
        "The Beard Club",
        "Urban Cuts",
        "Vintage Style",
      ]}
      title="Marken, die uns vertrauen"
      description="Wir sind stolz darauf, mit führenden Marken und Unternehmen zusammenzuarbeiten, um unseren Kunden das Beste zu bieten."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-static",
      }}
      tag="Kontaktieren Sie uns"
      title="Besuchen Sie uns oder vereinbaren Sie einen Termin"
      description="Wir freuen uns darauf, Sie in unserem Barbershop begrüßen zu dürfen. Finden Sie uns auf der Karte, rufen Sie uns an oder nutzen Sie unser Online-Formular für Ihre Anfrage."
      inputPlaceholder="Ihr Name, Telefonnummer, Wunschtermin"
      buttonText="Termin anfragen"
      termsText="Durch das Absenden bestätigen Sie, dass Sie unsere Datenschutzbestimmungen gelesen und akzeptiert haben."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="The Modern Barber"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Haarschnitte",
              href: "#services",
            },
            {
              label: "Bartpflege",
              href: "#services",
            },
            {
              label: "Rasiermesser-Rasur",
              href: "#services",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Galerie",
              href: "#gallery",
            },
            {
              label: "Bewertungen",
              href: "#reviews",
            },
            {
              label: "Kontakt",
              href: "#contact",
            },
          ],
        },
        {
          title: "Rechtliches",
          items: [
            {
              label: "Impressum",
              href: "#",
            },
            {
              label: "Datenschutz",
              href: "#",
            },
            {
              label: "AGB",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 The Modern Barber. Alle Rechte vorbehalten."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
