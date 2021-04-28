<template>
	<div id="headBar" class="grid grid-flow-col justify justify-self-center mt-5">
		<a href="#home" class="headerbar justify justify-self-end mr-auto">View Products</a>
		<a href="#news" class="headerbar">Add Product</a>
	</div>
	<div id="searchBar" class="grid grid-flow-col justify justify-self-center w-full mt-5">
		<div class="justify justify-self-end border border-deepBlue border-r-0 px-2 py-2 rounded-md rounded-r-none">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#13315C">
				<path
					d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
				/>
			</svg>
		</div>
		<input id="search" type="text" class="px-4 border border-deepBlue border-l-0 w-auto focus:outline-none" />
		<button
			id="search-button"
			class="w-24 justify justify-self-start h-auto text-deepBlue border border-deepBlue border-l-0 rounded-md rounded-l-none focus:outline-none"
		>
			Search
		</button>
	</div>
	<div class="border border-greyc rounded-md w-5/6 h-96 mt-16 ml-auto mr-auto">
		<!-- <div class="grid grid-rows-2 space-y-4 justify mt-20 ml-10 w-40"> -->
		<!-- <div class="w-36 ml-10 mt-20 clear-right"> 
				<button class="text-deepBlue bg-white px-3 py-1 mt-1 border border-deepBlue w-36 h-14 font-medium text-xl rounded-md">Edit</button>
			</div>
            <div class="w-36 ml-10 clear-right">
				<button class="text-white bg-deepBlue px-3 py-1 mt-1 w-36 h-14 font-medium text-xl rounded-md">Delete</button>
			</div> -->
		<!-- </div> -->
		<img class="w-2/4 ml-auto mr-10 mt-10" src="../assets/Ferrari-812-Superfast.png" />
		<div></div>
	</div>
</template>
