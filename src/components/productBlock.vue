<template>
	<div class="grid grid-flow-col border border-greyBorderc rounded-md w-5/6 h-96  ml-auto mr-auto">
		<div class="space-y-4 my-10 ml-auto mr-auto w-40">
			<div class="w-36 ml-10 pt-14 clear-right">
				<button
					class="text-deepBlue bg-white px-3 py-1 mt-1 border border-deepBlue w-28 h-14 font-medium text-lg rounded-md"
					@click="editButtonClick"
				>
					Edit
				</button>
			</div>
			<div class="w-36 ml-10 clear-right">
				<button
					class="text-white bg-deepBlue px-3 py-1 mt-1 w-28 h-14 font-medium text-lg rounded-md"
					@click="deleteButtonClick"
				>
					Delete
				</button>
			</div>
		</div>
		<div class="font-medium text-xl text-deepBlue mt-10 mb-auto ml-16">
			<p class="text-center">
				name: {{ productName }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; brand : {{ productBrand }}
			</p>
			<p>Description :</p>
			<span class="font-normal"> {{ productDescription }} <br /></span>
			<p>Manufacturer Date :</p>
			<span class="font-normal">{{ releaseDate }}</span>
			<p>Price :</p>
			<span class="font-normal">{{ productPrice }}</span>
			<p>Warranty :</p>
			<span class="font-normal"> {{ productWarranty }}</span>
			<p>Colors:</p>
			<span class="font-normal" v-for="p in productColor" :key="p.colorCode"
				>{{ p.colorCode }} : {{ p.hexCode }} ,</span
			>
		</div>
		<div class="grid grid-rows-2 grid-flow-row">
			<!-- <img class="w-4/5 ml-auto mr-auto mt-20" :src="require(productImg)" /> -->
			<div class="inline-flex items-center space-x-6  ml-auto mr-auto mb-48">
				<div v-for="p in productColor" :key="p.colorCode">
					<span class="colorSpan" :style="{ backgroundColor: p.hexCode }"></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "ProductBlock",
	// "productImg","productColor"
	emits: ["edit-click", "delete-click"],
	props: [
		"productName",
		"productBrand",
		"releaseDate",
		"productPrice",
		"productWarranty",
		"productDescription",
		"productColor",
		"productImg",
	],
	methods: {
		deleteButtonClick() {
			location.reload();
			this.$emit("delete-click", true);
		},
		editButtonClick() {
			this.$emit("edit-click", true);
		},
	},
};
</script>
