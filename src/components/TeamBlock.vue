<template>
	<div class="text-center">
		<div class="mt-10">
			<span class="text-skyBlue text-4xl font-medium tracking-wide">Meet our team member</span>
		</div>
		
		<div id="team" class="teamblock">
			<div id="member1" class="memberblock">
				<img src="../assets/user1.png" class="teamimage"/>
				<div id="memberDetail" class="grid grid-rows-3">
					<span class="text-white text-xl">62130500089</span>
					<span class="text-white text-xl">Supanan Chotteratat</span>
					<span class="text-white text-lg mb-5">Front-end, Database</span>
				</div>
			</div>

			<div id="member2" class="memberblock">
				<img src="../assets/user2.png" class="teamimage" />
				<div id="memberDetail" class="grid grid-rows-3">
					<span class="text-white text-xl">62130500120</span>
					<span class="text-white text-xl">Qwanjai Deelertpradit</span>
					<span class="text-white text-lg mb-5">Front-end, Back-end, DevOps</span>
				</div>
			</div>

			<div id="member3" class="memberblock">
				<img src="../assets/user3.png" class="teamimage" />
				<div id="memberDetail" class="grid grid-rows-3">
					<span class="text-white text-xl">62130500122</span>
					<span class="text-white text-xl">Chutipa Jatujinda</span>
					<span class="text-white text-lg mb-5">Front-end, Database</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "TeamBlock",
};
</script>
