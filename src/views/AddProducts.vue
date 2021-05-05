<template>
	<!-- <h1 class="text-7xl">This is ADD PRODUCTS view</h1> -->
	<HeadBar />
	<BaseForm @save-product="addNewProduct"></BaseForm>
</template>
<script>
import HeadBar from "@/components/HeadBar.vue";
import BaseForm from "@/components/BaseForm.vue";
export default {
	// props:["add"]
	components: { HeadBar, BaseForm },
	data() {
		return {
			url: "http://localhost:3000/products",
			products: [],
		};
	},
	methods: {
		// async fetchProduct() {
		// 	const res = await fetch(this.url);
		// 	const data = await res.json();
		// 	return data;
		// },
		async addNewProduct(newProduct) {
			const res = await fetch(this.url, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					name: newProduct.name,
					brand: newProduct.brand,
					date: newProduct.date,
					price: newProduct.price,
					warranty: newProduct.warranty,
					description: newProduct.description,
					colors: newProduct.colors,
				}),
			});
			const data = await res.json();
			this.products = [...this.products, data];
		},
	},
	// async created() {
	// 	this.products = await this.fetchProduct();
	// 	// this.currentStudent = await this.studentInfo[0];
	// },
};
</script>
