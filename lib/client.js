import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	projectId: "r5dols4o",
	dataset: "production",
	apiVersion: "2023-03-07",
	useCdn: true,
	token: process.env.MY_DASHBOARD_PORTFOLIO_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
