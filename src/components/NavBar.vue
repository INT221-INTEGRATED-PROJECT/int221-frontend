<template>
	<div class="navbar">
		<!-- <router-link to="/">Home</router-link> -->
		<ul class="list-none m-0  overflow-hidden">
			<li class="float-left">
				<router-link to="/" class="block pt-2"> <img src="@/assets/BRlogo.png" class="h-14 float-left"/></router-link>
			</li>
			<li class="float-left ">
				<router-link to="/" class="block text-center pr-5 py-6 font-playfairdisplay font-semibold">LUXURY CAR</router-link>
			</li>
			<li class="float-right"><router-link to="/team" class="block text-center px-5 py-6 font-normal ">Team</router-link></li>
			<li class="float-right "><router-link to="/viewproducts" class="block text-center px-5 py-6  font-normal ">Products</router-link></li>
		</ul>
	</div>
	<router-view />
</template>
<script>
export default {
	name: "NavBar",
};
</script>
