import classNames from 'classnames/bind';
import styles from './OneProduct.module.scss';

const cx = classNames.bind(styles);

function OneProduct({ srcImgOne, srcImgTwo, title, priceOld, priceNew, sale, status }) {
    return (
        <div className={cx('product')}>
            <div className={cx('product__img')}>
                <img src={srcImgOne} alt={title} className={cx('product__img-one')} />
                <img src={srcImgTwo} alt={title} className={cx('product__img-two')} />
            </div>
            <div className={cx('product__info')}>
                <h3 className={cx('product__title')}>{title}</h3>
                <div className={cx('product__price')}>
                    <span className={cx('product__price-new')}>{priceNew}.000₫</span>
                    <span className={cx('product__price-old')}>{priceOld}.000₫</span>
                </div>
                <p className={cx('product__percent-sale')}>
                    <span>-{sale}%</span>
                </p>
                {status === 'Tạm hết hàng' ? (
                    <p className={cx('product__status')}>
                        <span>{status}</span>
                    </p>
                ) : null}
            </div>
        </div>
    );
}

export default OneProduct;
