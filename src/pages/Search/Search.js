import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const location = useLocation();

    useEffect(() => {
        document.title = ' Kểt quả tìm kiếm - 8YO Studio';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('heading')}>Tìm kiếm</h3>
            <div className={cx('message')}>
                <p>Rất tiếc, chúng tôi không tìm thấy kết quả cho từ khóa của bạn</p>
                <p>Vui lòng kiểm tra chính tả, sử dụng các từ tổng quát hơn và thử lại!</p>
            </div>

            <div className={cx('search-field')}>
                <input type="text" className={cx('search-field__input')} placeholder="Tìm kiếm" />
                <input type="submit" alt="hi" id={cx('go')} />
            </div>
        </div>
    );
}

export default Search;
