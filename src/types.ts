/**
 * Default configuration options for Kopasin.
 * @type {Object}
 */
export interface Config {
  /**
   * Event type to listen for (default: 'click').
   * @type {string}
   */
  on?: string | 'click';

  /**
   * Callback function to be executed on successful operation.
   * @type {Function}
   */
  success?: () => void;

  /**
   * Callback function to be executed on error.
   * @type {Function}
   */
  error?: () => void;
};

/**
 * Configuration for copying text.
 * @type {Object}
 */
export interface CopyInterface extends Config {
  /**
   * Element that contains the text to be copied into your clipboard.
   * @type {HTMLElement}
   */
  source: HTMLElement;

  /**
   * Element that triggers the copy action.
   * @type {HTMLElement}
   */
  trigger: HTMLElement;
};

/**
 * Configuration for pasting text.
 * @type {Object}
 */
export interface PasteInterface extends Config {
  /**
   * Target element where the text will be pasted.
   * Must be an HTMLInputElement to access the 'value' property.
   * Or you can also use any element with HTMLElement
   * @type {HTMLInputElement | HTMLElement}
   */
  target: HTMLInputElement | HTMLElement;

  /**
   * Element that triggers the paste action.
   * @type {HTMLElement}
   */
  trigger: HTMLElement;
};

/**
 * Configuration for Kopasin.
 * @type {Object}
 */
export interface KopasinInterface {
  copy?: CopyInterface;
  paste?: PasteInterface;
};
