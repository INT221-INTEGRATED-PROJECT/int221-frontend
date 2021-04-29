<template>
	<div class="grid grid-flow-col border border-greyBorderc rounded-md w-5/6 h-96 mt-16 ml-auto mr-auto">
		<div class="space-y-4 my-10 ml-auto mr-auto w-40">
			<div class="w-36 ml-10 mt-20 clear-right">
				<button
					class="text-deepBlue bg-white px-3 py-1 mt-1 border border-deepBlue w-28 h-14 font-medium text-lg rounded-md"
				>
					Edit
				</button>
			</div>
			<div class="w-36 ml-10 clear-right">
				<button class="text-white bg-deepBlue px-3 py-1 mt-1 w-28 h-14 font-medium text-lg rounded-md">Delete</button>
			</div>
		</div>
		<div class="font-medium text-xl text-deepBlue mt-10 mb-auto ml-16">
			<p class="text-center">911 CARRENA S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PORSCHE</p>
			<p>Description :</p>
			<span class="font-normal">
				331 kW/450 PS Power (kW)/Power (PS) 3.7 s <br />Acceleration 0 - 100 km/h 308 km/hTop speed
			</span>
			<p>Manufacturer Date :</p>
			<span class="font-normal">25/12/2012</span>
			<p>Price :</p>
			<span class="font-normal">$ 405921.75</span>
			<p>Warranty :</p>
			<span class="font-normal">2 y</span>
		</div>
		<div class="grid grid-rows-2 grid-flow-row">
			<img class="w-4/5 ml-auto mr-auto mt-20" src="../assets/Ferrari-812-Superfast.png" />
			<div class="inline-flex items-center space-x-6  ml-auto mr-auto mb-48">
				<div class="border border-gray-600 bg-black rounded-full w-6 h-6"></div>
				<div class="border border-gray-600 bg-white rounded-full w-6 h-6"></div>
				<div class="border border-gray-600 bg-redc rounded-full w-6 h-6"></div>
				<div class="border border-gray-600 bg-orangec rounded-full w-6 h-6"></div>
				<div class="border border-gray-600 bg-yellowc rounded-full w-6 h-6"></div>
				<div class="border border-gray-600 bg-greenc rounded-full w-6 h-6"></div>
				<div class="border border-gray-600 bg-bluec rounded-full w-6 h-6"></div>
				<div class="border border-gray-600 bg-greyc rounded-full w-6 h-6"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "ProductBlock",
};
</script>
