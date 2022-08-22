/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { categories } from '~/mock-data/categories';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [hideMenu, setHideMenu] = useState(true);
    const [showMenuProduct, setShowMenuProduct] = useState(false);
    const [hideMenuProduct, setHideMenuProduct] = useState(true);

    const location = useLocation();

    useEffect(() => {
        setHideMenu(true);
        setShowMenu(false);
        setShowMenu(false);
    }, [location]);

    const menuList = categories.menu;
    const menuVerticalList = menuList.filter((item) => item.id >= 3);

    const menuProductList = categories.collection.filter((item) => item.id >= 3);

    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? 'var(--white-color)' : '',
        backgroundColor: isActive ? 'var(--text-color)' : '',
    });

    const handleShowHideMenu = () => {
        setShowMenu(!showMenu);
        setHideMenu(!hideMenu);
    };

    const handleShowHideMenuProduct = () => {
        setHideMenuProduct(!hideMenuProduct);
        setShowMenuProduct(!showMenuProduct);
    };

    return (
        <>
            <div className={cx('top-header')}>
                <div className={cx('wrapper')}>
                    <div className={cx('flex-top-header')}>
                        <div className={cx('nav-vertical__wrap')}>
                            <div className={cx('nav-vertical')} onClick={handleShowHideMenu}>
                                <div className={cx('icon')}>
                                    {hideMenu && <span className={cx('bar')}></span>}
                                    {showMenu && (
                                        <span className={cx('icon__menu--close')}>
                                            <svg viewBox="0 0 19 19" role="presentation">
                                                <path
                                                    d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    )}
                                </div>
                                <span className={cx('menu-text')}>Menu</span>
                            </div>
                            {showMenu && (
                                <div className={cx('menu-vertical')}>
                                    <div className={cx('menu-vertical__heading')}>
                                        <Link to="/">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 512 512"
                                                xmlSpace="preserve"
                                                className={cx('svg-ico-home')}
                                            >
                                                <g>
                                                    <g>
                                                        <path d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064 c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57 c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52 s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053 c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89 c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024 c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847 C455.549,238.499,449.593,232.543,442.246,232.543z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </Link>
                                    </div>

                                    <div className={cx('menu-vertical__scroll')}>
                                        <ul>
                                            <li>
                                                <Link to="/" className={cx('menu-vertical__item')}>
                                                    Trang chủ
                                                </Link>
                                            </li>
                                            <li>
                                                <div className={cx('menu-vertical__product__wrap')}>
                                                    <div
                                                        className={cx('menu-vertical__product')}
                                                        onClick={handleShowHideMenuProduct}
                                                    >
                                                        <span>Sản phẩm</span>
                                                        {hideMenuProduct && (
                                                            <FontAwesomeIcon icon={faAngleDown} />
                                                        )}
                                                        {showMenuProduct && (
                                                            <FontAwesomeIcon icon={faAngleUp} />
                                                        )}
                                                    </div>
                                                    {true && (
                                                        <ul
                                                            className={cx('menu-product')}
                                                            style={{
                                                                overflow: 'hidden',
                                                                height: showMenuProduct
                                                                    ? 31 * menuProductList.length
                                                                    : 0,
                                                                transition: 'all 0.45s linear',
                                                            }}
                                                        >
                                                            {menuProductList.map((item) => {
                                                                return (
                                                                    <li key={item.id}>
                                                                        <Link to={item.slug}>
                                                                            {item.name ===
                                                                            'Sản phẩm' ? (
                                                                                <p>
                                                                                    Xem tất cả "
                                                                                    <span>
                                                                                        {item.name.toUpperCase()}
                                                                                    </span>
                                                                                    "
                                                                                </p>
                                                                            ) : (
                                                                                item.name.toUpperCase()
                                                                            )}
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    )}
                                                </div>
                                            </li>
                                            {menuVerticalList.map((item) => {
                                                if (!item.slug.startsWith('/')) {
                                                    return (
                                                        <li key={item.id}>
                                                            <a
                                                                href={item.slug}
                                                                target="_blank"
                                                                title={item.name.toUpperCase()}
                                                                rel="noreferrer"
                                                                className={cx(
                                                                    'menu-vertical__item',
                                                                )}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    );
                                                }
                                                return (
                                                    <li
                                                        className={cx('menu-item-categories')}
                                                        key={item.id}
                                                    >
                                                        <Link
                                                            className={cx('menu-vertical__item')}
                                                            to={item.slug}
                                                            title={item.name.toUpperCase()}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        <div className={cx('help')}>
                                            <h3>Bạn cần hỗ trợ</h3>
                                            <ul>
                                                <li>
                                                    <a
                                                        href="tel:0898660309"
                                                        rel="nofollow"
                                                        className={cx('help__item')}
                                                    >
                                                        <div className={cx('help__icon')}>
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                role="presentation"
                                                            >
                                                                <g
                                                                    strokeWidth="2"
                                                                    fill="none"
                                                                    fillRule="evenodd"
                                                                    strokeLinecap="square"
                                                                >
                                                                    <path
                                                                        d="M17 15l-3 3-8-8 3-3-5-5-3 3c0 9.941 8.059 18 18 18l3-3-5-5z"
                                                                        stroke="#252a2b"
                                                                    ></path>
                                                                    <path
                                                                        d="M14 1c4.971 0 9 4.029 9 9m-9-5c2.761 0 5 2.239 5 5"
                                                                        stroke="#4889c9"
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <span className={cx('help__text')}>
                                                            <span>0898660309</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="mailto:8yo.studio@gmail.com"
                                                        rel="nofollow"
                                                        className={cx('help__item')}
                                                    >
                                                        <div className={cx('help__icon')}>
                                                            <svg
                                                                viewBox="0 0 22 22"
                                                                role="presentation"
                                                            >
                                                                <g fill="none" fillRule="evenodd">
                                                                    <path
                                                                        stroke="#252a2b"
                                                                        d="M.916667 10.08333367l3.66666667-2.65833334v4.65849997zm20.1666667 0L17.416667 7.42500033v4.65849997z"
                                                                    ></path>
                                                                    <path
                                                                        stroke="#252a2b"
                                                                        strokeWidth="2"
                                                                        d="M4.58333367 7.42500033L.916667 10.08333367V21.0833337h20.1666667V10.08333367L17.416667 7.42500033"
                                                                    ></path>
                                                                    <path
                                                                        stroke="#252a2b"
                                                                        strokeWidth="2"
                                                                        d="M4.58333367 12.1000003V.916667H17.416667v11.1833333m-16.5-2.01666663L21.0833337 21.0833337m0-11.00000003L11.0000003 15.5833337"
                                                                    ></path>
                                                                    <path
                                                                        d="M8.25000033 5.50000033h5.49999997M8.25000033 9.166667h5.49999997"
                                                                        stroke="#4889c9"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="square"
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <span className={cx('help__text')}>
                                                            <span>8yo.studio@gmail.com</span>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/">
                            <div className={cx('wrap-logo')}>
                                <div className={cx('logo-width')}>
                                    <img
                                        className={cx('logo')}
                                        src="https://theme.hstatic.net/200000258387/1000809443/14/logo.png?v=99"
                                    />
                                </div>
                            </div>
                        </Link>

                        <div className={cx('wrap-search')}>
                            <div className={cx('search')} title="Vui lòng điền vào trường này">
                                <input
                                    className={cx('search-input')}
                                    type="search"
                                    maxLength="40"
                                    placeholder="Tìm kiếm sản phẩm..."
                                />
                                <button className={cx('btn-search')}>
                                    <svg
                                        className={cx('svg-search')}
                                        height="30px"
                                        width="30px"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className={cx('header-wrap-actions')}>
                            <div className={cx('header-action-item')} title="Tài khoản">
                                <svg className={cx('svg-ico-account')} viewBox="0 0 1024 1024">
                                    <path
                                        className="path1"
                                        d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"
                                    ></path>
                                    <path
                                        className="path2"
                                        d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"
                                    ></path>
                                </svg>
                                <span>Tài khoản</span>
                            </div>
                            <div className={cx('header-action-item')} title="Giỏ hàng">
                                <div className={cx('icon-cart')}>
                                    <svg
                                        className={cx('svg-ico-cart')}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 -13 456.75885 456"
                                        width="456pt"
                                    >
                                        <path d="m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"></path>
                                        <path d="m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0"></path>
                                        <path d="m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"></path>
                                    </svg>

                                    <span>0</span>
                                </div>
                                <span>Giỏ hàng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('bottom-header')}>
                <div className={cx('wrapper')}>
                    <div className={cx('flex-categories')}>
                        <Link to="/">
                            <div className={cx('icon-home-link')}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                    className={cx('svg-ico-home')}
                                >
                                    <g>
                                        <g>
                                            <path d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064 c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57 c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52 s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053 c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89 c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024 c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847 C455.549,238.499,449.593,232.543,442.246,232.543z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </Link>
                        <ul className={cx('menu-list-categories')}>
                            {menuList.map((item) => {
                                if (!item.slug.startsWith('/')) {
                                    return (
                                        <li className={cx('menu-item-categories')} key={item.id}>
                                            <a
                                                href={item.slug}
                                                className={cx('menu-item')}
                                                target="_blank"
                                                rel="noreferrer"
                                                title={item.name.toUpperCase()}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    );
                                }
                                return (
                                    <li className={cx('menu-item-categories')} key={item.id}>
                                        <NavLink
                                            to={item.slug}
                                            className={cx('menu-item')}
                                            style={navLinkStyle}
                                            title={item.name.toUpperCase()}
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
