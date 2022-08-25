import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { data } from '~/mock-data/data';
import { categories } from '~/mock-data/categories';

import className from 'classnames/bind';
import styles from './ProductDetail.module.scss';

const cx = className.bind(styles);

function ProductDetail() {
    const [imgProduct, setImgProduct] = useState([true, false, false, false]);
    const [quantity, setQuantity] = useState(1);
    const [showYouNotKnow, setShowYouNotKnow] = useState(false);
    const [showInfoDetailProduct, setShowInfoDetailProduct] = useState(true);

    const location = useLocation();

    const productCurrent = data.find((item) => item.slug === location.pathname);

    const linkCategory = categories.collection.find(
        (item) => item.name === productCurrent.categories[0],
    );
    const title = productCurrent.name;

    const handleChangeShowYouNotKnow = () => {
        setShowYouNotKnow(!showYouNotKnow);
        if (showInfoDetailProduct === true) setShowInfoDetailProduct(false);
    };

    const handleChangeShowInfoDetailProduct = () => {
        setShowInfoDetailProduct(!showInfoDetailProduct);
        if (showYouNotKnow === true) setShowYouNotKnow(false);
    };

    useEffect(() => {
        document.title = productCurrent && `${title} - 8YO Studio`;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('heading')}>
                    <ol>
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <span>{productCurrent && '/'}</span>
                        <li>
                            <Link to={linkCategory.slug}>
                                {productCurrent &&
                                    (linkCategory.title ?? linkCategory.name.toUpperCase())}
                            </Link>
                        </li>
                        <span>{productCurrent && '/'}</span>
                        <li>
                            <p>{productCurrent && productCurrent.name}</p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="container">
                <div className={cx('product-details')}>
                    <div className={cx('slider')}>
                        {productCurrent.img.map(
                            (img, index) =>
                                imgProduct[index] && (
                                    <img key={index} src={img} alt={productCurrent.name} />
                                ),
                        )}

                        <div className={cx('slider__control-left')}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className={cx('slider__control-right')}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                    <div className={cx('info-product')}>
                        <div className={cx('product-heading')}>
                            <h1 className={cx('title')}>{productCurrent.name}</h1>
                            <p className={cx('status')}>
                                Tình trạng: <span>{productCurrent.status}</span>
                            </p>
                        </div>

                        <div className={cx('product-price')}>
                            <del>{productCurrent.priceOld * quantity}.000₫</del>
                            <span>{productCurrent.priceNew * quantity}.000₫</span>
                        </div>

                        <div className={cx('product-actions')}>
                            <div className={cx('product-quantity')}>
                                <input
                                    type="button"
                                    value="-"
                                    className={cx('qty-btn')}
                                    onClick={() =>
                                        setQuantity((pre) => {
                                            if (pre <= 1) {
                                                return Number(pre);
                                            } else {
                                                return Number(pre) - 1;
                                            }
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    id={cx('quantity')}
                                    name="quantity"
                                    value={quantity}
                                    readOnly
                                    min="1"
                                />
                                <input
                                    type="button"
                                    value="+"
                                    className={cx('qty-btn')}
                                    onClick={() => setQuantity((pre) => Number(pre) + 1)}
                                />
                            </div>
                            <div className={cx('add-cart')}>
                                <span>
                                    {productCurrent.status === 'Còn hàng'
                                        ? 'Thêm vào giỏ'
                                        : productCurrent.status}
                                </span>
                            </div>
                        </div>

                        <div className={cx('product-panel')}>
                            <div className={cx('panel-group')}>
                                <h2
                                    className={cx('panel-title', 'title__info-product')}
                                    onClick={handleChangeShowInfoDetailProduct}
                                >
                                    Thông tin sản phẩm
                                    <span
                                        className={cx(
                                            'panel__show',
                                            showInfoDetailProduct && 'panel--show',
                                        )}
                                    ></span>
                                </h2>
                                {true && (
                                    <ul
                                        className={cx('panel-info')}
                                        style={{
                                            overflow: 'hidden',
                                            height: showInfoDetailProduct
                                                ? productCurrent.info?.img
                                                    ? 550
                                                    : 160
                                                : 0,
                                            transition: '0.45s',
                                        }}
                                    >
                                        <li className={cx('panel-main')}>
                                            {productCurrent.info?.main?.map((item, index) => (
                                                <span key={index}>{item}</span>
                                            ))}
                                        </li>
                                        <li className={cx('panel-size')}>
                                            {productCurrent.info?.size?.map((item, index) => (
                                                <span key={index}>{item}</span>
                                            ))}
                                        </li>
                                        <li>
                                            {productCurrent.info?.other?.map((item, index) => (
                                                <span key={index}>{item}</span>
                                            ))}
                                        </li>
                                        <li className={cx('panel-img')}>
                                            {productCurrent.info?.img?.map((item, index) => (
                                                <img src={item} alt={item} key={index} />
                                            ))}
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className={cx('panel-group')}>
                                <h2
                                    className={cx('panel-title')}
                                    onClick={handleChangeShowYouNotKnow}
                                >
                                    Có thể bạn chưa biết
                                    <span
                                        className={cx(
                                            'panel__show',
                                            showYouNotKnow && 'panel--show',
                                        )}
                                    ></span>
                                </h2>
                                {true && (
                                    <ul
                                        className={cx('panel-desc')}
                                        style={{
                                            overflow: 'hidden',
                                            height: showYouNotKnow ? 161.48 : 0,
                                            transition: '0.45s',
                                        }}
                                    >
                                        <li>
                                            <img
                                                src="//theme.hstatic.net/200000258387/1000809443/14/product_deliverly_1_ico.png?v=105"
                                                alt="Cam kết 100% chính hãng Local Brand 8YO"
                                            />
                                            <p>Cam kết 100% chính hãng Local Brand 8YO</p>
                                        </li>
                                        <li>
                                            <img
                                                src="//theme.hstatic.net/200000258387/1000809443/14/product_deliverly_2_ico.png?v=105"
                                                alt="Giao hàng dự kiến: Từ 3-5 ngày từ lúc đặt hàng"
                                            />
                                            <p>
                                                Giao hàng dự kiến
                                                <strong>Từ 3-5 ngày từ lúc đặt hàng</strong>
                                            </p>
                                        </li>
                                        <li>
                                            <img
                                                src="//theme.hstatic.net/200000258387/1000809443/14/product_deliverly_3_ico.png?v=105"
                                                alt="Giao hàng dự kiến: Từ 3-5 ngày từ lúc đặt hàng"
                                            />
                                            <p>Nhận đơn online 24/7</p>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
