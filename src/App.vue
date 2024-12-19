<script setup lang="ts">
  import { useMainStore } from '@/stores'
  import GsWidgetSettings from '@/components/GsWidgetSettings.vue'
  import { onMounted, ref } from 'vue'

  const widgets = useMainStore().getWidgetsArray

  widgets.forEach((widget) => {
    if (widget.type === 'plastic' && !widget.typeUnit) {
      widget.typeUnit = widget.amount > 1 ? 'bottles' : 'bottle'
    }

    if (widget.type === 'carbon' && !widget.impactUnit) {
      widget.impactUnit = `${widget.amount > 1 ? 'kgs' : 'kg'} of`
    }
  })

  const tooltipText =
    'This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.'
  const tooltipLink = {
    href: 'https://shattereddisk.github.io/rickroll/rickroll.mp4',
    target: '_blank',
    rel: 'noopener',
    text: 'View Public Profile',
  }

  const mounted = ref(false)

  onMounted(() => {
    mounted.value = true
  })
</script>

<template>
  <Transition>
    <main
      v-if="mounted"
      id="gs-widget-dashboard"
    >
      <h1>Per product widgets</h1>
      <hr />
      <div class="gs-dashboard-settings-wrapper">
        <GsWidgetSettings
          v-for="widget in widgets"
          :key="widget.id"
          :widget="widget"
          :tooltipText="tooltipText"
          :tooltipLink="tooltipLink"
        />
      </div>
    </main>
  </Transition>
</template>

<style scoped>
  @import '@assets/variables.css';

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease-in-out;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  #gs-widget-dashboard {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 65vw;
    height: 52vh;
    padding: 2.25rem;
    background-color: var(--color-primary);
    border-radius: 0.5rem;
    box-shadow:
      0 0.2rem 0.44rem rgba(0, 0, 0, 0.3),
      0 0.4rem 6rem rgba(0, 0, 0, 0.2);

    hr {
      border: none;
      border-top: 0.1rem solid var(--color-grey);
    }

    h1 {
      font-size: 30px;
      font-weight: 700;
      line-height: 1.2;

      @media screen and (max-width: 565px) {
        text-align: center;
      }
    }

    .gs-dashboard-settings-wrapper {
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;

      @media screen and (max-width: 565px) {
        flex-direction: column;
        gap: auto;
      }
    }

    @media screen and (max-width: 892px) {
      width: 88vw;
      height: auto;
      padding: 1.5rem;
    }
  }
</style>
