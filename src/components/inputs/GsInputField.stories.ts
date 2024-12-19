import type { Meta, StoryObj } from '@storybook/vue3'

import GsInputField from '@/components/inputs/GsInputField.vue'

const meta: Meta<typeof GsInputField> = {
  component: GsInputField,
}

export default meta
type Story = StoryObj<typeof GsInputField>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { GsInputField },
    setup() {
      return { args }
    },
    template: '<GsInputField v-bind="args" />',
  }),
  args: {
    type: 'switch',
    label: 'Input label',
  },
}

export const Tooltipped: Story = {
  render: (args) => ({
    components: { GsInputField },
    setup() {
      return { args }
    },
    template: `<GsCheckbox
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
    </GsCheckbox>`,
  }),
  args: {
    type: 'switch',
    label: 'Input label',
    tooltip: {
      text: 'This is a tooltip',
      link: {
        href: 'https://example.com',
        text: 'Learn more',
        rel: 'noopener',
        target: '_blank',
      },
    },
  },
}
