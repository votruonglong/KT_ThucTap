import {
	Footer,
	FooterBrand,
	FooterCopyright,
	FooterDivider,
	FooterIcon,
	FooterLink,
	FooterLinkGroup,
	FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../assets/logo.jpg";
import { FormattedMessage } from "react-intl";

const FooterMain = () => {
	return (
		<>
			<Footer
				container
				style={{ boxShadow: "0 0 10px 5px rgba(0, 0,0,0.1)", marginTop: "auto" }}
			>
				<div className="w-full">
					<div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
						<div>
							<FooterBrand
								href="#"
								src={logo}
								alt="Flowbite Logo"
								name="Amazing Tech"
							/>
						</div>
						<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
							<div>
								<FooterTitle title={<FormattedMessage id="about_us" />} className="text-base" />
								<FooterLinkGroup col className="text-base">
									<FooterLink href="#"><FormattedMessage id="news" /></FooterLink>
									<FooterLink href="#"><FormattedMessage id="timeline" /></FooterLink>
								</FooterLinkGroup>
							</div>
							<div>
								<FooterTitle title={<FormattedMessage id="follow_us" />} className="text-base" />
								<FooterLinkGroup col className="text-base">
									<FooterLink href="#"><FormattedMessage id="github" /></FooterLink>
									<FooterLink href="#"><FormattedMessage id="discord" /></FooterLink>
								</FooterLinkGroup>
							</div>
							<div>
								<FooterTitle title={<FormattedMessage id="legal" />} className="text-base" />
								<FooterLinkGroup col className="text-base">
									<FooterLink href="#"><FormattedMessage id="privacy_policy" /></FooterLink>
									<FooterLink href="#"><FormattedMessage id="terms_conditions" /></FooterLink>
								</FooterLinkGroup>
							</div>
						</div>
					</div>
					<FooterDivider />
					<div className="w-full sm:flex sm:items-center sm:justify-between">
						<FooterCopyright
							className="text-base"
							href="#"
							by="Amazing Tech"
							year={2024}
						/>
						<div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
							<FooterIcon href="#" icon={BsFacebook} />
							<FooterIcon href="#" icon={BsInstagram} />
							<FooterIcon href="#" icon={BsTwitter} />
							<FooterIcon href="#" icon={BsGithub} />
							<FooterIcon href="#" icon={BsDribbble} />
						</div>
					</div>
				</div>
			</Footer>
		</>
	);
};

export default FooterMain;
