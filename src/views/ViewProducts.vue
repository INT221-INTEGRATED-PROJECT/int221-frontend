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
		<input id="search" type="text" class="px-4 border border-deepBlue border-l-0 w-auto focus:outline-none" />
		<button id="search-button" class="searchButton">
			Search
		</button>
		<h1>Test</h1>
	</div>
	<!-- <div class="bg-orangec mr-auto ml-auto h-12 mt-7  grid grid-rows-2">
		<div class="bg-skyBlue"></div>
	</div> -->

	<BrandBlock></BrandBlock>
	<div class="h-screen w-3/4 bg-yellow-500 ml-auto mr-auto ">
		<ProductBlock></ProductBlock>
	</div>
</template>
<script>
// props: ["name", "brand", "date", "price", "warranty", "description"],
import BrandBlock from "@/components/BrandBlock.vue";
import HeadBar from "@/components/HeadBar.vue";
import ProductBlock from "@/components/ProductBlock.vue";
export default {
	components: {
		BrandBlock,
		HeadBar,
		ProductBlock,
	},
};
</script>
