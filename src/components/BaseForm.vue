<template>
	<div class="mr-auto ml-auto  h-screen w-3/4">
		<form @submit-prevent="checkForm">
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
					</div>
					<!-- ml-2 -->
					<div class="formAlignment">
						<label>Brand</label>
						<select id="brand" class="px-4 py-4  rounded border border-skyBlue" v-model="productBrand">
							<option value="audi">Audi</option>
							<option value="ferrari">Ferrari</option>
							<option value="lamborghini">Lamborghini</option>
							<option value="maserati">Maserati</option>
							<option value="porsche">Porsche</option>
							<option value="rollsroyce">Rolls Royce</option>
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
						<select id="warranty" class="px-4 py-4  rounded border border-skyBlue" v-model="productWarranty">
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
						<input type="checkbox" v-model="productColor.colorCollection" :id="c.name" :value="c.value" />
						<span class="colorSpan" :class="c.value" />
					</span>
					<div>
						{{ productColor.colorCollection }}, {{ productName }},{{ productBrand }},{{ releaseDate }},{{
							productPrice
						}},{{ productWarranty }},{{ productDescription }}
					</div>
				</div>
				<label>Upload Image </label>
				<input id="file-input" type="file" class="border border-white" @change="uploadImage" />
				<div>
					<base-button
						textColor="text-deepBlue"
						buttonLabel="CANCLE"
						buttonColor="bg-white"
						class="float-right ml-5"
						buttonType="submit"
					></base-button>
					<base-button
						textColor="text-white"
						buttonLabel="SAVE"
						buttonColor="bg-deepBlue"
						class="float-right"
						@click="closeCurrentForm"
					></base-button>
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
	productColor: {
		presence: true,
	},
};
export default {
	name: "BaseForm",
	// "color","carImgFromDb"
	props: ["name", "brand", "date", "price", "warranty", "description", "colors", "carImgFromDb"],
	emits: ["close", "save-product", "save-product-color"],
	data() {
		return {
			// productImg:this.carImgFromDb ? this.carImgFromDb : productImg,
			colorsArray: [
				{
					name: "yellow",
					value: "bg-yellowc",
				},
				{
					name: "red",
					value: "bg-redc",
				},
				{
					name: "blue",
					value: "bg-bluec",
				},
				{
					name: "green",
					value: "bg-greenc",
				},
				{
					name: "black",
					value: "bg-black",
				},
				{
					name: "white",
					value: "bg-white",
				},
			],
			productName: this.name,
			productBrand: this.brand,
			releaseDate: this.date,
			productPrice: this.price,
			productWarranty: this.warranty,
			productDescription: this.description,
			// productImg: this.carImgFromDb ? this.carImgFromDb : productImg,
			productColor: {
				colorCollection: [],
			},
			errors: null,
		};
	},
	methods: {
		closeCurrentForm() {
			this.$emit("close", true);
		},
		uploadImage(e) {
			const file = e.target.files[0] || e.dataTransfer.files[0];
			const reader = new FileReader();
			reader.onload = (e) => {
				this.productImg = e.target.result;
			};
			reader.readAsDataURL(file);
		},
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
					productColor: { productColor: [] },
				},
				constraints
			);
			if (this.errors) {
				console.log(this.errors);
			} else {
				this.saveProductInfo();
				this.closeCurrentForm();
				this.saveProductColorsInfo();
				// alert(this.productColor);
				// console.log(this.productColor);
			}
		},
		saveProductInfo() {
			let product = {
				name: this.productName,
				brand: this.productBrand,
				date: this.releaseDate,
				price: this.productPrice,
				warranty: this.productWarranty,
				description: this.productDescription,
				imgSrc: this.productImg,
			};
			this.$emit("save-product", product);
		},
		saveProductColorsInfo() {
			let productColor = {
				colors: { productColor: [] },
			};
			this.$emit("save-product-color", productColor);
		},
	},
};
</script>
