import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../../style/header.module.css";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "./modal";
import { buildUrl } from "@/config/api.config";

// pages whose first screen is light, so the white-on-transparent header would vanish
const LIGHT_TOP = ["/services", "/thank-you", "/404"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blogCategories, setBlogCategories] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showBlogs, setShowBlogs] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // set when a link is clicked: keeps the hover dropdown shut until the pointer leaves the item
  const [shut, setShut] = useState(false);
  const router = useRouter();

  const toggleModal = () => setShowModal(!showModal);
  const toggleMenu = () => setIsMenuOpen((open) => !open);
  // closes the mobile menu and any open sub-menu (links used to *toggle*, which opened it on desktop)
  const Closetoggle = () => {
    setIsMenuOpen(false);
    setShowServices(false);
    setShowBlogs(false);
    setShut(true);
    // the clicked link keeps focus after navigation; drop it so a hover/focus dropdown closes
    if (typeof document !== "undefined" && document.activeElement && document.activeElement !== document.body) {
      document.activeElement.blur();
    }
  };

  // current section, for the active-link marker
  const here = router.asPath.split(/[?#]/)[0];
  // pages that open on a light background: the bar is white from the start instead of transparent
  const solid = LIGHT_TOP.includes(router.pathname);
  const on = (href) => (href === "/" ? here === "/" : here === href || here.startsWith(href + "/"));
  const cls = (href, base) => `${base} ${on(href) ? styles.active : ""}`;

  const services = [
    {id:1, href: "/services/ac-services", label: "Air Conditioner Service" },
    {id:2, href: "/services/painting-services", label: "Painting Service" },
    {id:3,href: "/services/carpentry-services", label: "Carpentry Service" },
    {id:4, href: "/services/electrician-services", label: "Electrician Service" },
    {id:5, href: "/services/plumbing-services", label: "Plumbing Service" },
    {id:6,href: "/services/home-appliance-services",label: "Home Appliance Service"},
    {id:7,href: "/services/false-ceiling-services",label: "False Ceiling Service"},
    {id:8, href: "/services/building-cleaning-services",label: "Building Cleaning Service"},
    {id:9, href: "/services/floor-wall-tiling",label: "Floor & Wall Tiling Service"},
    {id:10, href: "/services/renovation-services", label: "Renovation Service" },
  ];

  useEffect(() => {
    const fetchBlogCategories = async () => {
      try {
        const response = await fetch(
          buildUrl("post-category/")
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setBlogCategories(Array.isArray(data) ? data : []);
      } catch (error) {
        // leave the list empty: the Blog item then renders as a plain link
        setBlogCategories([]);
      }
    };

    fetchBlogCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // lock page scroll while the mobile menu covers it; Escape closes it
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && Closetoggle();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  // route changes (back button, programmatic) also close it
  useEffect(() => {
    router.events.on("routeChangeStart", Closetoggle);
    return () => router.events.off("routeChangeStart", Closetoggle);
  }, [router.events]);

  return (
    <div className={`${styles.main_container} ${scrolled ? styles.compact : ""}`}>
      <div className={styles.header_container}>
        <section className={styles.header_contact_bar}>
          <div className={styles.contact_container}>
            <div className={styles.contact_detail}>
              <div className={styles.image_and_detail}>
              
                <span className={styles.images}>
                <Link href="tel:+971518051885" >
                  <Image
                    src={"/updated-images/telephone-call.png"}
                    alt="Phone Number: "
                    width={14}
                    height={18}
                  />
                    </Link>
                </span>
              
                <span className={styles.data}> <Link href="tel:+971524052485" >+971524052485</Link></span>
               
              </div>


              
              <div className={styles.image_and_detail}>
                <span className={styles.images}>
                <a href="mailto:basatanwertech@gmail.com">
                  <Image
                    src={"/updated-images/mail.png"}
                    alt="Email: "
                    width={16}
                    height={16}
                  />
                  </a>
                </span>
                <span className={styles.data}><a href="mailto:info@basatanwertech.com">info@basatanwertech.com</a></span>
              </div>

              <div className={styles.image_and_detail1}>
                <span className={styles.images}>
                  <Image
                    src={"/updated-images/clock.png"}
                    alt="Available Timing: "
                    width={16}
                    height={16}
                  />
                </span>
                <span className={styles.data}>Mon - Sun 08:00 - 18:00</span>
              </div>
            </div>
            <div className={styles.social_contact_detail}>
              <span className={styles.images}>
                <Link href="https://www.facebook.com/basatanwertech">
                  <Image
                    src={"/updated-images/facebook.png"}
                    alt="Facebook"
                    width={18}
                    height={18}
                  />
                </Link>
              </span>
              <span className={styles.images}>
                <Link href="https://www.tiktok.com/@basat.anwer.tech?is_from_webapp=1&sender_device=pc">
                  <Image
                    src={"/updated-images/tiktok.png"}
                    alt="Twitter"
                    width={18}
                    height={18}
                  />
                </Link>
              </span>
              <span className={styles.images}>
                <Link href="https://instagram.com/basatanwertech?igshid=ZDdkNTZiNTM=">
                  <Image
                    src={"/updated-images/instagram.png"}
                    alt="Instagram"
                    width={18}
                    height={18}
                  />
                </Link>
              </span>
              <span>
                <Link href="https://www.linkedin.com/company/basat-anwer-technical-services-llc/">
                  <Image
                    src={"/updated-images/linkedin.png"}
                    alt="Linkedin"
                    width={18}
                    height={18}
                  />
                </Link>
              </span>
            </div>
          </div>
        </section>
      </div>

      <section
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${solid ? styles.solid : ""} ${isMenuOpen ? styles.menu_open : ""}`}
      >
        <Link href="/" className={styles.logo} onClick={Closetoggle} aria-label="Basat Anwer Tech, home">
          <Image
            src={"/updated-images/company-logo.png"}
            alt="Basat Anwer Tech"
            width={60}
            height={70}
            priority
          />
        </Link>

        <nav
          id="site-menu"
          aria-label="Main"
          className={`${styles.navbar_items} ${isMenuOpen ? styles.show : ""}`}
        >
          <Link href="/" onClick={Closetoggle} className={cls("/", styles.items)}>
            Home
          </Link>

          <Link href="/about-us" onClick={Closetoggle} className={cls("/about-us", styles.items)}>
            About Us
          </Link>

          <div className={`${styles.dropdown_items} ${on("/services") ? styles.active : ""} ${shut ? styles.shut : ""}`} onMouseEnter={() => setShut(false)} onMouseLeave={() => setShut(false)}>
            <Link href="/services" className={styles.dropdown_link} onClick={Closetoggle}>
              Services
            </Link>
            <button
              type="button"
              className={styles.caret}
              aria-label="Show services"
              aria-expanded={showServices}
              onClick={() => setShowServices((v) => !v)}
            >
              <span aria-hidden="true" />
            </button>

            <div className={`${styles.services_dropdown_content} ${showServices ? styles.show : ""}`}>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className={`${styles.sub_items} ${on(service.href) ? styles.sub_active : ""}`}
                  onClick={Closetoggle}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/gallery" onClick={Closetoggle} className={cls("/gallery", styles.items)}>
            Projects
          </Link>

          <Link href="/portfolio" onClick={Closetoggle} className={cls("/portfolio", styles.items)}>
            Portfolio
          </Link>

          {blogCategories.length > 0 ? (
            <div className={`${styles.dropdown_items} ${on("/blogs") || on("/blog-categories") ? styles.active : ""} ${shut ? styles.shut : ""}`} onMouseEnter={() => setShut(false)} onMouseLeave={() => setShut(false)}>
              <Link href="/blogs" className={styles.dropdown_link} onClick={Closetoggle}>
                Blog
              </Link>
              <button
                type="button"
                className={styles.caret}
                aria-label="Show blog categories"
                aria-expanded={showBlogs}
                onClick={() => setShowBlogs((v) => !v)}
              >
                <span aria-hidden="true" />
              </button>

              <div className={`${styles.blogs_dropdown_content} ${showBlogs ? styles.show : ""}`}>
                {blogCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/blog-categories/${category.name.toLowerCase().replace(/ /g, "-")}`}
                    className={styles.sub_items}
                    onClick={Closetoggle}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            // no categories (API down or none yet): a plain link, never an empty menu
            <Link href="/blogs" onClick={Closetoggle} className={cls("/blogs", styles.items)}>
              Blog
            </Link>
          )}

          <Link href="/contact-us" onClick={Closetoggle} className={cls("/contact-us", styles.items)}>
            Contact Us
          </Link>

          {/* phones: the quote button lives inside the menu */}
          <button
            className={styles.menu_cta}
            onClick={() => {
              Closetoggle();
              toggleModal();
            }}
          >
            Get a Free Quote
          </button>
        </nav>

        <div className={styles.cta_slot}>
          <button className={styles.contact_btn} onClick={toggleModal}>
            Get a Free Quote
          </button>
        </div>
        {showModal && <ContactModal onClose={toggleModal} />}

        <button
          type="button"
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
        >
          <span className={styles.bars} aria-hidden="true" />
        </button>
      </section>
    </div>
  );
};

export default Header;
