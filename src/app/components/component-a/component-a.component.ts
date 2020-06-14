import {
  Component,
  OnInit,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  SimpleChanges,
  Input,
  ChangeDetectorRef,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
})
export class ComponentAComponent
  implements
    OnInit,
    OnChanges,
    AfterContentChecked,
    DoCheck,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  @Input() testBinding: boolean;

  public childTestBinding: boolean = false;

  /** This is the constructor and this is fired before any of the input or output values are accessible and have been obtained */
  constructor(private changeDetector: ChangeDetectorRef) {
    console.log(
      `%c A  constructor firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: orange; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  /** This is the first hook to fire this only fires once */
  ngOnInit(): void {
    console.log(
      `%c A  ngOnInit firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: grey; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngDoCheck(): void {
    console.log(
      `%c A  ngDoCheck firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: pink; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      `%c A  ngOnChanges firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: blue; padding: 20px; border-radius: 5px; color: white`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngAfterContentInit(): void {
    console.log(
      `%c A  ngAfterContentInit firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: red; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngAfterViewInit(): void {
    console.log(
      `%c A  ngAfterViewInit firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: purple; padding: 20px; border-radius: 5px; color: white`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      `%c A  ngAfterContentChecked firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: green; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }
  ngAfterViewChecked(): void {
    console.log(
      `%c A  ngAfterViewChecked firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: yellow; padding: 20px; border-radius: 5px`,
      { childBinding: this.childTestBinding, testBinding: this.testBinding }
    );
  }
}
