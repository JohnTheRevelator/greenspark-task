<template>
  <div
    class="gs-tooltip"
    @mouseenter="setIsActive(true)"
    @mouseleave="setIsActive(false)"
  >
    <slot name="activator-icon">
      <ion-icon name="information-circle-outline" />
    </slot>
    <Transition>
      <div
        v-if="isActive"
        class="gs-tooltip-content"
        :class="{ 'gs-tooltip-content--active': isActive }"
      >
        <div
          v-if="tooltip.text"
          class="gs-tooltip-text"
        >
          <slot name="tooltip-text">
            {{ tooltip.text }}
          </slot>
        </div>
        <div
          v-if="tooltip.link"
          class="gs-tooltip-link"
        >
          <slot name="tooltip-link">
            <a
              :href="tooltip.link.href"
              :target="tooltip.link.target"
              :rel="tooltip.link.rel"
            >
              {{ tooltip.link.text }}
            </a>
          </slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { GsTooltipData } from '@/components/types'

  interface GsTooltipProps {
    tooltip: GsTooltipData
  }
  defineProps<GsTooltipProps>()

  const isActive = ref(false)

  const setIsActive = (value: boolean) => {
    isActive.value = value
  }
</script>

<style scoped>
  @import '@assets/variables.css';

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease-in-out;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .gs-tooltip {
    position: relative;

    .gs-tooltip-content {
      position: absolute;
      display: flex;
      flex-wrap: wrap;
      top: 100%;
      left: 100%;
      transform: translateX(-50%) translateY(-50%);
      min-width: 16rem;
      max-width: 24rem;
      gap: 0.75rem;
      padding: 1.5rem 1rem;
      background-color: var(--color-primary);
      color: var(--color-text-dark);
      border-radius: 0.25rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      box-shadow:
        0 0.2rem 0.44rem rgba(0, 0, 0, 0.3),
        0 0.4rem 5rem rgba(0, 0, 0, 0.2);
      z-index: 100;

      .gs-tooltip-link {
        a {
          color: var(--color-green);
          font-weight: 700;
          letter-spacing: -2%;
        }
      }
    }

    :deep(ion-icon) {
      position: absolute;
      top: -2px;
      font-size: 0.75rem;
    }
  }
</style>
./types
