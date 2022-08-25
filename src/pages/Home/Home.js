import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { data } from '~/mock-data/data';
import HomeSelection from './HomeSelector';
import OneProduct from '~/components/OneProduct';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const productsOfProductNew = data.filter(
        (item) => item.categories.includes('Sản phẩm mới') && item.status !== 'Tạm hết hàng',
    );
    const twelveProductNew = productsOfProductNew.slice(-12);

    const productsOfTee = data.filter((item) => item.categories.includes('Tee'));
    const twelveTee = productsOfTee.slice(0, 12);

    const productsOfHoodie = data.filter((item) => item.categories.includes('Hoodie'));
    const twelveHoodie = productsOfHoodie.slice(0, 12);

    const productsOfSweater = data.filter((item) => item.categories.includes('Sweater'));
    const twelveSweater = productsOfSweater.slice(0, 12);

    const productOfBestSelling = data.filter((item) =>
        item.categories.includes('Sản phẩm bán chạy'),
    );
    const elevenProductBestSelling = productOfBestSelling.slice(0, 11);
    useEffect(() => {
        document.title = '8YO Studio';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('banner')}>
                    <Link to="/collections/all" className={cx('banner__link')}>
                        <img
                            src="https://theme.hstatic.net/200000258387/1000809443/14/slide_1_img.jpg?v=105"
                            alt="Banner"
                            className={cx('banner__img')}
                        />
                    </Link>
                </div>
                <HomeSelection
                    linkSelector="collections/san-pham-moi"
                    srcBanner="https://theme.hstatic.net/200000258387/1000809443/14/home_collection_1_image.jpg?v=105"
                    titleSelector="sản phẩm mới tinh"
                    titleHeading="sản phẩm mới tinh"
                >
                    {twelveProductNew.map((product) => (
                        <div className="col col-3 col-sm-6" key={product.id}>
                            <OneProduct
                                linkDetail={product.slug}
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
                </HomeSelection>
                <HomeSelection
                    linkSelector="collections/tee"
                    srcBanner="https://theme.hstatic.net/200000258387/1000809443/14/home_collection_2_image.jpg?v=105"
                    titleSelector="tee 8yo"
                    titleHeading="tee 8yo"
                >
                    {twelveTee.map((product) => (
                        <div className="col col-3 col-sm-6" key={product.id}>
                            <OneProduct
                                linkDetail={product.slug}
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
                </HomeSelection>
                <HomeSelection
                    linkSelector="collections/hoodie"
                    srcBanner="https://theme.hstatic.net/200000258387/1000809443/14/home_collection_3_image.jpg?v=105"
                    titleSelector="hoodie 8yo"
                    titleHeading="hoodie 8yo"
                >
                    {twelveHoodie.map((product) => (
                        <div className="col col-3 col-sm-6" key={product.id}>
                            <OneProduct
                                linkDetail={product.slug}
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
                </HomeSelection>
                <HomeSelection linkSelector="collections/sweater" titleHeading="sweater 8yo">
                    {twelveSweater.map((product) => (
                        <div className="col col-3 col-sm-6" key={product.id}>
                            <OneProduct
                                linkDetail={product.slug}
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
                </HomeSelection>
                <HomeSelection
                    linkSelector="collections/hoodie"
                    srcBanner="https://theme.hstatic.net/200000258387/1000809443/14/home_collection_5_image.jpg?v=105"
                    titleHeading="Sản phẩm bán chạy"
                >
                    {elevenProductBestSelling.map((product) => (
                        <div className="col col-3 col-sm-6" key={product.id}>
                            <OneProduct
                                linkDetail={product.slug}
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
                </HomeSelection>
            </div>
        </div>
    );
}

export default Home;
