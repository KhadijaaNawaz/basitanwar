/* eslint-disable @next/next/no-img-element */
// export default index
import React, { useEffect, useState } from "react";
import Link from "next/link";

import home from "@/style/home.module.css";
import css from "@/style/blogs-page.module.css";
import BlogsCard from '@/components/blogcard/BlogsCard'
import axios from "axios";
import Loader from "@/components/Layout/Loader";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";
import BottomSection from "@/components/updated-themes/layout/bottomSection";
import { buildUrl } from "@/config/api.config";

 
const Index = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const Blogs = async () => {
    setLoading(true)
    try {
      const apiUrl = buildUrl('posts/');
      const response = await axios.get(apiUrl);
      setBlogs(Array.isArray(response.data) ? response.data : []);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setFailed(true)
      setLoading(false)
    } 
  };


  useEffect(() => {
    Blogs();
  }, []);

  return (
    <>
      <AboutHeroSection head_title={"Blogs"} heading={"Stay Upto Date"} imageurl={"/updated-images/blogging.png"}/>

      <section className={css.sec}>
        <div className={home.container}>
          <div className={css.head}>
            <span className={home.eyebrow}>Latest Blogs</span>
            <h2 className={css.title}>What You Will Get From Us Check Here</h2>
          </div>

          {loading ? (
            <Loader />
          ) : blogs.length === 0 ? (
            <div className={css.empty}>
              <h3>{failed ? "Our blog is being updated" : "No posts yet"}</h3>
              <p>
                {failed
                  ? "We could not load the latest posts just now. Please check back soon, or take a look at what we do."
                  : "New articles are on the way. In the meantime, take a look at what we do."}
              </p>
              <div className={home.row}>
                <Link href="/services" className={home.btn_dark}>Our services</Link>
                <Link href="/faqs" className={home.btn_outline}>FAQs</Link>
              </div>
            </div>
          ) : (
            <div className={css.grid}>
              {[...blogs]
                .sort((a, b) => {
                  const dateA = a.published_at ? new Date(a.published_at) : new Date(0);
                  const dateB = b.published_at ? new Date(b.published_at) : new Date(0);
                  return dateB - dateA;
                })
                .map((post) => (
                  <BlogsCard key={post.id} post={post} />
                ))}
            </div>
          )}
        </div>
      </section>
      <BottomSection footerheading={'Stay upto date with Us'}/>
    </>
  );
}

export default Index;