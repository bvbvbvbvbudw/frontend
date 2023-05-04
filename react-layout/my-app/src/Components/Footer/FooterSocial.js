import React from "react";

export default function FooterSocial() {


    return (<>

        <div className="footer__social">
            <div className="footer__social-header">
                <b>15k</b> followers
            </div>
            <div className="footer__social-content">
                Follow Us:
                <a href="#" target="_blank">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>

    </>)
}