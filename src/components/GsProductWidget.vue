<template>
  <div
    class="gs-widget"
    :class="[`gs-widget--${color}`]"
  >
    <div class="gs-logo">
      <slot name="logo">
        <div class="logo-mask" />
      </slot>
    </div>
    <div class="gs-widget-content">
      <div class="gs-widget-header">
        <slot
          name="header"
          :activity
        >
          <p>This product {{ activity }}</p>
        </slot>
      </div>
      <div class="gs-widget-impact">
        <slot
          name="impact"
          :impact="impact"
          :type="type"
        >
          <p>{{ impact }}{{ impactUnit }} {{ type }} {{ typeUnit }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface GsProductWidgetProps {
    id: number
    activity: string
    impact: number
    impactUnit?: string
    type: string
    typeUnit?: string
    color: string
  }

  defineProps<GsProductWidgetProps>()
</script>

<style scoped>
  @import '@assets/variables.css';

  .gs-widget {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    gap: 0.75rem;
    padding: 0.75rem;
    align-items: center;
    border-radius: 0.375rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    .gs-logo {
      display: flex;
      flex-shrink: 1;
      justify-content: center;
      height: 100%;

      .logo-mask {
        display: flex;
        flex-grow: 1;
        mask-repeat: no-repeat;
        mask-position: center;
        mask-image: url(/gs-logo.svg);
        background-color: var(--color-primary);
        min-height: 46px;
        min-width: 40px;
        transition: all 0.3s ease-in-out;
      }
    }

    &.gs-widget--black {
      background-color: var(--color-black);
      color: var(--color-primary);
    }

    &.gs-widget--green {
      background-color: var(--color-green);
      color: var(--color-primary);
    }

    &.gs-widget--blue {
      background-color: var(--color-blue);
      color: var(--color-primary);
    }

    &.gs-widget--white {
      background-color: var(--color-white);
      color: var(--color-text-dark);

      .logo-mask {
        background-color: var(--color-text-dark);
      }
    }

    &.gs-widget--beige {
      background-color: var(--color-beige);
      color: var(--color-green);

      .logo-mask {
        background-color: var(--color-green);
      }
    }

    .gs-widget-content {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .gs-widget-header,
    .gs-widget-impact {
      display: flex;
      flex-grow: 1;
      font-size: 0.75rem;
    }

    .gs-widget-impact {
      font-size: 1.125em;
      font-weight: 700 !important;
    }
  }
</style>
