import { clientReviewsData } from "@/constants";
import Wrapper from "@/global/wrapper";
import { ReviewCard } from "./ui/card";
import Heading from "./ui/heading";
const Review = () => {
  return (
    <Wrapper className={"mt-5 p-5"}>
      <Heading label={"Client Review's"} 
     
      />
      <div className=" m-2 p-6  grid grid-cols-1 lg:grid-cols-3   w-full     flex-wrap max-lg:p-0 max-lg:m-0 ">
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
    </Wrapper>
  );
};

export default Review;
