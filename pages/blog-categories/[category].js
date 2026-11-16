/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import styles from "@/styles/components.module.css";
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import Loader from '@/components/Layout/Loader';
import AboutHeroSection from '@/components/updated-themes/heroSection/about-herosection';
import BottomSection from '@/components/updated-themes/layout/bottomSection';
import { buildUrl } from '@/config/api.config';

const BlogCategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const categoryName = category ? category.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';
  const [blogs, setBlogs] = useState([]);
  const [showSubitems, setShowSubitems] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleHover = () => {
    setShowSubitems(true);
  };

  const handleClick = (slug) => {
    const url = `/blogs/${slug}`;
    router.push(url); // Or use router.replace(url);
  };

  const blogsCategory = useCallback(async () => {
    setLoading(true);
    try {
      const apiUrl = buildUrl(`posts?category_name=${categoryName}`);
      const response = await axios.get(apiUrl);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  }, [categoryName]);

  useEffect(() => {
    if (categoryName) {
      blogsCategory();
    }
  }, [categoryName, blogsCategory]);

  return (
    <div>
      <AboutHeroSection head_title={categoryName} heading={'Our services'} imageurl={"/updated-images/blogging.png"} />

      <section className={styles.sec1}>
        <div className={styles.headsec}>
          <div className={styles.div4}>
            <h2 className={styles.heading2}>What makes us dependable</h2>
            <p className="text-center grayClr">
              Basat Anwer Technical Services spares no expense in ensuring that their technicians are equipped with state-of-the-art tools that enable them
            </p>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className={styles.div5}>
              {blogs.map((blog) => (
                <div key={blog.id} className={styles.blog_containerr}>
                  <div className={styles.div_recent} onClick={() => handleClick(blog.slug)}>
                    <img src={`${blog.image}`} className={styles.blog_img} alt="Louvre" />
                    <span className={styles.blog_category}>
                      <p>{blog.category_name}</p>
                    </span>
                    <div className={styles.div8}>
                      <div className="relative">
                        <h4 className={styles.heading4}>
                          <div>{blog.title}</div>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <BottomSection footerheading={categoryName}/>
    </div>
  );
};

export default BlogCategoryPage;
