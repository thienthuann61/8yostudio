/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './PageLayout.module.scss';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

import { categories } from '~/mock-data/categories';

const cx = classNames.bind(styles);

function PageLayout({ children }) {
    const [showPageMenuList, setShowMenuList] = useState(true);

    const pageMenuList = categories.pages;
    const menuList = Object.values(categories).flat();

    const location = useLocation();

    const pageCurrent = menuList.find((page) => page.slug === location.pathname);

    useEffect(() => {
        document.title = pageCurrent && `${pageCurrent.name} - 8YO Studio`;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShowMenuList(true);
    }, [location]);

    const handleToggleMenu = () => {
        setShowMenuList(!showPageMenuList);
    };

    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className="container">
                    <div className={cx('heading')}>
                        <ol>
                            <li>
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <span>{pageCurrent && '/'}</span>
                            <li>
                                <p>{pageCurrent && pageCurrent.name}</p>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className={cx('content-wrapper')}>
                    <div className="container">
                        <div className="row lg-gutters">
                            <div className="col col-9">
                                <div className={cx('content')}>{children}</div>
                            </div>
                            <div className="col col-3">
                                <div className={cx('pageMenu')}>
                                    <h3 onClick={handleToggleMenu}>Danh mục page</h3>
                                    {true && (
                                        <ul
                                            style={{
                                                overflow: 'hidden',
                                                height: showPageMenuList
                                                    ? 46.75 * pageMenuList.length
                                                    : 0,
                                                transition: '0.5s',
                                            }}
                                        >
                                            {pageMenuList.map((page) => {
                                                return (
                                                    <li key={page.id}>
                                                        <Link to={page.slug}>{page.name}</Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </div>
                                <Link to="/" className={cx('banner')}>
                                    <img src="https://theme.hstatic.net/200000258387/1000809443/14/page_banner_image.jpg?v=103" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PageLayout;
