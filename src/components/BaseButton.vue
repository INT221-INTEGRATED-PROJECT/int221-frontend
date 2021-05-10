<template>
	<div>
		<button
			class=" px-3 py-1 mt-1 border border-deepBlue w-36 h-14 font-medium text-xl rounded-md"
			:class="[buttonColor, textColor]"
			:type="buttonType"
		>
			{{ buttonLabel }}
		</button>
	</div>
</template>
<script>
export default {
	props: ["buttonLabel", "buttonColor", "textColor", "buttonType"],
};
</script>
