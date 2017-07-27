## ANGULAR
### Component 
#### 1. Briefly explain Event Binding in Angular?
- The bindings directives you've met so far flow data in one direction: from a component to an element.
- Users don't just stare at the screen. They enter text into input boxes. They pick items from lists. They click buttons. Such user actions may result in a flow of data in the opposite direction: from an element to a component.
- The only way to know about a user action is to listen for certain events such as keystrokes, mouse movements, clicks, and touches. You declare your interest in user actions through Angular event binding.
#### 2. Briefly explain Data Binding in Angular?
Data binding is one of the most powerful features of software development technologies. Data binding is the connection bridge between View and the business logic (View Model) of the application. Data binding in Angular is the automatic synchronization between Model and the View. When the Model changes, the Views are automatically updated and vice-versa. 

There are many ways to bind the data in Angular. Following are the types of data binding in Angular 2.

* Interpolation
* One-way binding (unidirectional)
* Two-way binding
* Event binding
#### 3.What are Event Emitters and how it works in Angular?
In angular 2, any change occurred in the component always gets propagated from the current component to all its children in hierarchy. If the change from one component needs to be reflected to any of its parent component in hierarchy, we can emit the event by using Event Emitter api.
In short, EventEmitter is class defined in @angular/core module which can be used by components and directives to emit custom events.
```bash
	@output() somethingChanged = new EventEmitter(); 
```
We use somethingChanged.emit(value) method to emit the event. This is usually done in setter when the value is being changed in the class.

This event emit can be subscribed by any component of the module by using subscribe method.
```bash
	myObj.somethingChanged.subscribe(val) => this.myLocalMethod(val));
```
#### 4.Explain the life cycle hooks of Angular application?
Angular 2 component/directive has lifecycle events, managed by @angular/core. It creates the component, renders it, creates and renders its children, processes changes when its data-bound properties change, and then destroys it before removing its template from the DOM. Angular provides a set of lifecycle hooks(special events) which can be tapped into this lifecycle and perform operations when required. The constructor executes prior to all lifecycle events. Each interface has a single hook method prefixed with ng. For example, ngOnint interface has Oninit method that must be implemented in the component. 
Some of the events are applicable for both component/directives while few are specific to components.
 - **ngOnChanges**: Responds when angular sets its data-bound property which receives the current and previous object values.
- **ngOnInit**: Initializes the component/directive after first ngOnChange triggers. This is most frequently used method to retrieve the data for the template from a back-end service.
- **ngDoCheck**: Detect and act upon changes occuring outside Angular context. It is called when every change detection run.
- **ngOnDestroy**: Cleanup just before Angular destroys the directive/component. Unsubscribe observables and detach event handlers to avoid memory leaks.
Component-specific hooks:
-** ngAfterContentInit**: Component content has been initialized
- **ngAfterContentChecked**: After Angular checks the bindings of the external content that it projected     into its view.
- **ngAfterViewInit**: After Angular creates the component’s view.
- **ngAfterViewChecked:** After Angular checks the bindings of the component’s view. 
####  5. Explain the `ContentChild` `ContentChildren` and write an example?
#### 6.
ElementRef is a class that is a partial abstraction done the DOM Manipulations without breakable environments and it also can hold a reference to a DOM elements.
If “ElementRef” is injected to a component, the injected instance is a reference to the host element of the current component.
The ways to get an ElementRef instance looks like,

* **@ViewChild()**
*    **@ViewChildren()**
*    **@ContentChild()**
*   **@ContentChildren()**

In this case the ElementRef is a reference to the matching elements in the templates.

