import React, { Fragment } from 'react';
import "../assets/style/Footer.css"

class Footer extends React.Component {
    render(){
        return(
            <Fragment>
                <footer className="footer-accs">
                    <div className="kotainer-footer">
                        <div className="row-footer">
                            <ul className="">
                                <li className="margin-li-footdesc">
                                    <h5 className="title-footer">Hubungi Kami</h5>
                                    <p className>Telp: 0274-2885822<br />WA: 0895422447394<br />Senin - Minggu<br />24 Jam Non Stop</p>
                                    <p className>Jl. Palagan Tentara Pelajar<br />No 81 Jongkang, Sariharjo,<br />Ngaglik, Sleman<br />Daerah Istimewa Yogyakarta<br />55581</p>
                                </li>
                                {/* <li className="list-item margin-li-footdesc">
                                    <h5 className="title-footer">Layanan</h5>
                                    <ul className="footer-menu-list list-unstyled">
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/domain-murah">Domain</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/hosting-indonesia">Shared Hosting</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/cloud-hosting">Cloud Hosting</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/cloud-vps-hosting">Cloud VPS Hosting</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/promosi-transfer">Transfer Hosting</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/membuat-blog-weebly">Web Builder</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/ssl-murah">Keamanan SSL/HTTPS</a></li>
                                        <li><a className="footer-menu" href="https://www.niagaweb.co.id/">Jasa Pembuatan Website</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/afiliasi">Program Afiliasi</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/whois">Whois</a></li>
                                        <li><a className="footer-menu" href="https://status.niagahoster.co.id/" target="__blank">Niagahoster Status</a></li>
                                    </ul>
                                </li>
                                <li className="list-item margin-li-footdesc">
                                    <h5 className="title-footer">Service Hosting</h5>
                                    <ul className="footer-menu-list list-unstyled">
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/hosting-murah">Hosting Murah</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/hosting-indonesia">Hosting Indonesia</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/hosting-singapore">Hosting Singapore SG</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/wordpress-hosting">Hosting Wordpress</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/email-hosting">Email Hosting</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/reseller-hosting">Reseller Hosting</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/web-hosting-unlimited">Web Hosting Unlimited</a></li>
                                    </ul>
                                </li>
                                <li className="list-item margin-li-footdesc">
                                    <h5 className="title-footer">Kenapa Pilih Niagahoster</h5>
                                    <ul className="footer-menu-list list-unstyled">
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/hosting-terbaik">Hosting Terbaik</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/datacenter-hosting">Datacenter Hosting Terbaik</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/hosting-indonesia#hosting-price">Domain Gratis</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/domain-gratis">Bagi-bagi Domain Gratis</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/hosting-gratis">Bagi-bagi Hosting Gratis</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/review">Review Pelanggan</a></li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                        {/* <div className="row-footer mt-5">
                            <ul className="list-group list-group-horizontal list-unstyled">
                                <li className="list-item margin-li-footdesc mr-4">
                                    <h5 className="title-footer">Tutorial</h5>
                                    <ul className="footer-menu-list list-unstyled">
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/ebook">Ebook Gratis</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/kb">Knowledgebase</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/blog">Blog</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/pembayaran">Cara Pembayaran</a></li>
                                        <li><a className="footer-menu" href="https://course.niagahoster.co.id">Niaga Course</a></li>
                                    </ul>
                                </li>
                                <li className="list-item margin-li-footdesc mx-5">
                                    <h5 className="title-footer">Tentang Kami</h5>
                                    <ul className="footer-menu-list list-unstyled">
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/about-us">Tentang</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/promosi">Penawaran &amp; Promo Spesial</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/niagapoin">Niaga Poin</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/karir">Karir</a></li>
                                        <li><a className="footer-menu" href="https://www.niagahoster.co.id/kontak">Kontak Kami</a></li>
                                    </ul>
                                </li>
                                <li className="list-item margin-li-footdesc">
                                    <h5 className="title-footer">Newsletter</h5>
                                    <form action>
                                        <input className="input-email" placeholder="youremail@gmail.com" />
                                    </form>
                                    <div className="btn-wrap">
                                        <a href="#" className="btn-bawah">BERLANGGANAN</a>
                                    </div>
                                </li>
                                <li className="list-item margin-li-footdesc">
                                    <ul className="list-group list-group-horizontal list-unstyled">
                                        <li><img className="img-sosmed" src="img/facebook.svg" alt="" /></li>
                                        <li><img className="img-sosmed" src="img/instagram.svg" alt="" /></li>
                                        <li><img className="img-sosmed" src="img/linkedin.svg" alt="" /></li>
                                        <li><img className="img-sosmed" src="img/twitter.svg" alt="" /></li>
                                    </ul>
                                </li>
                            </ul>
                        </div> */}
                        {/* <div className="row-footer mt-5">
                            <div className=" col-copyright">
                                <p className="text-copyright">Copyright ©2019 Niagahoster | Hosting powered by PHP7, CloudLinux, CloudFlare, BitNinja and DC DCI-Indonesia. Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology</p>
                            </div>
                            <div className=" col-policy">
                                <a className="pol-item" href="https://www.niagahoster.co.id/syarat-dan-ketentuan">Syarat dan Ketentuan</a>
                                <span>|</span>
                                <a className="pol-item" href="https://www.niagahoster.co.id/kebijakan-privasi">Kebijakan Privasi</a>
                            </div>
                        </div> */}
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;
