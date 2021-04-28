<template>
	<!-- <h1>This is brandblock component</h1> -->
	<div class="m-6 py-5  flex flex-row space-x-4 justify-center h-auto ">
		<div v-for="b in brandCars" :key="b.brand" class="flex flex-row">
			<div class="baseBrandBlock ">
				<div class="row-span-3   px-4  rounded-xl py-4">
					<img :src="b.imgSrc" class="block mr-auto ml-auto w-28 " />
				</div>
				<div class=" rounded-xl ">
					<h1>{{ b.brand }}</h1>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "BrandBlock",
	data() {
		return {
			brandCarSorted: "",
			brandCars: [
				{ brand: "Audi", imgSrc: require("@/assets/logo/audi_logo.png") },
				{ brand: "Ferrari", imgSrc: require("@/assets/logo/ferrari_logo.png") },
				{ brand: "Lamborgini", imgSrc: require("@/assets/logo/lamborghini_logo.png") },
				{ brand: "Maserati", imgSrc: require("@/assets/logo/maserati_logo.png") },
				{ brand: "Posrche", imgSrc: require("@/assets/logo/porsche_logo.png") },
				{ brand: "Rolls Royce", imgSrc: require("@/assets/logo/rollsroyce_logo.png") },
			],
		};
	},
};
</script>
