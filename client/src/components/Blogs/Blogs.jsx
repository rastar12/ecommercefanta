import React from "react";
import Blog1 from "../../assets/Blogs/1.jpg";
import Blog2 from "../../assets/Blogs/2.jpg";
import Blog3 from "../../assets/Blogs/3.jpg";
import Blog4 from "../../assets/Blogs/4.jpg";
import { UpdateFollower } from "react-mouse-follower";

const BlogsData = [
  {
    id: 1,
    title: "Title: The Refreshing World of Fanta: A Flavor for Everyone",
    desc: "Dive into the vibrant universe of Fanta! Discover the history behind this iconic soft drink, explore its diverse flavors, and learn how it has become a favorite for generations. From fun recipes to creative ways to enjoy Fanta, this blog is a must-read for any fan of fruity refreshment!",
    link: "#",
    img: Blog1,
  },
  {
    id: 2,
    title: "The Classic That Unites Us All",
    desc: "Explore the timeless appeal of Coca-Cola! This blog delves into the brand’s rich history, its impact on culture, and the secret recipe that has captivated taste buds worldwide. Join us as we celebrate the moments that make Coca-Cola a staple at every gathering and discover fun serving ideas!",
    link: "#",
    img: Blog2,
  },
  {
    id: 3,
    title: " The Guilt-Free Indulgence",
    desc: "Learn why Coca-Cola Zero Sugar is the go-to choice for those seeking the classic taste without the calories.",
    link: "#",
    img: Blog3,
  },
  {
    id: 4,
    title: "The Perfect Matches for Your Meals",
    desc: "levate your dining experience with the perfect soda pairings! This blog offers insightful suggestions on how to pair Fanta, Coca-Cola, and Coca-Cola Zero Sugar with various dishes",
    link: "#",
    img: Blog4,
  },
];
const Blogs = () => {
  return (
    <section className="bg-gray-50">
      <div className="container py-14">
        <h1 className="text-3xl font-bold text-center pb-8">Blogs</h1>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BlogsData.map((item) => (
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "black",
                zIndex: 999,
                followSpeed: 1.5,
                text: "read",
                textFontSize: "3px",
                scale: 5,
              }}
            >
              <div
                key={item.id}
                className="flex flex-col items-center justify-center gap-6 p-2 md:p-5
               max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300"
              >
                <img src={item.img} alt="" />
                <div className="space-y-2">
                  <h1 className="text-xl font-bold line-clamp-2">
                    {item.title}
                  </h1>
                  <p className="line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
