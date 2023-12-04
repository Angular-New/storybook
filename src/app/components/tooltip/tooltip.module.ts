import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiSvgModule } from '@taiga-ui/core/components/svg';
import { TuiHintModule } from '@taiga-ui/core/directives/hint';
import { TuiWrapperModule } from '@taiga-ui/core/directives/wrapper';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';

import { TooltipComponent } from './tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    TuiWrapperModule,
    TuiSvgModule,
    TuiHintModule,
    PolymorpheusModule,
  ],
  declarations: [ TooltipComponent ],
  exports: [ TooltipComponent ],
})
export class TooltipModule {}
