import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITooltip } from 'src/app/service/tooltip.service';


@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
    @Input()
    tooltip!: ITooltip;
}