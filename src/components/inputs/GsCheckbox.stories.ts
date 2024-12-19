import type { Meta, StoryObj } from '@storybook/vue3'

import GsCheckbox from '@/components/inputs/GsCheckbox.vue'

const meta: Meta<typeof GsCheckbox> = {
  component: GsCheckbox,
}

export default meta
type Story = StoryObj<typeof GsCheckbox>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { GsCheckbox },
    setup() {
      return { args }
    },
    template: '<GsCheckbox v-bind="args" />',
  }),
  args: {
    type: 'switch',
    label: 'Input label',
  },
}
