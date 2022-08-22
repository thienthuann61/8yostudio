import classNames from 'classnames/bind';
import styles from './TermsOfService.module.scss';

const cx = classNames.bind(styles);

function TermsOfService() {
    return (
        <>
            <h3 className={cx('heading')}>Điều khoản dịch vụ</h3>
            <div className={cx('content')}>
                <p>
                    <span>
                        <strong>1. Giới thiệu</strong>
                    </span>
                </p>
                <p>
                    <span>Chào mừng quý khách hàng đến với website chúng tôi.</span>
                </p>
                <p>
                    <span>
                        Khi quý khách hàng truy cập vào trang website của chúng tôi có nghĩa là quý
                        khách đồng ý với các điều khoản này. Trang web có quyền thay đổi, chỉnh sửa,
                        thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản mua bán hàng hóa này, vào
                        bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web
                        mà không cần thông báo trước. Và khi quý khách tiếp tục sử dụng trang web,
                        sau khi các thay đổi về Điều khoản này được đăng tải, có nghĩa là quý khách
                        chấp nhận với những thay đổi đó.
                    </span>
                </p>
                <p>
                    <span>
                        Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của
                        chúng tôi.
                    </span>
                </p>
                <p>
                    <span>
                        <strong>2. Hướng dẫn sử dụng website</strong>
                    </span>
                </p>
                <p>
                    <span>
                        Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc truy cập
                        dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp. Khách hàng đảm bảo
                        có đầy đủ hành vi dân sự để thực hiện các giao dịch mua bán hàng hóa theo
                        quy định hiện hành của pháp luật Việt Nam.
                    </span>
                </p>
                <p>
                    <span>
                        Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ
                        website. Nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng
                        cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.
                    </span>
                </p>
                <p>
                    <span></span>
                    <span></span>
                    <br />
                </p>
                <p>
                    <span>
                        <strong>3. Thanh toán an toàn và tiện lợi</strong>
                    </span>
                </p>
                <p>
                    <span>
                        Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp
                        dụng phương thức phù hợp:
                    </span>
                </p>
                <p>
                    <span>
                        <strong>
                            <u>Cách 1</u>
                        </strong>
                        : Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ người bán)
                        <br />
                    </span>
                    <span>
                        <strong>
                            <u>Cách 2</u>
                        </strong>
                        <strong>:</strong>&nbsp;Thanh toán sau (COD – giao hàng và thu tiền tận nơi)
                        <br />
                    </span>
                    <span>
                        <strong>
                            <u>Cách 3</u>
                        </strong>
                        <strong>:</strong>&nbsp;Thanh toán online qua thẻ tín dụng, chuyển khoản
                    </span>
                </p>
            </div>
        </>
    );
}

export default TermsOfService;
