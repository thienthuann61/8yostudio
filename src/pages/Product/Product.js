import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import OneProduct from '~/components/OneProduct';

import { categories } from '~/mock-data/categories';
import { data } from '~/mock-data/data';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    const [numberOfShow, setNumberOfShow] = useState(12);
    const [iconLoadMoreProduct, setIconLoadMoreProduct] = useState(false);

    const location = useLocation();

    const menuList = categories.collection;
    const pageCurrent = menuList.find((item) => item.slug === location.pathname);

    const productOnPageCurrent = data.filter((item) => item.categories.includes(pageCurrent.name));

    const productShowOnPageCurrent = productOnPageCurrent.slice(0, numberOfShow);

    const handleChangeProductShow = () => {
        setIconLoadMoreProduct(true); 
        setTimeout(() => {
            setNumberOfShow(numberOfShow + 12);
            setIconLoadMoreProduct(false);
        }, 800);
    };

    return (
        <>
            <div className="row">
                {productShowOnPageCurrent.map((product) => (
                    <div className="col col-3 col-sm-6" key={product.id}>
                        <OneProduct
                            srcImgOne={product.img[0]}
                            srcImgTwo={product.img[1]}
                            title={product.name}
                            priceOld={product.priceOld}
                            priceNew={product.priceNew}
                            sale={Math.round(100 - product.priceNew / (product.priceOld / 100))}
                            status={product.status}
                        />
                    </div>
                ))}
            </div>
            {productOnPageCurrent > productShowOnPageCurrent ? (
                <div className={cx('more-btn__wrap')}>
                    <div onClick={handleChangeProductShow} className={cx('more-btn')}>
                        <span>
                            {iconLoadMoreProduct && <FontAwesomeIcon icon={faSpinner} />}
                            Xem thêm sản phẩm{' '}
                            <strong>
                                {(pageCurrent.title !== undefined
                                    ? pageCurrent.title.toLowerCase()
                                    : pageCurrent.title) ?? pageCurrent.name.toLowerCase()}
                            </strong>
                        </span>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Product;
