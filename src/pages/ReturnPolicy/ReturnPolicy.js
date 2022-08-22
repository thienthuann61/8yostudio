import classNames from 'classnames/bind';
import styles from './ReturnPolicy.module.scss';

const cx = classNames.bind(styles);

function Introduction() {
    return (
        <>
            <h3 className={cx('heading')}>Chính sách đổi trả</h3>
            <div className={cx('content')}>
                <p>
                    <strong>1. Điều kiện đổi trả</strong>
                </p>
                <p>
                    Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại
                    hàng&nbsp;ngay tại thời điểm giao/nhận hàng&nbsp;trong những trường hợp sau:
                </p>
                <ul>
                    <li>
                        Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên
                        website tại thời điểm đặt hàng.
                    </li>
                    <li>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
                    <li>
                        Sản phẩm phải còn nguyễn nhãn mác, trong tình trạng còn mới / chưa qua sử
                        dụng.
                    </li>
                </ul>
                <p>
                    &nbsp;Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót
                    trên để hoàn thành việc&nbsp;hoàn trả/đổi trả hàng hóa.&nbsp;
                </p>
                <p className={cx()}>
                    <strong>2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả</strong>
                </p>
                <ul>
                    <li>
                        <strong>Thời gian thông báo đổi trả</strong>:&nbsp;trong vòng 3 ngày&nbsp;kể
                        từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng
                        hoặc bể vỡ.
                    </li>
                    <li>
                        <strong>Thời gian gửi chuyển trả sản phẩm</strong>: trong vòng 7&nbsp;ngày
                        kể từ khi nhận sản phẩm.
                    </li>
                    <li>
                        <strong>Địa điểm đổi trả sản phẩm</strong>: Khách hàng có thể mang hàng trực
                        tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.
                    </li>
                </ul>
                <p>
                    Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất
                    lượng sản phẩm, Quý Khách hàng vui lòng liên hệ fanpage của 8YO. Xin cảm ơn quý
                    khách.
                </p>
            </div>
        </>
    );
}

export default Introduction;
