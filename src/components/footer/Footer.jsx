import frame5 from '../../imgs/Frame (5).png';
import frame2 from '../../imgs/Frame (2).png';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-block">
                <h2>Castaway</h2>
                <img src={frame5} alt="" />
            </div>
            <div className="footer-block">
                <a href="##">Home</a>
                <a href="##">About</a>
                <a href="##">Episodes</a>
                <a href="##">Contact</a>
            </div>
            <div className="footer-block">
                <a href="##">Style Guide</a>
                <a href="##">Instructions</a>
                <a href="##">Changelog</a>
                <a href="##">Credit</a>
                <a href="##">Powered by Webflow</a>
                <a href="##">Licenses</a>
            </div>
            <div className="footer-block">
                <img src={frame2} alt="" />
            </div>
        </footer>
    );
}

export default Footer;

