/**
 * A single light emitting diode on a Blinkt!
 */
export interface Led {
  /**
   * The 0-based index
   * @example 0
   */
  index: number;
  /**
   * A valid CSS color string
   */
  color: string;
}

/**
 * A 0-based list of @see Led objects
 */
export type Leds = Led[];
