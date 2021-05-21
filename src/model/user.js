export default class UserModel {
	id;
	name;
	username;
	email;
	addressStreet;
	addressSuite;
	addressCity;
	phone;
	website;
	posts;

	constructor(id, name, username, email, addressStreet, addressSuite, addressCity, phone, website, posts) {
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
		this.addressStreet = addressStreet;
		this.addressSuite = addressSuite;
		this.addressCity = addressCity;
		this.phone = phone;
		this.website = website;
		this.posts = posts;
	}
}
