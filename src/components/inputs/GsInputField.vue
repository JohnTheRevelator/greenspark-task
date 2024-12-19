<template>
  <label class="gs-input-field">
    <span class="gs-input-field-label">
      {{ label }}
      <slot name="tooltip" />
    </span>
    <slot name="default" />
    <input
      v-show="false"
      ref="inputElement"
      :name="name"
      :type="type"
      :value="modelValue || value"
      :checked="checked"
      @click.prevent.stop.self
    />
  </label>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { GsInputPropBase, GsTooltipData } from '@/components/types'

  interface GsInputFieldProps extends GsInputPropBase {
    modelValue?: any
    type?: HTMLInputElement['type']
    tooltip?: GsTooltipData
  }

  withDefaults(defineProps<GsInputFieldProps>(), {
    type: 'hidden',
  })
  const inputElement = ref<HTMLInputElement | null>(null)

  defineExpose({
    inputElement,
  })
</script>

<style scoped>
  @import '@assets/variables.css';

  .gs-input-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-green);
    font-size: 14px;
    line-height: 1rem;

    .gs-input-field-label {
      display: flex;
    }
  }
</style>
@/components/types
