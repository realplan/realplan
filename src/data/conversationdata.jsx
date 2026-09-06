import Frame_1 from "@/assets/Frame 2085665781.webp";
import arram from "@/assets/conversation/logo/arram.webp";
import kfc from "@/assets/conversation/logo/kfc.webp";
import ruci_paal from "@/assets/conversation/logo/ruci_paal.webp";
import tvs from "@/assets/conversation/logo/tvs.webp";
import emami from "@/assets/conversation/logo/emami.webp";
import rpc_logo from "@/assets/conversation/logo/rpc_logo.webp";
import iit_logo from "@/assets/conversation/logo/IITM.webp";

import emami_main from "@/assets/conversation/main/emami.webp";
import rusi_milk_main from "@/assets/conversation/main/rusi_milk.webp";
import school_main from "@/assets/conversation/main/school.webp";
import tvs_main from "@/assets/conversation/main/tvs.webp";
import kfc_main from "@/assets/conversation/main/kfc.webp";
import iit from "@/assets/conversation/main/iit.webp";


export const CONVERSATION_DATA = [
  {
    client: "KFC",
    messages: [
      {
        name: "KFC",
        date: "10 June 2025",
        message:
          "We need to conduct an expansive consumer research study at select outlets across the country. Do you provide these services?",
        avatar: kfc,
      },
      {
        name: "Real Plan Consulting",
        date: "10 June 2025",
        message:
          "Greetings to KFC! Yes, we are a Pan India firm so we have got you covered. One of our core strength is having a ready to deploy field force at every nook and corner of the country so that businesses needn’t look for multiple vendors. A Pan-India Brand like KFC will get a one stop partner with a Pan-India Service Provider like us. ",
        avatar: rpc_logo,
      },
    ],
    image: kfc_main,
  },
  {
    client: "QUEEN MIRA INTERNATIONAL SCHOOL",
    messages: [
      {
        name: "Queen Mira International School",
        date: "25 Feb 2023",
        message:
          "Queen Mira International School, Madurai wants to setup an International Residential School in Theni. We want a consulting partner who can assess the market feasibility for such a concept at Theni. The total cost of the project is expected to be around 150 crores.",
        avatar: arram,
      },
      {
        name: "Real Plan Consulting",
        date: "25 Feb 2023",
        message:
          "we appreciate your vision to start an International Residential School in Theni at global standards. We at Real Plan Consulting offer a full proof holistic market feasibility research package which will fit your research needs. We know your investment is huge and don’t worry we will deliver whats expected out of us. Be assured!",
        avatar: rpc_logo,
      },
    ],
    image: school_main,
  },
  {
    client: "IIT MADRAS",
    messages: [
      {
        name: "IIT Madras",
        date: "04 May 2022",
        message:
          "We want a trustable field agency to conduct a survey to test the concept of flood insurance and survey to know about waste accounting and recycling. We want these two projects to be carried out simultaneously. Will you be able to do it for us?",
        avatar: iit_logo,
      },
      {
        name: "Real Plan Consulting",
        date: "04 May 2022",
        message:
          "Thank you for contacting Real Plan Consulting. Yes we can handle simultaneous projects at once. Our socio-economic research team is highly experienced and efficient. We adhere to strict delivery timelines.",
        avatar: rpc_logo,
      },
    ],
    image: iit,
  },
  {
    client: "TVS EMERALD LIMITED",
    messages: [
      {
        name: "TVS Emerald Limited",
        date: "10 Jan 2025",
        message:
          "We are looking for a research agency who can conduct a NPS Benchmarking and CSAT Score Evaluation among our customers and people who have bought flats from our competitor brands.",
        avatar: tvs,
      },
      {
        name: "Real Plan Consulting",
        date: "10 Jan 2025",
        message:
          "You have reached out to the right firm for your brand perception assessment and competitor benchmarking study. Our experienced real estate advisors know the technicalities of NPS Benchmarking and CSAT Score Evaluation and will be able to do the needful for you.",
        avatar: rpc_logo,
      },
    ],
    image: tvs_main,
  },
  {
    client: "RUSI – BRAND OF WINNER DAIRY PVT LTD",
    messages: [
      {
        name: "Rusi – Brand of Winner Dairy Pvt Ltd",
        date: "18 July 2024",
        message:
          "We are evaluating a renewable energy entry and need feasibility backed by strong commercial analysis.",
        avatar: ruci_paal,
      },
      {
        name: "Real Plan Consulting",
        date: "18 July 2024",
        message:
          "Hi sir, one of our main USP is Location Feasibility Analysis. We are the only consulting firm in India who integrate GIS Techniques and Market Analysis to give accurate recommendations for all businesses which depend on the location for the business.",
        avatar: rpc_logo,
      },
    ],
    image: rusi_milk_main,
  },

];