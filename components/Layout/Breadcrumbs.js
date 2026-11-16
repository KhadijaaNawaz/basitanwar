import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import aboutStyles from '@/styles/about.module.css'

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathSegments = router.asPath.split('/').filter(segment => segment !== '');
    const breadcrumbsArray = pathSegments.map((segment, index) => ({
      name: segment,
      path: `/${pathSegments.slice(0, index + 1).join('/')}`,
    }));
    setBreadcrumbs(breadcrumbsArray);
  }, [router.asPath]);

  return (
    <div>
        <div className={aboutStyles.about_breadcrumbs}>
            <Link className="" href='/'>
                <FontAwesomeIcon
                icon={faHouse}
                className={aboutStyles.about_breadcrumbs_icon}
                />
            </Link>
            <span> / </span>
            {breadcrumbs.map((breadcrumb, index) => (
                <span key={index}>
                    <Link href={breadcrumb.path}>
                      <p>{breadcrumb.name}</p>
                    </Link>
                    <div className={aboutStyles.slash}>{index !== breadcrumbs.length - 1 && ' / '}</div>
                </span>
             ))}
        </div>
    </div>
  );
};

export default Breadcrumbs;
