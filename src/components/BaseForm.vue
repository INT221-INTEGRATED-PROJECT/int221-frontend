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
							:class="{ 'is-invalid': errors }"
						/>
						<span v-if="errors" class="text-xl text-red-600 ">
							{{ errors.productName }}
						</span>
						<!-- <p class="text-xl text-red-600 ">
							please fill with name
						</p> -->
					</div>
					<!-- ml-2 -->
					<div class="formAlignment ">
						<label>Brand</label>
						<select id="brand" class="px-4 py-4  rounded border border-skyBlue mb-4" v-model="productBrand">
							<option value="100" v-for="b in brands" v-bind:key="b.id">{{ b.name }}</option>
							<!-- <option   value="200">Ferrari</option>
							<option   value="300">Lamborghini</option>
							<option   value="400">Maserati</option>
							<option   value="500">Porsche</option>
							<option   value="600">Rolls Royce</option> -->
						</select>
						<span v-if="errors" class="text-xl text-red-600 ">{{ errors.productBrand }}</span>
						<!-- <p class="text-xl text-red-600 ">please fill with price{{ productBrand }}</p> -->
					</div>
				</div>
				<div class="grid grid-cols-3 gap-4">
					<div class="formAlignment ">
						<label>Release Date</label>
						<input
							type="date"
							id="releaseDate"
							placeholder="MM//DD//YYYY"
							class="px-4 py-4 mb-4 rounded-md"
							v-model="releaseDate"
						/>
						<div v-if="errors" class="text-xl text-red-600 ">
							{{ errors.releaseDate }}
						</div>
					</div>
					<div class="formAlignment">
						<label>Price</label>
						<input
							type="text"
							id="price"
							placeholder="USD $ "
							class="px-4 py-4  rounded-md mb-4 "
							v-model="productPrice"
						/>
						<span v-if="errors" class="text-xl text-red-600  ">{{ errors.productPrice }}</span>
					</div>
					<div class="formAlignment">
						<label>Warranty</label>
						<select id="warranty" class="px-4 py-4  rounded border border-skyBlue mb-4" v-model="warrantyYear">
							<option> 1 </option>
							<option> 2 </option>
							<option> 3 </option>
							<option> 4 </option>
							<option> 5 </option>
						</select>
						<span v-if="errors" class="text-xl text-red-600 ">{{ errors.warrantyYear }}</span>
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
					<span v-if="errors" class="text-2xl text-red-600 mt-4 ">
						{{ errors.productDescription }}
					</span>
				</div>
				<div class="mb-5">
					<label class="mr-5">Colors </label>
					<span v-for="c in colorsArray" v-bind:key="c.id" class="flex-row">
						<input type="checkbox" v-model="productColor" :id="c.name" :value="c" />
						<span class="colorSpan" :class="c.value" />
					</span>
					<span v-if="isProductColorEmpty" class="text-xl text-red-600 "> Color&#40; s &#41; need to be choose </span>
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
				<span class="bg-green-200 "
					>{{ productColor }}, {{ productName }},{{ productBrand }},{{ releaseDate }},{{ productPrice }},{{
						warrantyYear
					}},{{ productDescription }}
				</span>
			</div>
		</form>
	</div>
</template>

<script>
const constraints = {
	productName: {
		presence: {
			message: "is required",
		},
	},
	productBrand: {
		presence: {
			message: "is required",
		},
	},
	releaseDate: {
		presence: {
			message: "is required",
		},
	},
	productPrice: {
		presence: {
			message: "is required",
		},
		numericality: {
			lessThan: 99999,
			greaterThan: 0,
		},
	},
	warrantyYear: {
		presence: {
			message: "is required",
		},
	},
	productDescription: {
		presence: {
			message: "is required",
		},
		length: {
			maximum: 300,
			minimum: 10,
			message: "Test length",
		},
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
			brands: [
				{
					id: 100,
					name: "Audi",
				},
				{
					id: 200,
					name: "Ferrari",
				},
				{
					id: 300,
					name: "Lamborghini",
				},
				{
					id: 400,
					name: "Maserati",
				},
				{
					id: 500,
					name: "Porsche",
				},
				{
					id: 600,
					name: "Rolls Royce",
				},
			],
			productName: this.name,
			productBrand: this.brand,
			releaseDate: this.date,
			productPrice: this.price,
			warrantyYear: this.warranty,
			productDescription: this.description,
			productColor: [],
			checkboxColorChecked: [],
			isProductColorEmpty: false,
			// productImg: this.imgSrc,
			errors: [],
		};
	},

	methods: {
		closeCurrentForm() {
			this.$emit("close", true);
		},
		checkForm() {
			var validate = require("validate.js");
			// validate({}, { productBrand: { inclusion: this.brands } });
			this.errors = validate(
				{
					productName: this.productName,
					productBrand: this.productBrand,
					releaseDate: this.releaseDate,
					productPrice: this.productPrice,
					warrantyYear: this.warrantyYear,
					productDescription: this.productDescription,
					// productColor: { productColor: [] },
					// productColor: this.productColor,
				},
				constraints
			);
			this.isProductColorEmpty = this.productColor.length === 0 ? true : false;
			if (this.errors) {
				console.log(this.errors);
			} else {
				this.closeCurrentForm();
				// this.saveProductInfo();
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
				warranty: this.warrantyYear,
				description: this.productDescription,
				colors: this.productColor,
				// imgSrc: this.productImg,
			};
			this.$emit("save-product", products);
		},
		checkedProductColors() {
			this.checkboxColorChecked = [...this.productColor];
			this.checkboxColorChecked.foreach(function(i) {
				i.toggleCheck = true;
			});
		},
		// checkIfProductColorEmpty() {
		// 	this.isProductColorEmpty = JSON.stringify(this.productColor) === "{}";
		// },
	},
};
</script>
