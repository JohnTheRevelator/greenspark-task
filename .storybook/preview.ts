import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import GsCheckbox from '../src/components/inputs/GsCheckbox.vue'
import GsTooltip from '../src/components/GsTooltip.vue'
import GsRadio from '../src/components/inputs/GsRadio.vue'
import GsProductWidget from '../src/components/GsProductWidget.vue'

setup((app) => {
  app.component('gs-checkbox', GsCheckbox)
  app.mixin({
    // My mixin
  })
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
