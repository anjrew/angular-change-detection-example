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
} from '@angular/core';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css'],
})
export class ComponentCComponent
  implements
    OnInit,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  @Input() testBinding: boolean;
  private childTestBinding = false;

  /** This is the constructor and this is fired before any of the input or output values are accessible and have been obtained */
  constructor() {
    console.log(
      ` %c C constructor firing in ComponentC with 'testBinding' Value of '${this.testBinding}'`,
      `background: orange; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  /** This is the first hook to fire this only fires once */
  ngOnInit(): void {
    console.log(
      ` %c C ngOnInit firing in ComponentC with 'testBinding' Value of '${this.testBinding}'`,
      `background: grey; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      ` %c C ngOnChanges firing in ComponentC with 'testBinding' Value of '${this.testBinding}' and change value of `,
      `background: blue; padding: 20px; border-radius: 5px; color: white`,
      changes,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngDoCheck(): void {
    console.log(
      `%c C ngDoCheck firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: pink; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngAfterContentInit(): void {
    console.log(
      ` %c C ngAfterContentInit firing in ComponentC with 'testBinding' Value of '${this.testBinding}'`,
      `background: red; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngAfterViewInit(): void {
    console.log(
      ` %c C ngAfterViewInit firing in ComponentC with 'testBinding' Value of '${this.testBinding}'`,
      `background: purple; padding: 20px; border-radius: 5px; color: white`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      ` %c C ngAfterContentChecked firing in ComponentC with 'testBinding' Value of '${this.testBinding}'`,
      `background: green; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }
  ngAfterViewChecked(): void {
    console.log(
      ` %c C ngAfterViewChecked firing in ComponentC with 'testBinding' Value of '${this.testBinding}'`,
      `background: yellow; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }
}
