<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<!--<header>
		<nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
	</header>-->
	<main class="
		fixed w-screen h-screen bg-[#202020]
		flex justify-center items-center
	">
		<RouterView />
	</main>
</template>