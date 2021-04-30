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
					<div id="warranty" class="formAlignment">
						<label>Warranty</label>
						<select id="warranty" class="px-4 py-4  rounded border border-skyBlue " v-model="warrantyYear">
							<option value="1">1 </option>
							<option value="2">2 </option>
							<option value="3">3 </option>
							<option value="4">4 </option>
							<option value="5">5 </option>
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
				<!--	<div class="mb-5">
					<label class="mr-5">Colors </label>
					<input type="checkbox" id="yellow" name="yellow" value="yellow" v-model="productColor" />
					<span class="colorSpan bg-yellowc" />
					<input type="checkbox" id="red" name="red" value="red" v-model="productColor" />
					<span class="colorSpan bg-redc" />
					<input type="checkbox" id="blue" name="blue" value="blue" v-model="productColor" />
					<span class=" colorSpan bg-bluec" />
					<input type="checkbox" id="green" name="green" value="green" v-model="productColor" />
					<span class=" colorSpan bg-greenc" />
					<input type="checkbox" id="black" name="black" value="black" v-model="productColor" />
					<span class=" colorSpan bg-black" />
					<input type="checkbox" id="white" name="white" value="white" v-model="productColor" />
					<span class=" colorSpan bg-white border-black" />
				</div> -->
				<label>Upload Image </label>
				<!-- <input id="file-input" type="file" class="border border-white" @change="uploadImage" /> -->
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
						@clock="closeCurrentForm"
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
	},
	warrantyYear: {
		presence: true,
	},
	productDescription: {
		presence: true,
	},
	// productColor:{
	// 	presence:true
	// }
};
export default {
	name: "BaseForm",
	// "color","carImgFromDb"
	props: ["name", "brand", "date", "price", "warranty", "description"],
	emits: ["close", "save-product"],
	data() {
		return {
			// productImg:this.carImgFromDb ? this.carImgFromDb : productImg,
			productName: this.name,
			productBrand: this.brand,
			releaseDate: this.date,
			productPrice: this.price,
			warrantyYear: this.warranty,
			productDescription: this.description,
			// productColor:this.color,
			errors: null,
		};
	},
	methods: {
		closeCurrentForm() {
			this.$emit("close", true);
		},
		// uploadImage(e){
		// 	const file = e.target.files[0] || e.dataTransfer.files[0];
		// 	const reader = new FileReader();
		//  	reader.onload = (e) => {
		// 		this.carImg = e.target.result;
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
					// productColor:this.productColor,
				},
				constraints
			);
			if (this.errors) {
				console.log(this.errors);
			} else {
				this.saveProductInfo();
				this.closeCurrentForm();
			}
		},
		saveProductInfo() {
			let product = {
				name: this.productName,
				brand: this.productBrand,
				date: this.releaseDate,
				price: this.productPrice,
				warranty: this.warrantyYear,
				description: this.productDescription,
				// imgSrc:this.productImg
			};
			this.$emit("save-product", product);
		},
	},
};
</script>
