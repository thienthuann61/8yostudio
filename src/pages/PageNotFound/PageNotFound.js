import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './PageNotFound.module.scss';

const cx = classNames.bind(styles);

function PageNotFound() {
    useEffect(() => {
        document.title = 'Không tìm thấy trang - 8YO Studio';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading')}>
                <span>404</span>
                Không tìm thấy trang
            </h1>
            <p className={cx('desc')}>
                Trang bạn đang tìm kiếm có thể đã bị xóa, chuyển đi, thay đổi link hoặc chưa bao giờ
                tồn tại.
            </p>
            <Link to="/" className={cx('btn')}>
                <span>Trở về trang chủ</span>
            </Link>
        </div>
    );
}

export default PageNotFound;
