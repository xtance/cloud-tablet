<script setup lang="ts">
import TabletFrame from '@/components/tablet/frame/TabletFrame.vue';
import LeftSide from '@/components/tablet/left/LeftSide.vue';
import Logo from '@/components/tablet/left/Logo.vue';
import Tabs from '@/components/tablet/left/Tabs.vue';
import RightSide from '@/components/tablet/right/RightSide.vue';
import Statusbar from '@/components/tablet/statusbar/Statusbar.vue';
</script>

<template>
	<TabletFrame>
		<Statusbar />
		<LeftSide>
			<Logo />
			<Tabs />
		</LeftSide>
		<RightSide />
	</TabletFrame>
</template>
