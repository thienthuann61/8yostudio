/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Header from '~/layouts/components/Header';

import classNames from 'classnames/bind';
import styles from './CollectionLayout.module.scss';

import Footer from '~/layouts/components/Footer';

import { categories } from '~/mock-data/categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CollectionLayout({ children }) {
    const location = useLocation();

    const collectionMenuList = categories.collection;

    const pageCurrent = collectionMenuList.find((page) => page.slug === location.pathname);

    const title = pageCurrent.title ?? pageCurrent.name;

    const listSort = [
        'Giá: Tăng dần',
        'Giá: Giảm dần',
        'Tên: A-Z',
        'Tên: Z-A',
        'Cũ nhất',
        'Mới nhất',
        'Bán chạy nhất',
        'Tồn kho giảm dần',
    ];

    useEffect(() => {
        document.title = pageCurrent && `${title} - 8YO Studio`;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

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
                                <p>
                                    {pageCurrent &&
                                        (pageCurrent.title ?? pageCurrent.name.toUpperCase())}
                                </p>
                            </li>
                        </ol>
                    </div>

                    <div className={cx('collection__heading-wrap')}>
                        <div className="container">
                            <div className={cx('collection__heading')}>
                                <h3>{pageCurrent.title ?? pageCurrent.name.toUpperCase()}</h3>
                                <div className={cx('collection__sortby')}>
                                    <div className={cx('collection__sortby-title')}>
                                        <span className={cx('collection__icon-filter')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
                                                />
                                                <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
                                            </svg>
                                        </span>
                                        <span className={cx('collection__sortby-name')}>
                                            Sắp xếp
                                        </span>
                                    </div>

                                    <div className={cx('collection__sortby-icon')}>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </div>

                                    <div className={cx('collection__sortby-content')}>
                                        <ul className={cx('collection__sortby-options')}>
                                            {listSort.map((item) => {
                                                return (
                                                    <li key={item}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            className={cx('collection__icon-check')}
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                                        </svg>
                                                        <span>{item}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('collection__filter-wrap')}>
                        <div className="container">
                            <div className={cx('collection__filter')}>
                                <div className={cx('title-filter')}>
                                    <span className={cx('icon-filter')}>
                                        <svg viewBox="0 0 20 20">
                                            <path
                                                fill="none"
                                                strokeWidth="2"
                                                strokeLinejoin="round"
                                                strokeMiterlimit="10"
                                                d="M12 9v8l-4-4V9L2 3h16z"
                                            ></path>
                                        </svg>
                                    </span>
                                    Bộ lọc
                                </div>
                                <div className={cx('filter-group')}>
                                    <span className={cx('filter-group__title')}>Màu sắc</span>
                                    <span className={cx('filter-group__icon')}>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </span>
                                    <div className={cx('filter-group__content')}>
                                        <ul className={cx('filter-color')}>
                                            <li>
                                                <span></span>
                                            </li>
                                            <li>
                                                <span></span>
                                            </li>
                                            <li>
                                                <span></span>
                                            </li>
                                            <li>
                                                <span></span>
                                            </li>
                                            <li>
                                                <span></span>
                                            </li>
                                            <li>
                                                <span></span>
                                            </li>
                                            <li>
                                                <span></span>
                                            </li>
                                            <li>
                                                <span></span>
                                            </li>
                                            <li>
                                                <span></span>
                                            </li>
                                            <li>
                                                <span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={cx('filter-group')}>
                                    <span className={cx('filter-group__title')}>Kích thước</span>
                                    <span className={cx('filter-group__icon')}>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </span>
                                    <div className={cx('filter-group__content')}>
                                        <ul className={cx('filter-size')}>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="data-size-p1"
                                                    value="S"
                                                    name="size-filter"
                                                />
                                                <label htmlFor="data-size-p1">S</label>{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="data-size-p2"
                                                    value=" M"
                                                    name="size-filter"
                                                />
                                                <label htmlFor="data-size-p2"> M</label>
                                            </li>

                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="data-size-p3"
                                                    value=" L"
                                                    name="size-filter"
                                                />
                                                <label htmlFor="data-size-p3"> L</label>
                                            </li>

                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="data-size-p4"
                                                    value=" XL "
                                                    name="size-filter"
                                                />
                                                <label htmlFor="data-size-p4"> XL </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('content')}>
                        <div className="container">
                            <div className={cx('product__wrap')}>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CollectionLayout;
