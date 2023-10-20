import { Component, OnInit } from '@angular/core';
import { TooltipService } from './service/tooltip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-app';

  constructor(
    private tooltipService: TooltipService
  ) {}

  ngOnInit(): void {
    this.tooltipService.show({id: 1, message: "First tooltip", duration: 3000 })
    this.tooltipService.show({id: 2, message: "Second tooltip", duration: 1000 })
    this.tooltipService.show({id: 3, message: "Third tooltip", duration: 3000 })
  }

  get tooltips() {
    return Object.values(this.tooltipService.tooltips);
  }
}
