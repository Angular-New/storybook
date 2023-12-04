import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Inject,
  Input,
  Self,
  ViewChild
} from '@angular/core';
import { Observable, takeUntil } from "rxjs";
import {
  MODE_PROVIDER,
  TUI_HINT_OPTIONS,
  TUI_MODE,
  TuiBrightness,
  TuiHintHoverDirective,
  TuiHintOptions, TuiHintOptionsDirective
} from "@taiga-ui/core";
import { TuiDestroyService } from "./tooltip.service";
import { TUI_IS_MOBILE } from "./tooltip.token";

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  providers: [TuiDestroyService, MODE_PROVIDER],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent<C = any> extends TuiHintOptionsDirective {
  private mode: TuiBrightness | null = null;

  @ViewChild(TuiHintHoverDirective)
  readonly driver$?: TuiHintHoverDirective;

  @Input()
  describeId = '';

  @Input()
  context?: C;

  constructor(
    @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
    @Inject(TUI_MODE) mode$: Observable<TuiBrightness | null>,
    @Inject(TUI_HINT_OPTIONS) options: TuiHintOptions,
    @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
  ) {
    super(options);

    mode$.pipe(takeUntil(destroy$)).subscribe(mode => {
      this.mode = mode;
    });
  }

  @HostBinding('attr.data-appearance')
  get computedAppearance(): string {
    return this.appearance || this.mode || '';
  }

  @HostListener('mousedown', ['$event'])
  stopOnMobile(event: MouseEvent): void {
    if (this.isMobile) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.driver$?.toggle();
  }
}
