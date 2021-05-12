<template>
	<div class="sm:mr-auto sm:ml-auto  sm:h-screen sm:w-3/4">
		<form @submit.prevent="checkForm">
			<div class="container sm:w-4/5 sm:p-8 p-20 mx-auto  rounded-lg">
				<div class="grid grid-cols-2 gap-4">
					<div class="formAlignment">
						<label class="text-deepBlue sm:text-2xl text-xl ">Car Name</label>
						<input
							type="text"
							v-model="inputName"
							placeholder="Car Name"
							class="px-4 py-4 mb-4 rounded-md text-gray-500"
						/>
						<span v-if="errors" class="text-xl text-red-600 ">
							{{ errors.inputName }}
						</span>
						<!-- <p class="text-xl text-red-600 ">
							please fill with name
						</p> -->
					</div>
					<!-- ml-2      -->
					<div class="formAlignment ">
						<label class="text-deepBlue sm:text-2xl text-xl">Brand</label>
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
						<label class="text-deepBlue sm:text-2xl text-xl">Release Date</label>
						<input type="date" placeholder="MM//DD//YYYY" class="px-4 py-4 mb-4 rounded-md" v-model="inputDate" />
						<div v-if="errors" class="text-xl text-red-600 ">
							{{ errors.inputDate }}
						</div>
					</div>
					<div class="formAlignment">
						<label class="text-deepBlue sm:text-2xl text-xl">Price</label>
						<input type="text" placeholder="USD $ " class="px-4 py-4  rounded-md mb-4 " v-model="inputPrice" />
						<span v-if="errors" class="text-xl text-red-600  ">{{ errors.inputPrice }}</span>
					</div>
					<div class="formAlignment">
						<label class="text-deepBlue sm:text-2xl text-xl">Warranty</label>
						<select class="px-4 py-4  rounded border border-skyBlue mb-4" v-model="inputWarranty">
							<option> 1 </option>
							<option> 2 </option>
							<option> 3 </option>
							<option> 4 </option>
							<option> 5 </option>
						</select>
						<span v-if="errors" class="text-xl text-red-600 ">{{ errors.inputWarranty }}</span>
					</div>
				</div>
				<div id="cardescript" class="formAlignment">
					<label class="text-deepBlue sm:text-2xl text-xl">Car Description</label>
					<textarea rows="2" cols="3" class="p-7  rounded-md  border border-skyBlue h-40" v-model="inputDescription" />
					<span v-if="errors" class="text-2xl text-red-600 mt-4 ">
						{{ errors.inputDescription }}
					</span>
				</div>
				<!-- :style="{ backgroundColor: c.hexCode }" -->
				<div class="mb-5">
					<label class="sm:mr-5 text-deepBlue sm:text-2xl text-xl">Colors </label>
					<span v-for="c in colorsArray" v-bind:key="c.colorCode" class="flex-row">
						<input type="checkbox" v-model="inputColor" :value="c" true-value="yes" false-value="no" />
						<span class="colorSpan" :style="{ backgroundColor: c.hexCode }" />
					</span>
					<span v-if="isProductColorEmpty" class="text-xl text-red-600 "> Color&#40;s&#41; need to be choosen </span>
				</div>
				<label class="text-deepBlue sm:text-2xl text-xl">Upload Image </label>
				<input type="file" class="border border-white" @change="handleFileUpload" accept="image/png" />
				<span v-if="errors" class="text-2xl text-red-600 mt-4">
					{{ errors.inputImg }}
				</span>
				<div class="mt-20">
					<button type="reset" class="btn  text-deepBlue bg-white float-right ml-5" @click="closeCurrentForm">
						cancel
					</button>
					<button type="submit" class="btn  text-white bg-deepBlue float-left ml-5 sm:float-right">
						submit
					</button>
				</div>
				<!-- <span class="bg-green-200 "
					>{{ inputColor }}, {{ inputName }},{{ productBrand }},{{ inputDate }},{{ inputPrice }},{{ inputWarranty }},{{
						inputDescription
					}}, {{ inputImg }} ,
				</span> -->
			</div>
		</form>
	</div>
</template>

<script>
// import Store from "@/store/store.js";
import axios from "axios";
const constraints = {
	inputName: {
		presence: {
			message: "is required",
		},
	},
	productBrand: {
		presence: {
			message: "is required",
		},
	},
	inputDate: {
		presence: {
			message: "is required",
		},
	},
	inputPrice: {
		presence: {
			message: "is required",
		},
		numericality: {
			lessThan: 99999999999,
			greaterThan: 0,
		},
	},
	inputWarranty: {
		presence: {
			message: "is required",
		},
	},
	inputDescription: {
		presence: {
			message: "is required",
		},
		length: {
			maximum: 400,
			minimum: 10,
			message: "must contain at least 10 charaters",
		},
	},
	inputImg: {
		presence: {
			message: "is required",
		},
	},
};

export default {
	name: "BaseForm",
	props: {
		productName: String,
		brandId: Object,
		releaseDate: Date,
		price: Number,
		warranty: Number,
		description: String,
		colors: Array,
		image: String,
		imgFile: File,
	},
	emits: ["save-product", "close"],
	//"save-product-color"
	data() {
		return {
			brandsArray: [],
			colorsArray: [],
			url: "http://52.163.127.86/backend",
			inputName: this.productName,
			productBrand: this.brandId,
			inputDate: this.releaseDate,
			inputPrice: this.price,
			inputWarranty: this.warranty,
			inputDescription: this.description,
			inputImg: this.image,
			selectedFile: null,
			inputColor: [],
			checkboxColorChecked: [],
			isProductColorEmpty: false,
			errors: [],
		};
	},

	methods: {
		handleFileUpload(e) {
			this.selectedFile = e.target.files[0];
			this.inputImg = this.selectedFile.name;
		},
		closeCurrentForm() {
			this.$emit("close", true);
		},
		checkForm() {
			var validate = require("validate.js");
			this.errors = validate(
				{
					inputName: this.inputName,
					productBrand: this.productBrand,
					inputDate: this.inputDate,
					inputPrice: this.inputPrice,
					inputWarranty: this.inputWarranty,
					inputDescription: this.inputDescription,
					inputImg: this.inputImg,
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
				productName: this.inputName,
				brandId: this.productBrand,
				releaseDate: this.inputDate,
				price: this.inputPrice,
				warranty: this.inputWarranty,
				description: this.inputDescription,
				colors: this.inputColor,
				image: this.inputImg,
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
