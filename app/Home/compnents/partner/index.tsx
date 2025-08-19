import PartnerCard from "@/components/partner";
import img1 from "@assets/images/pover.avif";
import img2 from "@assets/images/deliver.avif";
import { StyledPartners } from "./Partner.styles";

const Partners = () => {
  return (
    <StyledPartners className="container">
      <div className="header">
        <h2>Team Up and Chances</h2>
      </div>

      <div className="cardsWrapper">
        <PartnerCard
          img={img1.src}
          badge="Earn more with lower fees"
          smallText="Signup as a business"
          title="Partner with us"
          buttonText="Get Started"
        />
        <PartnerCard
          img={img2.src}
          badge="Avail exclusive perks"
          smallText="Signup as a rider"
          title="Ride with us"
          buttonText="Apply Now"
        />
      </div>
    </StyledPartners>
  );
};

export default Partners;
