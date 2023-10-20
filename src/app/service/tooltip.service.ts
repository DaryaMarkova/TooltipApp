import { Injectable } from "@angular/core";

export interface ITooltip {
  id: number;
  message: string;
  duration: number;
}

@Injectable({providedIn: 'root'})
export class TooltipService {
    tooltips: {[key: number]: ITooltip}  = {};

    public show(tooltip: ITooltip) {
      this.tooltips[tooltip.id] = tooltip;
    }

    public hide(id: number) {
      delete this.tooltips[id]
    }
}