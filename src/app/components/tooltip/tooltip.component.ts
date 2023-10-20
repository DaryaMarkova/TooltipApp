import { 
    ChangeDetectionStrategy, 
    Component, 
    EventEmitter, 
    Input, 
    OnChanges, 
    OnDestroy, 
    Output, 
    SimpleChange, 
} from '@angular/core';

import { ITooltip } from 'src/app/service/tooltip.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnChanges, OnDestroy {
    @Input()
    tooltip!: ITooltip;

    @Output()
    tooltipExpired = new EventEmitter<number>();

    timeout: NodeJS.Timeout | null = null;

    ngOnChanges(changes: { tooltip: SimpleChange }): void {
      const currentTooltip = changes.tooltip.currentValue;

      this.clearTimeout();

      if (!currentTooltip) {
        return;
      }
      
      this.timeout = setTimeout(() => {
        this.tooltipExpired.emit(currentTooltip.id)
      }, currentTooltip.duration);
    }

    ngOnDestroy(): void {
      this.clearTimeout()
    }

    private clearTimeout(): void {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
}