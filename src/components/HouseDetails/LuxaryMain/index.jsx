import React from "react";
import Features from "./Features";
import HouseOwner from "./HouseOwner";
import Reviews from "./Reviews";
import WriteAReview from "./WriteAReview";
import Location from "./Location";
import PropertyDetails from "./PropertyDetails";
import { Container, LuxLeft, LuxRight, Wrapper } from "./style";
import ScheduleATour from "./ScheduleATour";

export const Luxary = ({ house }) => {
  console.log(house);
  return (
    <Container>
      <Wrapper>
        <LuxLeft>
          <LuxLeft.Wrapper>
            <LuxLeft.Title>
              Luxury Family Loft by {house?.address || "Victoria Park"}
            </LuxLeft.Title>
            <LuxLeft.Wrapper>
              <LuxLeft.Icons>
                <LuxLeft.Icon>
                  <LuxLeft.Share />
                </LuxLeft.Icon>
                <LuxLeft.Text>Share</LuxLeft.Text>
              </LuxLeft.Icons>

              <LuxLeft.Icons>
                <LuxLeft.Icon>
                  <LuxLeft.Heart />
                </LuxLeft.Icon>
                <LuxLeft.Text>Save</LuxLeft.Text>
              </LuxLeft.Icons>
            </LuxLeft.Wrapper>
          </LuxLeft.Wrapper>

          <LuxLeft.Wrapper>
            <LuxLeft.Description>{house?.description}</LuxLeft.Description>
            <LuxLeft.Wrapper>
              <LuxLeft.SubDescription>$2,800/mo</LuxLeft.SubDescription>
              <LuxLeft.Title>$7,500/mo</LuxLeft.Title>
            </LuxLeft.Wrapper>
          </LuxLeft.Wrapper>

          <LuxLeft.Wrapper mt={25}>
            <LuxLeft.Wrapper>
              {[
                {
                  noMl: true,
                  icon: <LuxLeft.Bed />,
                  text: <>{house?.houseDetails?.bads || 0} Beds</>,
                },
                {
                  icon: <LuxLeft.Bath />,
                  text: <>{house?.houseDetails?.bath || 0} Baths</>,
                },
                {
                  icon: <LuxLeft.Garage />,
                  text: <>{house?.houseDetails?.garage || 0} Garages</>,
                },
              ].map((item, i) => {
                return (
                  <LuxLeft.Icons key={i}>
                    <LuxLeft.Icon noMl={item.noMl}>{item.icon}</LuxLeft.Icon>
                    <LuxLeft.Text>{item.text}</LuxLeft.Text>
                  </LuxLeft.Icons>
                );
              })}

              <LuxLeft.Icons>
                <LuxLeft.Icon>
                  <LuxLeft.Ruler />
                </LuxLeft.Icon>
                <LuxLeft.Text>4 Ruler</LuxLeft.Text>
              </LuxLeft.Icons>

              <LuxLeft.Icons>
                <LuxLeft.Icon>
                  <LuxLeft.Calendar />
                </LuxLeft.Icon>
                <LuxLeft.Text>4 Calendars</LuxLeft.Text>
              </LuxLeft.Icons>
            </LuxLeft.Wrapper>

            <LuxLeft.Text>Est. Mortgage</LuxLeft.Text>
          </LuxLeft.Wrapper>
          {/*++++++ Description +++++++ */}
          <LuxLeft.Subtitle>Description</LuxLeft.Subtitle>
          <LuxLeft.Description>
            {house?.description ||
              `Occupying over 8,000 square feet, perched over 1,100 feet in the air
            with breathtaking panoramic 360-degree views of all of New York City
            and the surrounding tri-state area, The 82nd Floor at 432 Park
            Avenue has been completely reimagined by one of the most
            sought-after design houses in London and represents an utterly
            unique opportunity to own a grobally significant property
            
            `}
          </LuxLeft.Description>
          <LuxLeft.ShowMore>Show More</LuxLeft.ShowMore>
          {/* Documents */}
          <LuxLeft.Subtitle>Documents</LuxLeft.Subtitle>
          <LuxLeft.Wrapper mt={15} mb={50}>
            <LuxLeft.Wrapper>
              <LuxLeft.DownloadIcon />
              <LuxLeft.DownloadText>test_property.pdf</LuxLeft.DownloadText>
              <LuxLeft.Download>Download</LuxLeft.Download>
            </LuxLeft.Wrapper>
            <LuxLeft.Wrapper>
              <LuxLeft.DownloadIcon />
              <LuxLeft.DownloadText>test_property.pdf</LuxLeft.DownloadText>
              <LuxLeft.Download>Download</LuxLeft.Download>
            </LuxLeft.Wrapper>
            <LuxLeft.Wrapper>
              <LuxLeft.DownloadIcon />
              <LuxLeft.DownloadText>test_property.pdf</LuxLeft.DownloadText>
              <LuxLeft.Download>Download</LuxLeft.Download>
            </LuxLeft.Wrapper>
          </LuxLeft.Wrapper>
          <LuxLeft.Line />

          {/* ===== Map ===== */}
          <Location house={house} />
          <LuxLeft.Line />
          {/* ===== PropertyDetails ===== */}
          <PropertyDetails house={house} />
          <LuxLeft.Line />
          {/* ===== Features ===== */}
          <Features />
          <LuxLeft.Line />
          {/* ===== ScheduleATour ===== */}
          <ScheduleATour />
          <LuxLeft.Line />
          {/* Reviews */}
          <Reviews />
          <LuxLeft.Line />
          {/* WriteAReviews */}
          <WriteAReview />
         
        </LuxLeft>
        <LuxRight>
          <HouseOwner />
        </LuxRight>
      </Wrapper>
    </Container>
  );
};

export default Luxary;
