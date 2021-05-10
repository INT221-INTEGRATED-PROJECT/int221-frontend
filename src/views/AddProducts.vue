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
			url: "http://52.163.127.86/backend",
			productsArray: [],
			selectedFile: null,
		};
	},
	methods: {
		async addNewProduct(newProduct) {
			const products = {
				productName: newProduct.productName,
				brandId: newProduct.brandId,
				releaseDate: newProduct.releaseDate,
				price: newProduct.price,
				warranty: newProduct.warranty,
				description: newProduct.description,
				colors: newProduct.colors,
				image: newProduct.image,
			};
			try {
				let result = await axios.post(`${this.url}/products/add`, products);
				console.log(result.response.data);
			} catch (error) {
				console.error(error.response.data); // NOTE - use "error.response.data` (not "error")
			}
			// const formData = new FormData();
			// formData.append("file", this.selectedFile);
			// await axios.post(`${this.url}/products/add`, products);
			// await axios.post(this.url + `/imgs/add` + products.image, formData);
			// this.products = responseP.data;
			// this.selectedFile = response.data;
		},
	},
};
</script>
