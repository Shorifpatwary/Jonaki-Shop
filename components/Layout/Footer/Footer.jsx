import React from "react";
import logo from "../../../assets/images/res-logo.png";
import { Link } from "react-router-dom";
import HeadingSm from "../../UI/Heading/Heading-sm";
import Paragraph from "../../UI/Paragraph";
import Logo from "../../UI/logo";
const Footer = () => {
	return (
		<footer className="footer__wrapper ">
			<div className="footer__top flex__center-s-b wrap">
				<div className=" footer__column footer__logo-column col__3 col__bp-3-6 col__bp-5-12 flex__column-start">
					<div className=" footer__logo footer__column-top ">
						<Logo src={logo} />
					</div>
					<div className="footer__des">
						<HeadingSm>Tasty Treat</HeadingSm>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nesciunt pariatur accusamus
						</Paragraph>
					</div>
				</div>
				<div className="footer__dt-column footer__column col__3 col__bp-3-6 col__bp-6-12 ">
					<HeadingSm class="footer__column-top">
						Delivery Time
					</HeadingSm>
					<ul className="footer__des deliver__time-list flex__column-start">
						<li className=" delivery__time-item ">
							<Paragraph>
								Sunday - Thursday: <br /> 10:00am - 11:00pm
							</Paragraph>
						</li>

						<li className=" delivery__time-item ">
							<Paragraph>
								Friday - Saturday:
								<br />
								Off day
							</Paragraph>
						</li>
					</ul>
				</div>

				<div className="footer__contact-column footer__column col__3 col__bp-3-6 col__bp-6-12 ">
					<HeadingSm className="footer__column-top">
						Contact
					</HeadingSm>
					<ul className="footer__des deliver__time-list flex__column-start">
						<li className=" delivery__time-item ">
							<Paragraph>
								<b>Location: </b> Horipur bazar
							</Paragraph>
						</li>
						<li className=" delivery__time-item ">
							<Paragraph>
								<b>Phone:</b> 01712345678
							</Paragraph>
						</li>

						<li className=" delivery__time-item ">
							<Paragraph className="d__flex">
								<b>Email:</b>
								{"  "}
								<a href="mailto:example@gmail.com">
									example@gmail.com
								</a>
							</Paragraph>
						</li>
					</ul>
				</div>

				<div className=" footer__column col__3 col__bp-3-6 col__bp-6-12 flex__column-start">
					<HeadingSm className="footer__column-top">
						Newsletter
					</HeadingSm>
					<div className="footer__des">
						<Paragraph>Subscribe our newsletter</Paragraph>
						<div className="newsletter flex__center-s-b  ">
							<input
								type="email"
								placeholder="Enter your email"
								// mistake
							/>
							<span className="flex__center">
								<i className="ri-send-plane-line"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* Footer bottom / copyright footer  */}
			<div className="flex__center-s-e grow wrap footer__copyright">
				<div className="col__6 col__bp-3-12 copyright">
					<Paragraph className="copyright__text des__3">
						Copyright - 2022, website made by{" "}
						<a href="https://www.linkedin.com/in/shorif-patwary/">
							shorif patwary
						</a>{" "}
						All Rights Reserved.
					</Paragraph>
				</div>
				<div className="col__6 col__bp-3-12 footer__social flex__center">
					<div className="social__links flex__end">
						<Paragraph>Follow: </Paragraph>
						{/* <div className="col__6"> */}
						<span>
							<a href="https://www.facebook.com/shorifulislampatwary999">
								<i className="ri-facebook-line"></i>
							</a>
						</span>

						<span>
							<a href="https://github.com/https://github.com/Shorifpatwary">
								<i class="ri-github-line"></i>
							</a>
						</span>

						<span>
							<a href="https://twitter.com/Shorifu29676980">
								<i class="ri-twitter-line"></i>
							</a>
						</span>

						<span>
							<a href="https://www.linkedin.com/in/shorif-patwary/">
								<i class="ri-linkedin-line"></i>
							</a>
						</span>
						{/* </div> */}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
