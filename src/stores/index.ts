import { defineStore } from 'pinia'
import useInitProductWidgets from '@/composables/InitProductWidget'
import type { ProductWidgetSchema } from '@/components/types'

type ProductWidgetSchemaKeys = keyof ProductWidgetSchema

export const useMainStore = defineStore('main', {
  state: () => ({
    widgets: useInitProductWidgets(),
    widgetColors: ['blue', 'green', 'beige', 'white', 'black'],
    widgetTypes: ['carbon', 'plastic', 'trees'],
    widgetActivities: ['collects', 'plants', 'offsets'],
  }),
  getters: {
    getWidgetById(state) {
      return (id: number) => state.widgets.get(id)
    },
    getWidgetsMap(state) {
      return state.widgets
    },
    getWidgetsArray(state) {
      return Array.from(state.widgets.values())
    },
    getWidgetColors(state) {
      return state.widgetColors
    },
    getWidgetTypes(state) {
      return state.widgetTypes
    },
    getWidgetActivities(state) {
      return state.widgetActivities
    },
  },
  actions: {
    setActiveWidget(id: number) {
      const widget = this.getWidgetById(id)
      if (widget?.active) {
        widget.active = false
      } else {
        this.getWidgetsArray.forEach((widget) => {
          widget.active = widget.id === id
        })
      }
    },
    setWidgetProperty(
      id: number,
      property: ProductWidgetSchemaKeys,
      value: ProductWidgetSchemaKeys,
    ) {
      const widget = this.widgets.get(id) as ProductWidgetSchema
      ;(widget[property] as ProductWidgetSchemaKeys) = value as ProductWidgetSchemaKeys
    },
  },
})
