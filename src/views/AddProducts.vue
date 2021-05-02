<template>
	<!-- <h1 class="text-7xl">This is ADD PRODUCTS view</h1> -->
	<HeadBar @save-product="addNewProduct" />
	<BaseForm />
</template>
<script>
import HeadBar from "@/components/HeadBar.vue";
import BaseForm from "@/components/BaseForm.vue";
export default {
	components: { HeadBar, BaseForm },
	data() {
		return {
			productUrl: "http://localhost:3000/products",
		};
	},
};
</script>
