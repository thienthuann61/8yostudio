import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function HomeSelection({ linkSelector, srcBanner, titleSelector, titleHeading, children }) {
    return (
        <section className={cx('section__collection')}>
            <Link to={linkSelector} className={cx('title')}>
                <h3>{titleHeading}</h3>
            </Link>
            <div className="row">{children}</div>
            {titleSelector && (
                <div className={cx('more-btn__wrap')}>
                    <Link to={linkSelector} className={cx('more-btn')}>
                        <span>
                            Xem thêm sản phẩm <strong>{titleSelector}</strong>
                        </span>
                    </Link>
                </div>
            )}
            {srcBanner && (
                <div className={cx('banner-group')}>
                    <Link to={linkSelector} className={cx('banner-group__link')}>
                        <img src={srcBanner} alt="Banner" className={cx('banner-group__img')} />
                    </Link>
                </div>
            )}
        </section>
    );
}

export default HomeSelection;
