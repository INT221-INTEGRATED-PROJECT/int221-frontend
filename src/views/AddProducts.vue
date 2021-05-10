<template>
	<!-- <h1 class="text-7xl">This is ADD PRODUCTS view</h1> -->
	<HeadBar />
	<BaseForm @save-product="addNewProduct"></BaseForm>
</template>
<script>
import HeadBar from "@/components/HeadBar.vue";
import BaseForm from "@/components/BaseForm.vue";
import axios from "axios";
export default {
	// props:["add"]
	components: { HeadBar, BaseForm },
	data() {
		return {
			url: "http://localhost:3000/products",
			products: [],
			selectedFile: null,
		};
	},
	methods: {
		async addNewProduct(newProduct) {
			const products = {
				name: newProduct.name,
				brand: newProduct.brand,
				date: newProduct.date,
				price: newProduct.price,
				warranty: newProduct.warranty,
				description: newProduct.description,
				color: newProduct.color,
				imgSrc: newProduct.imgSrc,
			};

			const formData = new FormData();
			formData.append("file", this.selectedFile);
			await axios.post(this.url, products);
			await axios.post(this.url, formData);
			// this.products = responseP.data;
			// this.selectedFile = response.data;
		},
	},
};
</script>
