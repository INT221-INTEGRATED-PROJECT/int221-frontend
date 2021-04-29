<template>
	<div class="mr-auto ml-auto  h-screen w-3/4">
		<form>
			<div class="container w-4/5 p-8 mx-auto mt-10 rounded-lg">
				<div class="grid grid-cols-2 gap-4">
					<div class="formAlignment">
						<label>Car Name</label>
						<input type="text" id="pdName" placeholder="Car Name" class="px-4 py-4 mb-4 rounded-md text-gray-500" />
					</div>
					<!-- ml-2 -->
					<div class="formAlignment">
						<label>Brand</label>
						<select id="brand" class="px-4 py-4  rounded border border-skyBlue">
							<option value="audi">Audi</option>
							<option value="ferrari">Ferrari</option>
							<option value="lamborghini">Lamborghini</option>
							<option value="maserati">Maserati</option>
							<option value="porsche">Porsche</option>
							<option value="rollsroyce">Rolls Royce</option>
						</select>
					</div>
				</div>
				<div class="grid grid-cols-3 gap-4">
					<div class="formAlignment">
						<label>Release Date</label>
						<input type="date" id="releaseDate" placeholder="MM//DD//YYYY" class="px-4 py-4 mb-4 rounded-md" />
					</div>
					<div class="formAlignment">
						<label>Price</label>
						<input type="text" id="price" placeholder="USD $ " class="px-4 py-4  rounded-md" />
					</div>
					<div id="warranty" class="formAlignment">
						<label>Warranty</label>
						<select id="warranty" class="px-4 py-4  rounded border border-skyBlue">
							<option value="1">1 Year</option>
							<option value="2">2 Year</option>
							<option value="3">3 Year</option>
							<option value="4">4 Year</option>
							<option value="5">5 Year</option>
						</select>
					</div>
				</div>
				<div id="cardescript" class="formAlignment">
					<label>Car Description</label>
					<textarea rows="3" cols="5" id="carDes" class="p-9  rounded-md  border border-skyBlue" />
				</div>
				<div class="mb-5">
					<label class="mr-5">Colors </label>
					<input type="checkbox" id="colorPick" name="yellow" value="yellow" />
					<span class="colorSpan bg-yellowc" />
					<input type="checkbox" id="colorPick" name="red" value="red" />
					<span class="colorSpan bg-redc" />
					<input type="checkbox" id="colorPick" name="blue" value="blue" />
					<span class=" colorSpan bg-bluec" />
					<input type="checkbox" id="colorPick" name="green" value="green" />
					<span class=" colorSpan bg-greenc" />
					<input type="checkbox" id="colorPick" name="black" value="black" />
					<span class=" colorSpan bg-black" />
					<input type="checkbox" id="colorPick" name="white" value="white" />
					<span class=" colorSpan bg-white border-black" />
				</div>
				<label>Upload Image </label>
				<input id="file-input" type="file" class="border border-white" />
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
