<template>
	<div class="">
		<img src="../assets/car2.jpg" class="w-screen bg-center bg-cover" />
		<div class="absolute bottom-1/2 left-5  px-5  text-6xl text-white uppercase">
			<h1 class="font-bold ml-12 ">911 turbos</h1>
			<h1>high performance</h1>
		</div>
	</div>
	<div class="px-14 mt-10">
		<div class="  p-5">
			<h2 class="text-3xl font-semibold mb-5">Cayenne Design highlights.</h2>
			<div>
				<img src="@/assets/porsche_cayenne.jpg" class="w-full mb-5" />
			</div>
			<div class="rowAlignment">
				<div v-for="c in caynneDescription" :key="c.title" class="flex flex-row">
					<div class="grid grid-rows-4  shadow-lg border border-gray-400">
						<span class="p-3 text-xl font-semibold">{{ c.title }}</span>
						<span class="row-span-3  px-3 text-lg pb-6 pt-3">
							<p>{{ c.des }}</p></span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
	name: "Home",
	data() {
		return {
			// message: "Test",
			caynneDescription: [
				{
					title: "Unmistakeable Porsche DNA",
					des:
						"All Cayenne  models clearly express their heritage. Thanks to their heavily emphasised front wings, a bonnet withpower domes and characterictic three- part air intakes",
				},
				{
					title: "Design ",
					des:
						"What unites us all is our enthusiasm for the sports car experience. This begins even before we start the engine  with our first glimpse of the dynamic proportions of the Cayenne models, and  reveal their Porsche DNA. ",
				},
				{
					title: "E-Hybrid",
					des:
						"Our Cayenne models demonstrate that: we refer to  e-mobility as E-Performance, because sustainability coupled with driving dynamics,bring a joyful smile to the faces of sports car enthusiasts.",
				},
				{
					title: "Special e-driving modes ",
					des:
						"In our E-Hybrid models, the mode switch and PCM are used to select driving modes specially designed for their drive.You can unlock the full potential of your Cayenne or Cayenne Coupé at all times. ",
				},
			],
		};
	},
};
</script>