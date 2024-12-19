<template>
  <GsInputField
    class="gs-radio-group"
    :name="name"
    :label="label"
  >
    <template #tooltip>
      <slot name="tooltip" />
    </template>
    <template #default>
      <div class="gs-radio-wrapper">
        <GsInputField
          v-for="value in values"
          :key="value.value"
          class="gs-radio"
          :name="name"
          :label="value.label"
          :value="value.value"
          type="radio"
        >
          <template #default>
            <div class="gs-radio-input-wrapper">
              <div
                class="gs-radio-input"
                :class="[
                  `gs-radio-color--${value.value}`,
                  {
                    'gs-radio-input--on': isRadioSelected(value.value),
                  },
                ]"
                @mouseenter="setHoveredState"
                @mouseleave="setHoveredState"
                @click="selectRadio(value.value)"
              />
            </div>
          </template>
        </GsInputField>
      </div>
    </template>
  </GsInputField>
</template>

<script setup lang="ts">
  import type { GsInputPropBase } from '@/components/types'
  import GsInputField from './GsInputField.vue'

  interface GsRadioProps extends GsInputPropBase {
    modelValue: any
    values: Array<{ value: any; label?: string; name?: string | number }>
  }

  const props = defineProps<GsRadioProps>()

  const emit = defineEmits(['update:modelValue'])

  const selectRadio = (value: any) => {
    emit('update:modelValue', value)
  }

  const setHoveredState = (event: Event) => {
    const target = event.target as HTMLElement

    switch (event.type) {
      case 'mouseenter':
        target.classList.add('gs-radio-input--hovered')
        return
      case 'mouseleave':
        target.classList.remove('gs-radio-input--hovered')
        return
    }
  }

  const isRadioSelected = (value: any) => props.modelValue === value
</script>

<style scoped>
  @import '@assets/variables.css';

  .gs-radio-group {
    display: flex;
    justify-content: space-between;

    .gs-radio-wrapper {
      display: flex;
      gap: 0.25rem;

      .gs-radio {
        --radio-width: 1.125rem;
        --radio-overlay-width: calc(var(--radio-width) * 2);
        --radio-border-radius: 0.15rem;
        --radio-animation-duration: 0.3s;

        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--radio-width);
        height: var(--radio-width);
        border-radius: var(--radio-border-radius);
        cursor: pointer;
        transition:
          background-color var(--radio-animation-duration),
          border-color var(--radio-animation-duration),
          border-width var(--radio-animation-duration);

        .gs-radio-input-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .gs-radio-input {
          width: 100%;
          height: 100%;
          box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.1);
          transition: opacity var(--radio-animation-duration) ease-in-out;

          &.gs-radio-color--black {
            background-color: var(--color-black);
          }

          &.gs-radio-color--green {
            background-color: var(--color-green);
          }

          &.gs-radio-color--blue {
            background-color: var(--color-blue);
          }

          &.gs-radio-color--white {
            background-color: var(--color-white);
          }

          &.gs-radio-color--beige {
            background-color: var(--color-beige);
          }

          &.gs-radio-input--hovered {
            opacity: 0.8;
          }

          &.gs-radio-input--on {
            border: 1px solid var(--color-grey);
          }
        }
      }
    }
  }
</style>
