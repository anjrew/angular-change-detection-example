import {
  Component,
  OnInit,
  SimpleChanges,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],})
export class ComponentBComponent
  implements
    OnInit,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  @ViewChild('child') childRef;

  @Input() testBinding: boolean;
  @Input()

  public childObjectBinding = {
    property: false
  }

  private childTestBinding = false;

  /** This is the constructor and this is fired before any of the input or output values are accessible and have been obtained */
  constructor(private elementRef: ElementRef) {
    console.log(
      ` %c B constructor firing in ComponentB with 'testBinding' Value of '${this.testBinding}'`,
      `background: orange; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
      }
    );
  }

  /** This is the first hook to fire this only fires once */
  ngOnInit(): void {
    console.log(
      ` %c B ngOnInit firing in ComponentB with 'testBinding' Value of '${this.testBinding}'`,
      `background: grey; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
      }
    );
  }

  ngDoCheck(): void {
    console.log(
      `%c B  ngDoCheck firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: pink; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      ` %c B ngOnChanges firing in ComponentB with 'testBinding' Value of '${this.testBinding}' and a 'changes' value of`,
      `background: blue; padding: 20px; border-radius: 5px; color: white`,
      changes,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
      }
    );
  }

  ngAfterContentInit(): void {
    console.log(
      ` %c B ngAfterContentInit firing in ComponentB with 'testBinding' Value of '${this.testBinding}'`,
      `background: red; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
      }
    );
  }

  ngAfterViewInit(): void {
    console.log(
      ` %c B ngAfterViewInit firing in ComponentB with 'testBinding' Value of '${this.testBinding}'`,
      `background: purple; padding: 20px; border-radius: 5px; color: white`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
      }
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      ` %c B ngAfterContentChecked firing in ComponentB with 'testBinding' Value of '${this.testBinding}'`,
      `background: green; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
      }
    );
  }
  ngAfterViewChecked(): void {
    console.log(
      ` %c B ngAfterViewChecked firing in ComponentB with 'testBinding' Value of '${this.testBinding}'`,
      `background: yellow; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
      }
    );
  }


  changePropertyOfObjectBinding() {
        this.childObjectBinding.property = !this.childObjectBinding.property
   }
}
