<template>
	<div class="mr-auto ml-auto  h-screen w-3/4">
		<form @submit.prevent="checkForm">
			<div class="container w-4/5 p-8 mx-auto  rounded-lg">
				<div class="grid grid-cols-2 gap-4">
					<div class="formAlignment">
						<label>Car Name</label>
						<input
							type="text"
							v-model="productName"
							placeholder="Car Name"
							class="px-4 py-4 mb-4 rounded-md text-gray-500"
						/>
						<span v-if="errors" class="text-xl text-red-600 ">
							{{ errors.productName }}
						</span>
						<!-- <p class="text-xl text-red-600 ">
							please fill with name
						</p> -->
					</div>
					<!-- ml-2      -->
					<div class="formAlignment ">
						<label>Brand</label>
						<select class="px-4 py-4  rounded border border-skyBlue mb-4 text-lg" v-model="productBrand">
							<option v-for="b in brandsArray" :value="b" :key="b.brandId">{{ b.brandName }}</option>
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
						<input type="date" placeholder="MM//DD//YYYY" class="px-4 py-4 mb-4 rounded-md" v-model="releaseDate" />
						<div v-if="errors" class="text-xl text-red-600 ">
							{{ errors.releaseDate }}
						</div>
					</div>
					<div class="formAlignment">
						<label>Price</label>
						<input type="text" placeholder="USD $ " class="px-4 py-4  rounded-md mb-4 " v-model="productPrice" />
						<span v-if="errors" class="text-xl text-red-600  ">{{ errors.productPrice }}</span>
					</div>
					<div class="formAlignment">
						<label>Warranty</label>
						<select class="px-4 py-4  rounded border border-skyBlue mb-4" v-model="warrantyYear">
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
					<textarea rows="2" cols="3" class="p-7  rounded-md  border border-skyBlue" v-model="productDescription" />
					<span v-if="errors" class="text-2xl text-red-600 mt-4 ">
						{{ errors.productDescription }}
					</span>
				</div>
				<!-- :style="{ backgroundColor: c.hexCode }" -->
				<div class="mb-5">
					<label class="mr-5">Colors </label>
					<span v-for="c in colorsArray" v-bind:key="c.id" class="flex-row">
						<input type="checkbox" v-model="productColor" :value="c" true-value="yes" false-value="no" />
						<span class="colorSpan" :style="{ backgroundColor: c.hexCode }" />
					</span>
					<span v-if="isProductColorEmpty" class="text-xl text-red-600 "> Color&#40;s&#41; need to be choosen </span>
				</div>
				<label>Upload Image </label>
				<input type="file" class="border border-white" @change="handleFileUpload" />
				<span v-if="errors" class="text-2xl text-red-600 mt-4 ">
					{{ errors.productImg }}
				</span>
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
					}},{{ productDescription }}, {{ productImg }} ,
				</span>
			</div>
		</form>
	</div>
</template>

<script>
// import Store from "@/store/store.js";
import axios from "axios";
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
			lessThan: 99999999999,
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
			message: "must contain at least 10 charaters",
		},
	},
	productImg: {
		presence: {
			message: "is required",
		},
	},
};

export default {
	name: "BaseForm",
	props: {
		name: String,
		brand: Object,
		date: Date,
		price: Number,
		warranty: Number,
		description: String,
		color: Array,
		imgSrc: String,
		imgFile: File,
	},
	emits: ["save-product", "close"],
	//"save-product-color"
	data() {
		return {
			brandsArray: [],
			colorsArray: [],
			url: "http://52.163.127.86/backend",
			productName: this.name,
			productBrand: this.brand,
			releaseDate: this.date,
			productPrice: this.price,
			warrantyYear: this.warranty,
			productDescription: this.description,
			productImg: this.imgSrc,
			selectedFile: null,
			productColor: [],
			checkboxColorChecked: [],
			isProductColorEmpty: false,
			errors: [],
		};
	},

	methods: {
		handleFileUpload(e) {
			this.selectedFile = e.target.files[0];
			this.productImg = this.selectedFile.name;
		},
		closeCurrentForm() {
			this.$emit("close", true);
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
					productImg: this.productImg,
				},
				constraints
			);
			this.isProductColorEmpty = this.productColor.length === 0 ? true : false;
			if (this.errors) {
				console.log(this.errors);
			} else {
				this.saveProductInfo();
				this.closeCurrentForm();
				alert("Add new product success");
				location.reload();
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
				color: this.productColor,
				imgSrc: this.productImg,
			};
			this.$emit("save-product", products, this.selectedFile);
		},
		checkedProductColors(productColor) {
			this.checkboxColorChecked = [...productColor];
			this.checkboxColorChecked.foreach(function(i) {
				// i.toggleCheck = true;
				i.push({ toggleCheck: true });
			});
		},
	},
	async created() {
		try {
			const resB = await axios.get(this.url + `/brands/view`);
			const resC = await axios.get(this.url + `/colors/view`);
			this.colorsArray = resC.data;
			this.brandsArray = resB.data;
		} catch (e) {
			console.error(e);
		}
	},
};
</script>
