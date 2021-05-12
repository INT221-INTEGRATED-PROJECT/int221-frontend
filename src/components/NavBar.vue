<template>
	<!-- <div class="navbar">
		<router-link to="/">Home</router-link> 
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
	</div>-->
	<div class="navbar">
		<nav class="sm:flex sm:items-center sm:justify-between bg-deepBlue sm:m-0 overflow-hidden">
			<router-link to="/" class="block">
				<img src="@/assets/BRlogo2.png" class="h-14 float-left" />
			</router-link>
			<div class="flex items-end">
				<span
					class="hidden sm:inline-block sm:hover:bg-white sm:hover:text-deepBlue sm:px-3 sm:py-3 sm:border-b-2 border-blue-900 sm:border-none"
				>
					<router-link to="/viewproducts" class="block text-center px-5 py-4 p-4 font-normal">Products</router-link>
				</span>
				<span
					class="hidden sm:inline-block sm:hover:bg-white sm:hover:text-deepBlue sm:px-3 sm:py-3 sm:border-b-2 border-blue-900 sm:border-none"
				>
					<router-link to="/team" class="block text-center px-5 py-4 font-normal">Team</router-link>
				</span>
			</div>
			<div class="flex sm:hidden justify-end pt-4">
				<button id="hamburger">
					<img
						class="block"
						src="https://img.icons8.com/material/24/ffffff/menu--v4.png"
						@click="navBarRes"
					/>
				</button>
			</div>
			<div
				id="nav-links"
				class="toggle justify-center sm:hidden w-full sm:w-auto text-right text-bold mt-5 sm:mt-0  sm:border-none"
			>
				<router-link
					to="/viewproducts"
					class="block text-white px-3 py-3 border-b-2 sm:border-none"
				>Products</router-link>
				<router-link to="/team" class="block text-white px-3 py-3 sm:border-none">Team</router-link>
			</div>
		</nav>
	</div>
	<router-view />
</template>
<script>
export default {
	name: "NavBar",
	methods: {
		navBarRes() {
			document.getElementById("hamburger").onclick = function toggleMenu() {
				const navToggle = document.getElementsByClassName("toggle");
				for (let i = 0; i < navToggle.length; i++) {
					navToggle.item(i).classList.toggle("hidden");
				}
			}	
		}	
}
};
</script>
