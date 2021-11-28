import React from "react";
import { Link } from "@material-ui/core";
import "./main.scss";
import CatImg from "../../../../assets/icons/Chershire_Cat.jpeg";

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-img-wrap">
                <img src={CatImg} alt="" />
            </div>
            <div className="landing-main-btns-wrap">
                <Link href="https://app.hohodao.money" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Enter App</p>
                    </div>
                </Link>
                <Link href="https://wonderland.gitbook.io/wonderland/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Documentation</p>
                    </div>
                </Link>
            </div>
            <div className="landing-main-title-wrap">
                <p>Welcome to</p>
                <p>The DAO</p>
            </div>
            <div className="landing-main-help-text-wrap">
                <p>We work together to grow together</p>
                <p>and earn together (HOHO, HOHO)</p>
            </div>
        </div>
    );
}

export default Main;
