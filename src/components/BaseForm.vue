<template>
	<div class="mr-auto ml-auto  h-screen w-3/4">
		<form @submit.prevent="checkForm">
			<div class="container w-4/5 p-8 mx-auto mt-10 rounded-lg">
				<div class="grid grid-cols-2 gap-4">
					<div class="formAlignment">
						<label>Car Name</label>
						<input
							type="text"
							id="productName"
							v-model="productName"
							placeholder="Car Name"
							class="px-4 py-4 mb-4 rounded-md text-gray-500"
						/>
						<p v-if="errors" class="text-xl text-red-600 ">please fill with name{{ errors.productName }}!</p>
					</div>
					<!-- ml-2 -->
					<div class="formAlignment">
						<label>Brand</label>
						<select id="brand" class="px-4 py-4  rounded border border-skyBlue" v-model="productBrand">
							<option value="Audi">Audi</option>
							<option value="Ferrari">Ferrari</option>
							<option value="Lamborghini">Lamborghini</option>
							<option value="Maserati">Maserati</option>
							<option value="Porsche">Porsche</option>
							<option value="Rollsroyce">Rolls Royce</option>
						</select>
					</div>
				</div>
				<div class="grid grid-cols-3 gap-4">
					<div class="formAlignment">
						<label>Release Date</label>
						<input
							type="date"
							id="releaseDate"
							placeholder="MM//DD//YYYY"
							class="px-4 py-4 mb-4 rounded-md"
							v-model="releaseDate"
						/>
					</div>
					<div class="formAlignment">
						<label>Price</label>
						<input type="text" id="price" placeholder="USD $ " class="px-4 py-4  rounded-md" v-model="productPrice" />
					</div>
					<div class="formAlignment">
						<label>Warranty</label>
						<select id="warranty" class="px-4 py-4  rounded border border-skyBlue" v-model="warrantyYear">
							<option> 1 </option>
							<option> 2 </option>
							<option> 3 </option>
							<option> 4 </option>
							<option> 5 </option>
						</select>
					</div>
				</div>
				<div id="cardescript" class="formAlignment">
					<label>Car Description</label>
					<textarea
						rows="3"
						cols="5"
						id="description"
						class="p-9  rounded-md  border border-skyBlue"
						v-model="productDescription"
					/>
				</div>
				<div class="mb-5">
					<label class="mr-5">Colors </label>
					<span v-for="c in colorsArray" v-bind:key="c.id" class="flex-row">
						<input type="checkbox" v-model="productColor" :id="c.name" :value="c.name" />
						<span class="colorSpan" :class="c.spanValue" />
					</span>
					<div>
						{{ productColor }}, {{ productName }},{{ productBrand }},{{ releaseDate }},{{ productPrice }},{{
							warrantyYear
						}},{{ productDescription }}
					</div>
				</div>
				<label>Upload Image </label>
				<input id="file-input" type="file" class="border border-white" @change="uploadImage" />
				<div>
					<button type="cencle" class="btn  text-deepBlue bg-white float-right ml-5" @click="closeCurrentForm">
						cancle
					</button>
					<button type="submit" class="btn  text-white bg-deepBlue float-right ml-5">
						submit
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
// @ is an alias to /src
const constraints = {
	productName: {
		presence: true,
	},
	productBrand: {
		presenece: true,
	},
	releaseDate: {
		presenece: true,
	},
	productPrice: {
		presenece: true,
		numericality: {
			greaterThanOrEqualTo: 0,
		},
	},
	productWarranty: {
		presenece: true,
	},
	productDescription: {
		presence: true,
	},
	// productColor: {
	// 	presence: true,
	// },
};
export default {
	name: "BaseForm",
	// "color","carImgFromDb"
	props: ["name", "brand", "date", "price", "warranty", "description", "colors"],
	emits: ["save-product", "close"],
	//"save-product-color"
	data() {
		return {
			// productImg:this.carImgFromDb ? this.carImgFromDb : productImg,
			colorsArray: [
				{
					name: "yellow",
					spanValue: "bg-yellowc",
				},
				{
					name: "red",
					spanValue: "bg-redc",
				},
				{
					name: "blue",
					spanValue: "bg-bluec",
				},
				{
					name: "green",
					spanValue: "bg-greenc",
				},
				{
					name: "black",
					spanValue: "bg-black",
				},
				{
					name: "white",
					spanValue: "bg-white",
				},
			],
			productName: this.name,
			productBrand: this.brand,
			releaseDate: this.date,
			productPrice: this.price,
			warrantyYear: this.warranty,
			productDescription: this.description,
			productColor: [],

			// productImg: this.carImgFromDb ? this.carImgFromDb : productImg,
			// productColor: {
			// 	colorCollection: [],
			// },
			// productColor:[this.color]
			errors: null,
		};
	},
	methods: {
		closeCurrentForm() {
			this.$emit("close", true);
		},
		// uploadImage(e) {
		// 	const file = e.target.files[0] || e.dataTransfer.files[0];
		// 	const reader = new FileReader();
		// 	reader.onload = (e) => {
		// 		this.product.productImg = e.target.result;
		// 	};
		// 	reader.readAsDataURL(file);
		// },
		checkForm() {
			var validate = require("validate.js");
			this.errors = validate(
				{
					productName: this.productName,
					productBrand: this.productBrand,
					releaseDate: this.releaseDate,
					productPrice: this.productPrice,
					warrantyYear: this.warrantyYear,
					productDescription: this.productDescription,
					// productColor: { productColor: [] },
					productColor: this.productColor,
				},
				constraints
			);
			if (this.errors) {
				console.log(this.errors);
			} else {
				// this.closeCurrentForm();
				this.saveProductInfo();
				// this.saveProductColorsInfo();
				alert("Add new product success");
				// console.log(this.productColor);
			}
		},
		saveProductInfo() {
			let products = {
				name: this.productName,
				brand: this.productBrand,
				date: this.releaseDate,
				price: this.productPrice,
				warranty: this.productWarranty,
				description: this.productDescription,
				colors: this.productColor,
				// imgSrc: this.productImg,
			};
			this.$emit("save-product", products);
		},
		// saveProductColorsInfo() {
		// 	let productColor = {
		// 		colors: { productColor: [] },
		// 	};
		// 	this.$emit("save-product-color", productColor);
		// },
	},
};
</script>
