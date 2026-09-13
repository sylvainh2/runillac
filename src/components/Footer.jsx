import { Link } from "react-router-dom";

function Footer(){
    return (
        <>
            <footer className="container-fluid">
                <nav className="row col-md-12">
                    <ul className="footerul">
                        <li className="footerli"><a className="footera" target="_blanck" href="https://www.facebook.com/groups/1219553618160337/"><img src="/img/facebook.png" alt="facebook" className="imgFB"/></a></li>
                        <div className="foot">
                            <li className="footerli"><Link to="/contact" className="footera" href="#">contact</Link> </li>
                            <li className="footerli"><a href="./img/RunIllac_CGU.pdf" className="footera" target="_blank" rel="noreferrer">conditions générales</a> </li>
                            <li className="footerli"><Link to="/partenaires" className="footera">partenaires</Link> </li>
                        </div>
                        <li className="footerli"><Link to="/" className="footera"><img className="logo" src="/img/ASI-logo-01b.png" alt="logo"/> </Link> </li>
                    </ul>
                </nav> 
            </footer>
        </>
    );
}

export default Footer;