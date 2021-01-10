import React from "react";
import "./ReviewSection.css";
import {
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { faDivide } from "@fortawesome/free-solid-svg-icons";
import userImg1 from "../../assets/pictures/profile_picture_1.jpg";
import userImg2 from "../../assets/pictures/profile_picture_2.jpg";
import userImg3 from "../../assets/pictures/profile_picture_3.jpg";
import userImg4 from "../../assets/pictures/profile_picture_4.jpeg";
import Card from "./Card";
import "pure-react-carousel/dist/react-carousel.es.css";

const ReviewSection = () => {
  return (
    <div className="reviewSection">
      <h2 className="reviewSection__title">What others are saying about us</h2>
      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={205}
        totalSlides={4}
        visibleSlides={2}
        dragEnabled={false}
        className="reviewSection__provider"
      >
        <Slider>
          <Slide className="carousel__inner-slide" index={0}>
            <Card
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="Eva Mendes"
              userImg={userImg1}
            />
          </Slide>
          <Slide className="carousel__inner-slide" index={1}>
            <Card
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="Mark Maddison"
              userImg={userImg2}
            />
          </Slide>
          <Slide className="carousel__inner-slide" index={2}>
            <Card
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="Victor Hu"
              userImg={userImg3}
            />
          </Slide>
          <Slide className="carousel__inner-slide" index={3}>
            <Card
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="Edward Benn"
              userImg={userImg4}
            />
          </Slide>
        </Slider>
        <div className="reviewSection__buttonDiv">
          <ButtonBack className="reviewSection__button" />
          <ButtonNext className="reviewSection__button" />
        </div>
        {/* <DotGroup className="dot" /> */}
      </CarouselProvider>
    </div>
  );
};

export default ReviewSection;
