import React from "react";
import styles from "./services-offering.module.css";
import theme from "@/app/theme";
import DropdownFaq from "@/components/dropdown-faq/DropdownFaq";

const faqs = [
  {
    question: "Brand development",
    answer:
      "Our brand development process is grounded in meticulous research and creative execution, aimed at crafting a unique logo that truly represents the essence of your business, team, or personal brand. We don't just design logos; we create the cornerstones of visual identities. A professionally designed logo by Premier Ikon is more than an image – it’s a memorable emblem that captures the attention of fans and sponsors, leaving a lasting impression. Embrace the power of distinctive branding with Premier Ikon, where every design is a step towards extraordinary brand recognition.",
  },
  {
    question: "Product Design",
    answer:
      "Our product design service at Premier Ikon is rooted in strategic innovation and meticulous craftsmanship, dedicated to transforming your ideas into market-defining products. We do more than shape items; we craft the symbols of your brand's future. Each design embodies your vision, ensuring every product stands out to captivate customers and elevate your market presence. With Premier Ikon, experience the essence of functional artistry, where each creation is not just seen but remembered. Engage with us for product design that sets you apart and propels your brand to new heights.",
  },
  {
    question: "Production",
    answer:
      "Our production process is where your vision materializes into reality. We excel in the art of bringing products to life, employing state-of-the-art manufacturing techniques that ensure precision, quality, and scalability. Our commitment to excellence in production is unwavering, from meticulous material selection to the final touches that define a finished product's look and feel. We don't just manufacture items; we engineer success and durability into every piece, guaranteeing that your product not only meets but surpasses the expectations of your audience. Partner with Premier Ikon for production services that embody the pinnacle of quality and innovation, where every product is a testament to superior craftsmanship and market readiness.",
  },
  {
    question: "Shipping & Fulfillment",
    answer:
      "Our shipping and fulfillment service is the final, crucial step in delivering your vision directly into the hands of your customers. We pride ourselves on a seamless, efficient logistics operation that ensures every product reaches its destination on time and in pristine condition. Our expert team manages every aspect of the fulfillment process, from inventory management to the careful packing of orders, leveraging advanced systems to optimize shipping routes and costs. We don't just send packages; we deliver experiences, making sure that each item arrives with the promise of satisfaction and excitement. Choose Premier Ikon for shipping and fulfillment solutions where precision, care, and speed turn logistical challenges into your competitive advantage.",
  },
  {
    question: "Customer Service",
    answer:
      "Our dedication to exceptional customer service forms the cornerstone of our ethos. We understand that the foundation of a memorable brand experience lies not just in the quality of products but in the support and care provided to every customer. Our team is committed to excellence, offering personalized assistance that ensures satisfaction at every touchpoint. We don't just solve queries; we build relationships, treating every interaction as an opportunity to reinforce trust and loyalty. With Premier Ikon, you'll discover a partner dedicated to your success, where outstanding customer service transforms first-time buyers into lifelong advocates.",
  },
  {
    question: "Logo Design",
    answer:
      "Logo design is an art form that captures the essence of your brand in a single glance. Our approach combines creative insight with strategic thinking to develop logos that are not only visually compelling but also deeply meaningful. We believe that a great logo is more than just a pretty face; it's a powerful emblem of your brand's identity, values, and future aspirations. Our design team works closely with you to create a logo that stands out, tells your story, and resonates with your target audience. With Premier Ikon, embark on a journey to craft a logo that is not just seen but remembered and revered, setting the foundation for your brand's visual identity and distinguishing you in the marketplace.",
  },
  // Add more FAQs as needed
];

function ServicesOffering() {
  return (
    <div className={styles.container}>
      <h3
        className={styles.header}
        style={{ color: theme.black, fontSize: theme.fontSizeL }}
      >
        How we can help you grow
      </h3>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <DropdownFaq
            key={index}
            faqQuestion={faq.question}
            faqAnswer={faq.answer}
          />
        ))}
      </div>
      <div
        className={styles.lowerLine}
        style={{ borderColor: theme.primaryColor }}
      />
    </div>
  );
}

export default ServicesOffering;
