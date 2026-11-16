import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import data from "@/data/gallery.json"; // Adjust the path as necessary
import Link from 'next/link';
import css from '@/style/gallery-detail.module.css';
import home from '@/style/home.module.css';
import useScene, { reveal } from '@/components/home/useScene';
import AboutHeroSection from '@/components/updated-themes/heroSection/about-herosection';
import Loader from '@/components/Layout/Loader';
import Image from 'next/image';
import BottomSection from '@/components/updated-themes/layout/bottomSection';

const GallerySlug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [projectData, setProjectData] = useState(null);
  const root = useScene(({ gsap, root: el }) => reveal({ gsap, root: el }, '[data-r]'));

  useEffect(() => {
    const fetchProjectData = async () => {
      if (slug) {
        const formattedSlug = slug.toLowerCase().replace(/ /g, '-');
        const project = data.find((item) => item.slug === formattedSlug);
        if (project) {
          setProjectData(project);
        } else {
          // Handle case where slug does not match any project
          setProjectData(null);
        }
      }
    };

    fetchProjectData();
  }, [slug]);

  if (!projectData) {
    return (
    <Loader/>
    ); // Return loading indicator while data is being fetched
  }

  // the sample data still carries template placeholders (client "Envato Corps", New York, lorem text);
  // show the facts and overview only once a project has real ones
  const real = projectData.client && !/envato/i.test(projectData.client);
  const others = data.filter((d) => d.slug !== projectData.slug).slice(0, 3);

  return (
    <>
      <AboutHeroSection head_title={projectData.name} heading={projectData.status} />
      <div className={home.home}>
        <section ref={root} className={css.sec}>
          <div className={home.container}>
            <figure className={css.photo} data-r>
              <Image src={projectData.img} alt={projectData.name} fill priority sizes="(max-width: 1023px) 92vw, 1200px" />
            </figure>

            <div className={css.meta} data-r>
              <div>
                <span className={home.eyebrow}>{projectData.status}</span>
                <h2 className={css.title}>{projectData.name}</h2>
              </div>
              <div className={home.row}>
                <Link href="/contact-us" className={home.btn_dark}>Request a similar project</Link>
                <Link href="/gallery" className={home.btn_outline}>All projects</Link>
              </div>
            </div>

            {real && (
              <>
                <dl className={css.facts} data-r>
                  {[["Client", projectData.client], ["Type", projectData.Type], ["Location", projectData.Location], ["Year", projectData.Year]].map(([k, v]) => (
                    <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                </dl>
                <div className={css.overview} data-r>
                  <h3>Project overview</h3>
                  <p>{projectData.projectOverview}</p>
                </div>
              </>
            )}

            <div className={css.more}>
              <h3 data-r>More projects</h3>
              <div className={css.grid}>
                {others.map((o, i) => (
                  <Link key={o.slug + i} href={`/gallery/${o.slug}`} className={css.card} data-r>
                    <span className={css.thumb}>
                      <Image src={o.img} alt={o.name} fill sizes="(max-width: 767px) 92vw, 380px" />
                    </span>
                    <strong>{o.name}</strong>
                    <small>{o.status}</small>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <BottomSection footerheading={projectData.name} />
    </>
  );
};

export default GallerySlug;
