export enum SelectedPage {
	Home = "home",
	AboutUs = "aboutus",
	businessAreas = "businessareas",
	ContactUs = "contactus",
}

export interface BenefitType {
	icon: JSX.Element;
	title: string;
	description: string;
}

export interface ClassType {
	name: string;
	description?: string;
	image: string;
}
