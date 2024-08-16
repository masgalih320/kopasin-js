import { CopyInterface, KopasinInterface, PasteInterface } from "./types";

class Kopasin implements KopasinInterface {
  public copy?: CopyInterface;
  public paste?: PasteInterface;

  constructor({ copy, paste }: { copy?: CopyInterface; paste?: PasteInterface }) {
    if (copy) {
      this.copy = {
        ...copy,
        source: this.getElement(copy.source),
        trigger: this.getElement(copy.trigger),
        on: copy.on || 'click',
        success: copy.success || (() => { }),
        error: copy.error || (() => { }),
      };
    }

    if (paste) {
      this.paste = {
        ...paste,
        target: this.getElement(paste.target),
        trigger: this.getElement(paste.trigger),
        on: paste.on || 'click',
        success: paste.success || (() => { }),
        error: paste.error || (() => { }),
      };
    }

    this.init();
  }

  private init(): void {
    if (this.copy) this.handleCopy(this.copy);
    if (this.paste) this.handlePaste(this.paste);
  }

  private handleCopy(c: CopyInterface) {
    c.trigger.addEventListener(c.on, function () {
      if (c.source instanceof HTMLInputElement) {
        c.source.select();
      } else {
        const selection = window.getSelection();
        const range = document.createRange();

        range.selectNodeContents(c.source);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      try {
        window.navigator.clipboard.writeText(c.source instanceof HTMLInputElement ? c.source.value : c.source.textContent);
        if (c.success) c.success();
      } catch (err) {
        if (c.error) c.error();
      }
    });
  }

  private handlePaste(p: PasteInterface) {
    p.trigger.addEventListener(p.on, function () {
      try {
        if (p.target instanceof HTMLInputElement) {
          window.navigator.clipboard.readText().then((text) => {
            (p.target as HTMLInputElement).value = text
          })
        } else {
          window.navigator.clipboard.readText().then((text) => {
            p.target.innerText = text
          })
        }

        if (p.success) p.success()
      } catch {
        if (p.error) p.error()
      }
    })
  }

  private getElement(selector: string | HTMLElement): HTMLElement {
    return selector instanceof HTMLElement
      ? selector
      : document.querySelector(selector) as HTMLElement;
  }
}

module.exports = Kopasin