import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useCallback } from "react";
import md from "markdown-it";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import Slider from "react-slick";

import BlogsCard from "@/components/blogcard/BlogsCard";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";
import Loader from "@/components/Layout/Loader";

import styles from "@/styles/components.module.css";
import BottomSection from "@/components/updated-themes/layout/bottomSection";
import { buildUrl } from "@/config/api.config";

export default function Blog() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [isRelatedLoading, setIsRelatedLoading] = useState(true);
  const [isRecentLoading, setIsRecentLoading] = useState(true);
  const router = useRouter();
  const { slug } = router.query;

  const blogsCategory = useCallback(async () => {
    try {
      const apiUrl = buildUrl(`posts/${slug}/`);
      const response = await axios.get(apiUrl);
      setBlog(response.data);

      // Fetch related blogs based on tags
      setIsRelatedLoading(true);
      const relatedApiUrl = buildUrl(`posts/?tags=${encodeURIComponent(
        response.data.tags
      )}`);
      const relatedResponse = await axios.get(relatedApiUrl);
      setRelatedBlogs(relatedResponse.data);
      setIsRelatedLoading(false);

      // Fetch all posts to determine recent posts
      setIsRecentLoading(true);
      const allPostsApiUrl = buildUrl('posts/');
      const allPostsResponse = await axios.get(allPostsApiUrl);
      const recentPostsData = allPostsResponse.data
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
      setRecentPosts(recentPostsData);
      setIsRecentLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setIsRelatedLoading(false);
      setIsRecentLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    if (slug) {
      blogsCategory();
    }
  }, [slug, blogsCategory]);

  if (!blog) {
    return <Loader />;
  }

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1224,
        settings: { slidesToShow: 5, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1124,
        settings: { slidesToShow: 4, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 890,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 690,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
    ],
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <AboutHeroSection
        head_title={blog.meta_title}
        heading={blog.category_name}
        imageurl={"/updated-images/blogging.png"}
      />

      <div className={`${styles.blog_post} w-100`}>
        <div className={styles.blog_post_wrapper}>
          <div className={styles.phone_screen}>
           {/* eslint-disable-next-line @next/next/no-img-element  */}
            <img
              src={`${blog.image}`}
              onClick={() => router.replace(`/blogs/${slug}`)}
              className="mx-auto"
              alt="social_Image"
            />
            <div className={styles.recent_posts_container}>
              <h2>Recent Posts</h2>

              {isRecentLoading ? (
                <Loader />
              ) : (
                <div className={styles.recent_posts}>
                  {recentPosts.map((post,index) => (
                    <Link key={index} href={`/blogs/${post.slug}`}>
                      <div className={styles.recent_post}>
                        <div className={styles.img_recent}>
                        { /* eslint-disable-next-line @next/next/no-img-element */ }
                          <img
                            src={post.image}
                            alt={post.title}
                            className={styles.recent_post_image}
                          />
                        </div>
                        <div className={styles.detail_recent}>
                          <h3>{post.title}</h3>
                          <p>{formatDate(post.published_at)}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={`${styles.prose} mx-auto`}>
            <h1 className={styles.blog_title}>{blog.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: md().render(String(blog.content)),
              }}
            ></div>
          </div>
        </div>

        <div className={styles.related_blogs_container}>
          <h2>Related Blogs</h2>
          {isRelatedLoading ? (
            <Loader />
          ) : (
            <Slider {...settings} className={styles.SliderCont}>
              {relatedBlogs.map((post, index) => (
                <div key={index} className={styles.related_blogs}>
                  <BlogsCard post={post} />
                 </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
      <BottomSection footerheading={blog.meta_title}/>
    </>
  );
}
