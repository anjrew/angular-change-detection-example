import {
  Component,
  OnInit,
  AfterContentChecked,
  Input,
  OnChanges,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  SimpleChanges,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css'],

  /* BY Marking the Change detection strategy here as 'onPush;
  The DOM is not updated but 'ngDoCheck' and the other checks still fire'
  Invoke this.changeDetector.markForCheck() if the changes need to go ahead */
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentCComponent
  implements
    OnInit,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  @ViewChild('child') childRef;
  @Input() testBinding: boolean;
  @Input() objectBinding: { property: boolean };
  private childTestBinding = false;

  /** This is the constructor and this is fired before any of the input or
  * output values are accessible and have been obtained */
  constructor(
    private elementRef: ElementRef,
    private changeDetector: ChangeDetectorRef
  ) {
    console.log(
      ` %c C constructor firing in ComponentC with 'testBinding' Value of '${this.testBinding}'`,
      `background: orange; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        hostRef: this.elementRef,
        objectBinding: this.objectBinding,
      }
    );
  }

  /** This is the first hook to fire this only fires once */
  ngOnInit(): void {
    console.log(
      ` %c C ngOnInit firing in ComponentC with 'testBinding' Value of '${this.testBinding}'`,
      `background: grey; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        hostRef: this.elementRef,
        objectBinding: this.objectBinding,
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      ` %c C ngOnChanges firing in ComponentC with 'testBinding' Value of '${this.testBinding}' and change value of `,
      `background: blue; padding: 20px; border-radius: 5px; color: white`,
      changes,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        hostRef: this.elementRef,
        objectBinding: this.objectBinding,
      }
    );
  }

  ngDoCheck(): void {
    console.log(
      `%c C ngDoCheck firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: pink; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        hostRef: this.elementRef,
        objectBinding: this.objectBinding,
      }
    );
    /* Use this if the dom needs to be updated and change detection is set to ChangeDetectionStrategy.OnPush */
    // this.changeDetector.markForCheck()
  }

  ngAfterContentInit(): void {
    console.log(
      ` %c C ngAfterContentInit firing in ComponentC with 'testBinding' Value of '${this.testBinding}'`,
      `background: red; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        hostRef: this.elementRef,
        objectBinding: this.objectBinding,
      }
    );
  }

  ngAfterViewInit(): void {
    console.log(
      ` %c C ngAfterViewInit firing in ComponentC with 'testBinding' Value of '${this.testBinding}'`,
      `background: purple; padding: 20px; border-radius: 5px; color: white`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        hostRef: this.elementRef,
        objectBinding: this.objectBinding,
      }
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      ` %c C ngAfterContentChecked firing in ComponentC with 'testBinding' Value of '${this.testBinding}'`,
      `background: green; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        hostRef: this.elementRef,
        objectBinding: this.objectBinding,
      }
    );
  }
  ngAfterViewChecked(): void {
    console.log(
      ` %c C ngAfterViewChecked firing in ComponentC with 'testBinding' Value of '${this.testBinding}'`,
      `background: yellow; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        hostRef: this.elementRef,
        objectBinding: this.objectBinding,
      }
    );
  }
}
