<template>
	<div class="mr-auto ml-auto bg-blue-200 h-screen w-3/4">
		<form>
			<div class="container w-4/5 p-8 mx-auto mt-10 rounded-lg">
				<div id="twoPara" class="grid grid-cols-2 gap-4">
					<div class="formAlignment">
						<label class="leading-7">Car Name</label>
						<input type="text" id="pdName" placeholder="car name" class="px-4 py-4 mb-4 rounded-md text-gray-500" />
					</div>
					<!-- ml-2 -->
					<div class="formAlignment">
						<label class="leading-7">Brand</label>
						<select id="brand" class="px-4 py-4  rounded">
							<option value="audi">Audi</option>
							<option value="ferrari">Ferrari</option>
							<option value="lamborghini">Lamborghini</option>
							<option value="maserati">Maserati</option>
							<option value="porsche">Porsche</option>
							<option value="rollsroyce">Rolls Royce</option>
						</select>
					</div>
					<div class="formAlignment">
						<label class="leading-7">Release Date</label>
						<input type="date" id="releaseDate" placeholder="mm//dd//yyyy" class="px-4 py-4 mb-4 rounded-md" />
					</div>
					<div class="formAlignment">
						<label class="leading-7">Price</label>
						<input type="text" id="price" placeholder="USD $ " class="px-4 py-4  rounded-md" />
					</div>
				</div>
				<div id="cardescript" class="formAlignment">
					<label class="leading-7">Car Description</label>
					<textarea rows="5" cols="5" id="carDes" class="p-9  rounded-md " />
				</div>
				<div>
					<label class="leading-7">Image and Color</label>
					<!-- <UploadImages class="mb-10" /> -->
				</div>

				<div id="warranty">
					<span class="leading-7">Warranty</span>
					<div class="mb-1 mt-1">
						<input type="radio" id="1year" value="1year" />
						<span class="leading-7 ml-4">1year</span>
					</div>
					<div class="mb-1">
						<input type="radio" id="2year" value="2year" />
						<span class="leading-7 ml-4">2year</span>
					</div>
					<div class="mb-1">
						<input type="radio" id="3year" value="3year" />
						<span class="leading-7 ml-4">3year</span>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
// @ is an alias to /src
//import UploadImages from '@/components/UploadImages.vue';
export default {
	name: "BaseForm",
};
</script>
