<template>
	<!-- <div class="h-auto">
		<img src="../assets/car1.jpg" class="w-screen bg-center bg-cover " />
		<img src="../assets/car2.jpg" class="w-screen bg-center bg-cover " />
	</div>
	<div class="bg-blue-400 h-60 px-14">
		<div class="bg-red-400 h-44 "></div>
	</div> -->
	<div class="m-6   flex flex-row space-x-4 justify-center bg-blue-500">
		<div v-for="b in brandCars" :key="b.brand" class="flex flex-row">
			<div class="baseBrandBlock">
				<div class="row-span-3   px-4">
					<img :src="b.imgSrc" class="w-3/5" />
				</div>
				<h1>{{ b.brand }}</h1>
			</div>
		</div>
	</div>
	<!-- <img src="@/assets/logo/audi_logo.png" />
	<div></div> -->
</template>

<script>
// @ is an alias to /src

export default {
	name: "Home",
	data() {
		return {
			// message: "Test",
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
