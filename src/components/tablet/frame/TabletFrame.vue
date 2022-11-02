<script setup lang="ts">
import Inside from './Inside.vue';
import Outside from './Outside.vue';
import Between from './Between.vue';
</script>

<template>
	<Outside>
		<Between msg="Test">
			<Inside>
				<slot></slot>
			</Inside>
		</Between>
	</Outside>
</template>