import type { ProductWidgetSchema } from '@/components/types'

export default function useInitProductWidgets(): Map<
  ProductWidgetSchema['id'],
  ProductWidgetSchema
> {
  const widgetMap = new Map()
  const initialWidgets = [
    {
      id: 1,
      type: 'carbon',
      amount: 2,
      action: 'offsets',
      active: false,
      linked: false,
      selectedColor: 'green',
    },
    {
      id: 2,
      type: 'trees',
      amount: 15,
      action: 'plants',
      active: false,
      linked: true,
      selectedColor: 'black',
    },
    {
      id: 3,
      type: 'plastic',
      amount: 300,
      action: 'collects',
      active: true,
      linked: true,
      selectedColor: 'beige',
    },
  ]

  initialWidgets.forEach((widget) => {
    widgetMap.set(widget.id, widget)
  })

  return widgetMap
}
