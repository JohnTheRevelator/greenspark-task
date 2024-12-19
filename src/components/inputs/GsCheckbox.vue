<template>
  <GsInputField
    :name="name"
    :label="label"
    :checked="modelValue"
    :type="type"
  >
    <template #tooltip>
      <slot name="tooltip" />
    </template>
    <template #default>
      <div
        @mouseenter.self.capture.stop="setHoveredState(true)"
        @mouseleave.self.capture.stop="setHoveredState(false)"
        @click="toggle"
      >
        <div
          v-if="isTypeSwitch"
          class="gs-switch"
          :class="{ 'gs-switch--on': modelValue }"
        >
          <div
            class="gs-switch-toggle"
            :class="{ 'gs-switch-toggle--hovered': hovered }"
          />
        </div>
        <div
          v-else
          class="gs-checkbox"
          :class="{
            'gs-checkbox--on': modelValue,
            'gs-checkbox--hovered': hovered,
          }"
        >
          <ion-icon
            v-if="modelValue"
            class="gs-checkbox-icon"
            name="checkmark-sharp"
            size="large"
          />
        </div>
      </div>
    </template>
  </GsInputField>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import type { GsInputPropBase } from '@/components/types'
  import GsInputField from './GsInputField.vue'

  interface GsSwitchProps extends GsInputPropBase {
    modelValue: boolean
    type: 'checkbox' | 'switch'
  }

  const props = defineProps<GsSwitchProps>()
  const hovered = ref(false)
  const isTypeSwitch = computed(() => props.type === 'switch')

  const emit = defineEmits(['update:modelValue'])

  const toggle = () => {
    emit('update:modelValue', !props.modelValue)
  }

  const setHoveredState = (state: boolean) => {
    hovered.value = state
  }
</script>

<style scoped>
  @import '@assets/variables.css';

  .gs-switch {
    --switch-width: 2.5rem;
    --switch-height: calc(var(--switch-width) / 2);
    --switch-border-radius: calc(var(--switch-width) * 0.85);
    --switch-border-width: calc(var(--switch-height) * 0.03);

    box-sizing: content-box;
    display: flex;
    align-items: center;
    width: var(--switch-width);
    height: var(--switch-height);
    border-radius: var(--switch-border-radius);
    background-color: var(--color-primary);
    border: var(--switch-border-width) solid var(--color-green-light);
    box-shadow: inset 0 0.06rem 0.44rem rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: background-color 0.3s;

    .gs-switch-toggle {
      position: relative;
      width: var(--switch-height);
      height: var(--switch-height);
      left: calc(-1 * var(--switch-border-width));
      background-color: var(--color-primary);
      border: var(--switch-border-width) solid var(--color-beige);
      border-radius: 50%;
      box-shadow: 0 0 0.0625rem rgba(0, 0, 0, 0.35);
      transition: transform 0.3s;

      &.gs-switch-toggle--hovered {
        --toggle-outline-ratio: 0.7;
        --toggle-large-ratioed: calc(var(--switch-height) / var(--toggle-outline-ratio));
        --toggle-outline-width: calc(
          var(--toggle-large-ratioed) -
            calc(var(--switch-height) + calc(var(--switch-border-width) * 2))
        );

        outline: var(--toggle-outline-width) solid rgba(175, 198, 189, 0.5);
      }
    }

    &.gs-switch--on {
      background-color: var(--color-green);
      border-color: var(--color-grey);

      .gs-switch-toggle {
        --toggle-translate-amount: calc(
          calc(var(--switch-height) - var(--switch-border-width)) +
            calc(var(--switch-border-width) * 2)
        );

        border-color: var(--color-green);
        transform: translateX(var(--toggle-translate-amount));
      }
    }
  }

  .gs-checkbox {
    --checkbox-width: 1.125rem;
    --checkbox-overlay-width: calc(var(--checkbox-width) * 2);
    --checkbox-border-radius: 0.15rem;
    --checkbox-animation-duration: 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--checkbox-width);
    height: var(--checkbox-width);
    border-radius: var(--checkbox-border-radius);
    border: calc(var(--checkbox-width) * 0.175) solid var(--color-grey-dark);
    cursor: pointer;
    transition:
      background-color var(--checkbox-animation-duration),
      border-color var(--checkbox-animation-duration),
      border-width var(--checkbox-animation-duration);

    &.gs-checkbox--on {
      border-color: var(--color-green);
      border-width: 0;
      border-radius: var(--checkbox-border-radius);
      background-color: var(--color-green);

      .gs-checkbox-icon {
        border: none;
        color: var(--color-primary);
      }
    }

    &.gs-checkbox--hovered {
      &::before {
        content: '';
        display: block;
        position: absolute;
        width: var(--checkbox-overlay-width);
        height: var(--checkbox-overlay-width);
        border-radius: 50%;
        background-color: var(--color-green-light);
        opacity: 0.5;
      }
    }
  }
</style>
