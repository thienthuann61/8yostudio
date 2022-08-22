import classNames from 'classnames/bind';
import styles from './BangSize.module.scss';

const cx = classNames.bind(styles);

function BangSize() {
    return (
        <>
            <h3 className={cx('heading')}>Bảng Size</h3>
            <div className={cx('content')}>
                <p>
                    <img
                        alt="hi"
                        src="//file.hstatic.net/200000258387/file/b451e3c0-5f6b-4737-95c1-7b19d8fa3fc4_9cefe03f35f34f248b0f44d837f92a2b_grande.jpeg"
                    />
                </p>
                <p>
                    <img
                        alt="hi"
                        src="//file.hstatic.net/200000258387/file/z2291209047175_ff86b10a5d64418b92e7357ec31dc4af_f56ec73ea1e54871ad129ba3480e6a98_grande.jpg"
                    />
                </p>
                <p>
                    <img
                        alt="hi"
                        src="//file.hstatic.net/200000258387/file/z2291209325080_43f69694609403993f8785c47f15a2ef_7fd113850f9745b583c229f2b1d194d2_grande.jpg"
                    />
                </p>
                <p>
                    <img
                        alt="hi"
                        src="//file.hstatic.net/200000258387/file/._form_ao_duoc_fit_size_theo_form_va_tieu_chuan_tuong_doi_cua_nguoi_vi_e497e375664f4dca852c57873b2358f1_grande.png"
                    />
                </p>
                <p>&nbsp;</p>
            </div>
        </>
    );
}

export default BangSize;
