import React from "react";
import ServicesHeader from "@/sections/services-header/ServicesHeader";
import ServicesOffering from "@/sections/services-offering/ServicesOffering";
import ServicesProcess from "@/sections/services-process/ServicesProcess";
import ServicesCallToAction from "@/sections/services-call-to-action/ServicesCallToAction";

function Services() {
  return (
    <div>
      <ServicesHeader />
      <ServicesOffering />
      <ServicesProcess />
      <ServicesCallToAction />
    </div>
  );
}

export default Services;
