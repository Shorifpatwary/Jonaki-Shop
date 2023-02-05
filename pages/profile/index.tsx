import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import Section from "@/UiComponent/Section";
import { useRouter } from "next/router";

import H3 from "@/components/UI/Tags/Heading/H3";
import Button from "@/components/UI/Tags/Button";
type profileDataType = {
	id: string;
	external_id?: string;
	firstname?: string;
	lastname?: string;
	email: string;
	phone?: string;
	created: number;
	updated: number;
};
const Profile = () => {
	const [profileData, setProfileData] = useState();
	const router = useRouter();
	// return;
	const headers = {
		"X-Authorization": process.env.NEXT_PUBLIC_SECRET_KEY_LIVE as string,
		"Content-Type": "application/json",
		Accept: "application/json",
	};
	// get profile data function
	const getProfileData = async () => {
		const response = await fetch(
			`https://api.chec.io/v1/customers/${Cookies.get("customerId")}`,
			{
				method: "GET",
				headers: headers,
			}
		);
		const data = await response.json();
		setProfileData(data);
	};
	// REDIRECT IF DOESN'T HAVE ANY PROFILE
	useEffect(() => {
		if (!Cookies.get("JWT") || !Cookies.get("customerId")) {
			router.push("/login");
		} else {
			// get profile data using cookie
			getProfileData();
		}
	}, []);

	// PROFILE DELETE FUNCTION
	const profileDeleteHandler = async () => {
		try {
			const res = await fetch(
				`https://api.chec.io/v1/customers/${Cookies.get("customerId")}`,
				{
					method: "DELETE",
					headers: headers,
				}
			);
			if (res.ok) {
				//  deleteUserCookie
				Cookies.remove("customerId");
				Cookies.remove("JWT");

				router.push("/registration");
			}
		} catch (error) {
			console.log(error);
		}
	};

	// error logic
	if (profileData?.error) {
		return (
			<Section name="profile__page">
				<H3 className="text__center error ">
					{profileData.error.message || "There is an error"}
				</H3>
			</Section>
		);
	} else {
		return (
			<Section>
				<H3>Hello! {profileData?.firstname} </H3>
				<Button onClick={profileDeleteHandler}>Delete Profile</Button>
			</Section>
		);
	}
};

export default Profile;
