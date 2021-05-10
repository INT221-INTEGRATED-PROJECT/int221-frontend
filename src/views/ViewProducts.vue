<template>
	<HeadBar></HeadBar>
	<div id="searchBar" class="grid grid-flow-col justify justify-self-center w-full mt-5">
		<div class="justify justify-self-end border border-deepBlue border-r-0 px-2 py-2 rounded-md rounded-r-none">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#13315C">
				<path
					d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
				/>
			</svg>
		</div>
		<input
			id="search"
			type="text"
			class="px-4 border border-deepBlue border-l-0 w-auto focus:outline-none"
			v-model="inputSearch"
		/>
		<button id="search-button" class="searchButton">
			Search
		</button>
	</div>
	<!-- <div class="bg-orangec mr-auto ml-auto h-12 mt-7  grid grid-rows-2">
		<div class="bg-skyBlue"></div>
	</div> -->

	<BrandBlock></BrandBlock>
	<div class=" w-full ml-auto mr-auto  mb-10" v-for="p in productsArray" :key="p.productId">
		<ProductBlock
			:productName="p.productName"
			:productBrand="p.brandId"
			:releaseDate="p.releaseDate"
			:productPrice="p.price"
			:productWarranty="p.warranty"
			:productDescription="p.description"
			:productColor="p.colors"
			:productImg="p.image"
			@click="selectedProducts(p)"
			@delete-click="deleteProduct(p.id)"
			@edit-click="openForm"
		/>
		<div class="bg-black inset-x-10 h-auto top-10 absolute z-0" v-if="editClicked">
			<BaseForm
				v-if="editClicked"
				@close="changeEditItemClicked"
				:productName="currentProduct.productName"
				:brandId="currentProduct.brandId"
				:releaseDate="currentProduct.releaseDate"
				:price="currentProduct.price"
				:warranty="currentProduct.warranty"
				:description="currentProduct.description"
				:colors="currentProduct.colors"
				@save-product="editProduct"
				class="border-black border bg-white"
			/>
		</div>
	</div>
</template>
<script>
// props: ["name", "brand", "date", "price", "warranty", "description"],
import BrandBlock from "@/components/BrandBlock.vue";
import HeadBar from "@/components/HeadBar.vue";
import ProductBlock from "@/components/ProductBlock.vue";
import BaseForm from "@/components/BaseForm.vue";
import axios from "axios";
export default {
	components: {
		BrandBlock,
		HeadBar,
		ProductBlock,
		BaseForm,
	},
	data() {
		return {
			url: "http://52.163.127.86/backend",
			productsArray: [],
			inputSearch: "",
			currentProduct: [],
			editClicked: false,
			idPath: "",
		};
	},
	methods: {
		changeEditItemClicked(value) {
			this.editClicked = !value;
		},
		selectedProducts(products) {
			this.currentProduct = products;
			console.log(this.currentProduct.productId);
		},
		async deleteProduct(id) {
			// const res = await fetch(`${this.url}/${id}`, {
			// 	method: "DELETE",
			// });
			// res.status === 200
			// 	? (this.products = this.products.filter((p) => p.id !== id))
			// 	: alert("Error to delete product");
			try {
				return await this.axios.delete(`${this.url}/products/delete/${id}`);
			} catch (e) {
				console.error(e);
				alert("Cannot delete this product");
			}
			this.currentProduct = this.products[this.products.length - 1];
		},
		openForm(value) {
			this.editClicked = value;
		},
		async editProduct(editingProduct) {
			const products = {
				productName: editingProduct.productName,
				brandId: editingProduct.brandId,
				releaseDate: editingProduct.releaseDate,
				price: editingProduct.price,
				warranty: editingProduct.warranty,
				description: editingProduct.description,
				colors: editingProduct.color,
			};
			try {
				return await this.axios.put(`${this.url}/${this.currentProduct.id}`, products);
			} catch (e) {
				console.error(e);
				alert("Cannot edit this product");
			}
		},
	},
	computed: {
		searchProduct() {
			if (this.inputSearch == "") {
				return this.productsArray.slice().reverse();
			} else {
				let result = this.productsArray.filter((n) => n.name.toLowerCase().includes(this.inputSearch.toLowerCase()));
				if (result == "") {
					return;
				}
				return result;
			}
		},
	},
	async created() {
		try {
			const res = await axios.get(this.url + `/products/view`);
			this.productsArray = res.data;
		} catch (e) {
			console.error(e);
		}
		this.currentProduct = await this.productsArray[0];
	},
};
</script>
