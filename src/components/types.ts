export interface GsInputPropBase {
  name: string
  label?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  autofocus?: boolean
  autocomplete?: string
  spellcheck?: boolean
  tabindex?: number
  inputmode?: string
  pattern?: string
  minlength?: number
  maxlength?: number
  min?: number
  max?: number
  step?: number
  size?: number
  prefix?: string
  suffix?: string
  clearable?: boolean
  icon?: string
  iconPack?: string
  iconSize?: string
  iconColor?: string
  iconPosition?: string
  helpText?: string
  errorText?: string
  successText?: string
  warningText?: string
  validateEvent?: boolean
  validationType?: string
  rules?: string | string[]
  value?: any
  values?: any[]
  checked?: boolean
}

export interface GsTooltipData {
  text?: string
  link?: {
    href: string
    target?: string
    rel?: string
    text: string
  }
}

export type ProductWidgetColor = 'white' | 'black' | 'blue' | 'green' | 'beige'
export type ProductWidgetType = 'carbon' | 'plastic' | 'trees'

export type ProductWidgetSchema = {
  /**
   * The id of the product widget, incremental integer
   * @type {number}
   * @memberof ProductWidgetSchema
   * @required
   * @minimum 1
   * @example 1
   */
  id: number
  /**
   * The type of impact
   * @type {'carbon' | 'plastic' | 'trees'}
   * @memberof ProductWidgetSchema
   * @required
   * @example carbon
   */
  type: ProductWidgetType
  /**
   * The unit of the impact
   * @type {string}
   * @memberof ProductWidgetSchema
   * @example kg
   */
  typeUnit?: string
  /**
   * The amount of impact
   * @type {number}
   * @memberof ProductWidgetSchema
   * @required
   * @minimum 1
   * @example 2
   */
  amount: number
  /**
   * The action which corresponds to an impact type
   * @type {'collects' | 'plants' | 'offsets'}
   * @memberof ProductWidgetSchema
   * @required
   * @example offsets
   */
  action: string
  /**
   * The unit of the action
   * @type {string}
   * @memberof ProductWidgetSchema
   * @example trees
   */
  impactUnit?: string
  /**
   * Describes if the widget (badge) is active
   * @type {boolean}
   * @memberof ProductWidgetSchema
   * @example false
   */
  active: boolean
  /**
   * Describes if the widget is linked to the public profile
   * @type {boolean}
   * @memberof ProductWidgetSchema
   * @example false
   */
  linked: boolean
  /**
   * Describes the current color of the widget
   * @type {'white' | 'black' | 'blue' | 'green' | 'beige'}
   * @memberof ProductWidgetSchema
   * @example green
   */
  selectedColor: ProductWidgetColor
}

export type ProductWidgetSchemaKeys = keyof ProductWidgetSchema
