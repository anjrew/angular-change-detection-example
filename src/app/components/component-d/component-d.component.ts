import {
  Component,
  OnInit,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-component-d',
  templateUrl: './component-d.component.html',
  styleUrls: ['./component-d.component.css'],
})
export class ComponentDComponent
  implements
    OnInit,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  @Input() testBinding: boolean;

  private childTestBinding;

  /** This is the constructor and this is fired before any of the input or output values are accessible and have been obtained */
  constructor() {
    console.log(
      ` %c D constructor firing in ComponentD with 'testBinding' Value of '${this.testBinding}'`,
      `background: orange; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding },
    );
  }

  /** This is the first hook to fire this only fires once */
  ngOnInit(): void {
    console.log(
      ` %c D ngOnInit firing in ComponentD with 'testBinding' Value of '${this.testBinding}'`,
      `background: grey; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngDoCheck(): void {
    console.log(
      `%c D ngDoCheck firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: pink; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      ` %c D ngOnChanges firing in ComponentD with 'testBinding' Value of '${this.testBinding}'`,
      `background: blue; padding: 20px; border-radius: 5px; color: white`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngAfterContentInit(): void {
    console.log(
      ` %c D ngAfterContentInit firing in ComponentD with 'testBinding' Value of '${this.testBinding}'`,
      `background: red; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngAfterViewInit(): void {
    console.log(
      ` %c D ngAfterViewInit firing in ComponentD with 'testBinding' Value of '${this.testBinding}'`,
      `background: purple; padding: 20px; border-radius: 5px; color: white`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      ` %c D ngAfterContentChecked firing in ComponentD with 'testBinding' Value of '${this.testBinding}'`,
      `background: green; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }
  ngAfterViewChecked(): void {
    console.log(
      ` %c D ngAfterViewChecked firing in ComponentD with 'testBinding' Value of '${this.testBinding}'`,
      `background: yellow; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }
}
