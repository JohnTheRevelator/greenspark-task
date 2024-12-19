<template>
  <div class="gs-widget-settings">
    <GsProductWidget
      :id="widget.id"
      :activity="widget.action"
      :impact="widget.amount"
      :impactUnit="widget.impactUnit"
      :type="widget.type"
      :typeUnit="widget.typeUnit"
      :color="widget.selectedColor"
    />
    <GsCheckbox
      v-model="widget.linked"
      type="checkbox"
      name="linkProfile"
      label="Link to Public Profile"
      @update:modelValue="mainStore.setWidgetProperty(widget.id, 'linked', $event)"
    >
      <template #tooltip>
        <GsTooltip
          :tooltip="{
            text: tooltipText,
            link: tooltipLink,
          }"
        />
      </template>
    </GsCheckbox>
    <GsRadio
      v-model="widget.selectedColor"
      name="color"
      label="Badge colour"
      :values="widgetColors"
      @update:modelValue="mainStore.setWidgetProperty(widget.id, 'selectedColor', $event)"
    />
    <GsCheckbox
      v-model="widget.active"
      type="switch"
      name="activateBadge"
      label="Activate badge"
      @update:modelValue="mainStore.setActiveWidget(widget.id)"
    />
  </div>
</template>

<script setup lang="ts">
  import { useMainStore } from '@/stores'

  import type { ProductWidgetSchema } from '@/components/types'
  import GsCheckbox from '@/components/inputs/GsCheckbox.vue'
  import GsTooltip from '@/components/GsTooltip.vue'
  import GsRadio from '@/components/inputs/GsRadio.vue'
  import GsProductWidget from '@/components/GsProductWidget.vue'

  const mainStore = useMainStore()
  const widgetColors = mainStore.getWidgetColors.map((color) => ({
    value: color,
  }))

  interface GsProductWidgetSettingsProps {
    tooltipText: string
    tooltipLink: {
      href: string
      target: string
      rel: string
      text: string
    }
    widget: ProductWidgetSchema
  }

  defineProps<GsProductWidgetSettingsProps>()
</script>

<style scoped>
  @import '@assets/variables.css';

  .gs-widget-settings {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;

    @media screen and (max-width: 565px) {
      gap: 0.625rem;
    }
  }
</style>
