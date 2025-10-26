import { clientReviewsData } from "@/constants";
import { HeroAnimation } from "@/global/Animation";
import Wrapper from "@/global/wrapper";
import { ReviewCard } from "./ui/card";
import Heading from "./ui/heading";
const Review = () => {
  return (
    <Wrapper className={" p-5"}>
      <HeroAnimation>
        <Heading label={"Client Review's"} />
        <div
          className=" m-2  grid grid-cols-1 lg:grid-cols-3   w-full     flex-wrap max-lg:p-0 max-lg:m-0 "
          id="reviews"
        >
          {clientReviewsData.map((item, index) => {
            return (
              <ReviewCard
                key={index}
                name={item.name}
                handle={item.twitterHandle}
                review={item.review}
                Avatar={item.imageUrl}
              />
            );
          })}
        </div>
      </HeroAnimation>
    </Wrapper>
  );
};

export default Review;
