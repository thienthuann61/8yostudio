import classNames from 'classnames/bind';
import styles from './Introduction.module.scss';

const cx = classNames.bind(styles);

function Introduction() {
    return (
        <>
            <h3 className={cx('heading')}>Giới thiệu</h3>
            <div className={cx('content')}>
                <p id={cx('content__space')}>&nbsp;</p>
                <p>
                    <span>Fanpage:&nbsp;https://www.facebook.com/8yo.studio</span>
                </p>
                <p>
                    <span>Instagram:&nbsp;https://www.instagram.com/8yo.official/</span>
                </p>
                <p>
                    <span>Shopee:&nbsp;https://shopee.vn/8yo.studio</span>
                </p>
                <p id={cx('content__space')}>&nbsp;</p>
                <p>
                    <span>Chào các bạn &lt;3</span>
                </p>
                <p>
                    <span>
                        8YO * chúng mình là một thương hiệu được ra đời vào đầu mùa xuân năm
                        2021&nbsp;và chính thức trình làng giới local brands – streetwear tại HCMC,
                        Vietnam.
                    </span>
                </p>
                <p>
                    <span>
                        Chúng mình được ra đời trong sự chuyển tiếp giữa một năm cũ đầy biến động
                        của toàn thế giới, bước sang một trang năm mới đầy hứa hẹn. 8YO tuy mới
                        nhưng tụi mình là một trong những thương hiệu đầu tiên tại HCMC, Vietnam
                        mang tư duy khác biệt và một cái nhìn hoàn toàn mới về phong cách thời trang
                        đường phố.
                    </span>
                </p>
                <p>
                    <span>
                        8YO là một lời gọi kết nối mọi người, kết nối giữa nền văn hóa phương Đông
                        và phương Tây. Chúng mình sử dụng hình ảnh những ô cửa sổ chat, chứa đựng
                        những câu chữ yêu thương cùng những hình ảnh dí dỏm, những ký tự và con số
                        từ nay sẽ trở thành những bạn nhân vật nhỏ đáng yêu của 8YO, giúp 8YO mang
                        những lời nhắn nhủ tốt lành đến cho mọi người.
                    </span>
                </p>
                <p>
                    <span>
                        Với gram màu hiện đại và phong cách tối giản, 8YO tin chắc các bạn sẽ rất
                        hài lòng cùng 8YO sánh đôi trên mọi nẻo đường mà vẫn rất cool ngầu đó nha.
                    </span>
                </p>
                <p>
                    <span>
                        8YO xin phép được bật mí đến đây thôi, để dành tặng các bạn sự bất ngờ này
                        trong những bộ sưu tập sắp tới nhen! Các bạn nhớ ủng hộ 8YO nhiệt tình nhé,
                        8YO luôn bên cạnh vì bạn &lt;3
                    </span>
                </p>
                <p>
                    <span>
                        <em>
                            (*) Tên gọi “8YO“ (Ey Yo!!!) xuất phát từ lời chào nhau của các bạn trẻ,
                            đặc biệt hiện nay được sử dụng nhiều bởi các bạn trong giới rapper,
                            underground tại Việt Nam. Nhưng nguồn gốc của tên gọi này lại xuất phát
                            từ rất lâu đời ở các quốc gia phương Tây trong thời kì cận hiện đại đến
                            hiện đại.
                        </em>
                    </span>
                </p>
                <p id={cx('content__space')}>&nbsp;</p>
            </div>
        </>
    );
}

export default Introduction;
