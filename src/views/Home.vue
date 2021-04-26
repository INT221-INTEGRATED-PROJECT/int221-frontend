<template>
	<!-- <div class="h-auto">
		<img src="../assets/car1.jpg" class="w-screen bg-center bg-cover " />
		<img src="../assets/car2.jpg" class="w-screen bg-center bg-cover " />
	</div>
	<div class="bg-blue-400 h-60 px-14">
		<div class="bg-red-400 h-44 "></div>
	</div> -->
	<!-- <div class="baseBrandBlock ">
		<div class="row-span-3 pt-12 px-4">
			<img src="@/assets/audi_logo.png" class="w-36" />
		</div>
		<h1>Audi</h1>
	</div> -->
	<!-- <p class="relative mt-9">{{ brandCarSorted }}</p> -->
	<div></div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "Home",
	data() {
		return {
			brandCarSorted: "",
			beandCar: [
				{ brand: "Audi", img: "@/assets/audi_logo.png" },
				{ brand: "Ferrari", img: "@/assets/ferrari_logo.png" },
				{ brand: "Lamborgini", img: "@/assets/lanborgini_logo.png" },
				{ brand: "Maserati", img: "@/assets/maserati_logo.png" },
				{ brand: "Posrche", img: "@/assets/porsche_logo.png" },
				{ brand: "Rolls Royce", img: "@/assets/rollsroyce_logo.png" },
			],
		};
	},
};
</script>
