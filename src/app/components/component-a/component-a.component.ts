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
  ElementRef,
  ViewChild,
  ContentChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ComponentBComponent } from '../component-b/component-b.component';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
} as Component)
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

  @ViewChild('child') childRef;
  @ContentChild(ComponentBComponent) contentChild: ComponentBComponent;

  public childTestBinding: boolean = false;

  /* ************************************************************************************** */
  // THE FOLLOWING ARE ONLY INVOKED ON COMPONENT INITIALIZATION
  /* ************************************************************************************** */


  /** This is the constructor and this is fired before any of the input or output values are accessible and have been obtained */
  constructor(
    private changeDetector: ChangeDetectorRef,
    private elementRef: ElementRef
  ) {
    console.log(
      `%c A  constructor firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: orange; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
        contentChild: this.contentChild,
      }
    );
  }

  /** This is the first hook to fire this only fires once the input bindings are available*/
  ngOnInit(): void {
    console.log(
      `%c A  ngOnInit firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: grey; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
        contentChild: this.contentChild,
      }
    );
    // this.childTestBinding = !this.childTestBinding; This does not cause an error
  }

  /** This hook fires as soon as the projected content is available {ContentChild}
   * and before the view children are available */
  ngAfterContentInit(): void {
    console.log(
      `%c A  ngAfterContentInit firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: red; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
        contentChild: this.contentChild,
      }
    );
    // this.childTestBinding = !this.childTestBinding;
  }

  /* The child ref is only available here for the first time after the entire View has been initialized
    and the {ViewChildren} are available */
  ngAfterViewInit(): void {
    console.log(
      `%c A  ngAfterViewInit firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: purple; padding: 20px; border-radius: 5px; color: white`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
        contentChild: this.contentChild,
      }
    );
    /* THIS CAUSES AN ERROR>.... why???? */
    // this.childTestBinding = !this.childTestBinding;
  }


  /* ************************************************************************************** */
  // THE FOLLOWING ARE CHANGE DETECTION LIFECYCLE HOOKS
  /* ************************************************************************************** */

  /**
  @optional
  @param
  This is the first function to fire when change detection happens
  ONLY IF A CHANGE IS DETECTED BY THE CHANGE DETECTOR
  IF no change is detected skip to ngDoCheck
  */
  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      `%c A  ngOnChanges firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: blue; padding: 20px; border-radius: 5px; color: white`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
        contentChild: this.contentChild,
      }
    );
  }

  /**  Is called during the checking process and should only really
   be used with the "onPush" change detection strategy
   You can then trigger change detection like so

  @example
  if (this.id !== this.o.id) {
    this.changeDetector.markForCheck();
  }
  this.childTestBinding = !this.childTestBinding; THIS DOES NOT CAUSE AN ERROR
  "*/
  ngDoCheck(): void {
    console.log(
      `%c A  ngDoCheck firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: pink; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
        contentChild: this.contentChild,
      }
    );
  }

  /** is called after Angular checks the content projected into the component (it's data-bound properties). */
  ngAfterContentChecked(): void {
    console.log(
      `%c A  ngAfterContentChecked firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: green; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
        contentChild: this.contentChild,
      }
    );
  }

  /** nA callback method that is invoked immediately after the default
   * change detector has completed one change-check cycle for a component's view. */
  ngAfterViewChecked(): void {
    console.log(
      `%c A  ngAfterViewChecked firing in ComponentA with 'testBinding' Value of '${this.testBinding}'`,
      `background: yellow; padding: 20px; border-radius: 5px`,
      {
        childBinding: this.childTestBinding,
        testBinding: this.testBinding,
        child: this.childRef,
        hostRef: this.elementRef,
        contentChild: this.contentChild,
      }
    );
  }

  /* **************************************************************************************  */
  /* Normal functions */
  /* **************************************************************************************  */
  public changeChildBinding(): void {
    this.childTestBinding = !this.childTestBinding;
  }
}
