import {Component, OnInit, ElementRef} from 'angular2/core';
import {AlertComponent, AlertService} from 'angular2-alert/angular2-alert';
@Component({
    selector: 'my-alert',
    template: `<alert></alert>
<h3>examples</h3>
<ul class="examples">
    <li class="message">
        <div class="ui">
            <p>A basic message</p>
            <button (click)="basicAlert()">Try me!</button>
        </div>
        <pre><span class="attr">this.alertService.swal</span>({
title: <span class="str">"Here's a message!"</span>
})</pre>
    </li>
    <li class="title-text">
        <div class="ui">
            <p>A title with a text under</p>
            <button (click)="titleTextAlert()">Try me!</button>
        </div>
        <pre><span class="attr">this.alertService.swal</span>({
title: <span class="str">"Here's a message!"</span>,
text: <span class="str">"It's pretty, isn't it?"</span>
})</pre>
    </li>

    <li class="success">
        <div class="ui">
            <p>A success message!</p>
            <button (click)="titleTextTypeAlert()">Try me!</button>
        </div>
        <pre><span class="attr">this.alertService.swal</span>({
title: <span class="str">"Good job!"</span>,
text: <span class="str">"You clicked the button!"</span>,
type: <span class="str">"success"</span>
})</pre>
    </li>

    <li class="warning confirm">
        <div class="ui">
            <p>A warning message, with a function attached to the "Confirm"-button...</p>
            <button (click)="confirmAlert()">Try me!</button>
        </div>
		<pre><span class="attr">this.alertService.swal</span>({
title: <span class="str">"Are you sure?"</span>,
text: <span class="str">"You will not be able to recover this imaginary file!"</span>,
type: <span class="str">"warning"</span>,
showCancelButton: <span class="val">true</span>,
confirmButtonColor: <span class="str">"#DD6B55"</span>,
confirmButtonText: <span class="str">"Yes, delete it!"</span>,
closeOnConfirm: <span class="val">false</span>
onConfirm:()=> {
                this.alertService.swal({
                    title: 'Deleted!',
                    text: 'Your imaginary file has been deleted.',
                    type: 'success'
                });
            }
});</pre>
    </li>

    <li class="warning cancel">
        <div class="ui">
            <p>... and by passing a parameter, you can execute something else for "Cancel".</p>
            <button (click)="confirmCancelAlert()">Try me!</button>
        </div>
		<pre><span class="attr">this.alertService.swal</span>({
title: <span class="str">"Are you sure?"</span>,
text: <span class="str">"You will not be able to recover this imaginary file!"</span>,
type: <span class="str">"warning"</span>,
showCancelButton: <span class="val">true</span>,
confirmButtonColor: <span class="str">"#DD6B55"</span>,
confirmButtonText: <span class="str">"Yes, delete it!"</span>,
cancelButtonText: <span class="str">"No, cancel plx!"</span>,
onConfirm:()=> {
                this.alertService.swal({
                    title: 'Deleted!',
                    text: 'Your imaginary file has been deleted.',
                    type: 'success'
                });
            },
onCancel:()=> {
                this.alertService.swal({
                    title: 'Cancelled',
                    text: 'Your imaginary file is safe :)',
                    type: 'error'
                });
            }
});</pre>
    </li>

    <li class="custom-icon">
        <div class="ui">
            <p>A message with a custom icon</p>
            <button (click)="customAlert()">Try me!</button>
        </div>
		<pre><span class="attr">this.alertService.swal</span>({
title: <span class="str">"Sweet!"</span>,
text: <span class="str">"Here's a custom image."</span>,
type: <span class="str">"custom"</span>,
imageUrl: <span class="str">"/thumbs-up.jpg"</span>
});</pre>
    </li>

    <li class="timer">
        <div class="ui">
            <p>A message with auto close timer</p>
            <button (click)="timerAlert()">Try me!</button>
        </div>
		<pre><span class="attr">this.alertService.swal</span>({
title: <span class="str">"Auto close alert!"</span>,
text: <span class="str">"I will close in 2 seconds."</span>,
timer: <span class="val">2000</span>,
showConfirmButton: <span class="val">false</span>
});</pre>
    </li>


    <li class="input">
        <div class="ui">
            <p>A replacement for the "prompt" function</p>
            <button (click)="inputAlert()">Try me!</button>
        </div>
		<pre><span class="attr">this.alertService.swal</span>({
title: <span class="str">"An input!"</span>,
text: <span class="str">"Write something interesting:"</span>,
type: <span class="str">"input"</span>,
showCancelButton: <span class="val">true</span>,
animation: <span class="str">"slide-from-top"</span>,
inputPlaceholder: <span class="str">"Write something"</span>
onConfirm:(value)=> {
                if (typeof value == 'string' && value.length > 0) {
                    this.alertService.swal({title: 'Nice!', text: 'You wrote: ' + value + '', type: 'success'});
                } else {
                    this.alertService.showInputError('You need to write something!');
                }
}
});</pre>
    </li>

    <li class="ajax">
        <div class="ui">
            <p>With a loader (for AJAX request for example)</p>
            <button (click)="ajaxAlert()">Try me!</button>
        </div>
		<pre><span class="attr">this.alertService.swal</span>({
title: <span class="str">"Ajax request example"</span>,
text: <span class="str">"Submit to run ajax request"</span>,
type: <span class="str">"info"</span>,
showCancelButton: <span class="val">true</span>,
onConfirm: ()=> {
<span class="func"><i>setTimeout</i></span>(()=> {this.alertService.<span class="attr">swal</span>({title: <span class="str">"Ajax request finished!"</span>});}, 3000);
}</pre>
    </li>
</ul>`,
    directives: [AlertComponent],
    providers: [AlertService]
})
export class AppComponent {

    constructor(private alertService:AlertService) {
    }

    basicAlert() {
        this.alertService.swal({title: 'Here\'s a message!'});
    }

    titleTextAlert() {
        this.alertService.swal({title: 'Here\'s a message!', text: 'It\'s pretty, isn\'t it?'});
    }

    titleTextTypeAlert() {
        this.alertService.swal({title: 'Good job!', text: 'You clicked the button!', type: 'success'});
    }

    confirmAlert() {
        this.alertService.swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            onConfirm: ()=> {
                this.alertService.swal({
                    title: 'Deleted!',
                    text: 'Your imaginary file has been deleted.',
                    type: 'success'
                });
            }
        });
    }

    confirmCancelAlert() {
        this.alertService.swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            onConfirm: ()=> {
                this.alertService.swal({
                    title: 'Deleted!',
                    text: 'Your imaginary file has been deleted.',
                    type: 'success'
                });
            },
            onCancel: ()=> {
                this.alertService.swal({
                    title: 'Cancelled',
                    text: 'Your imaginary file is safe :)',
                    type: 'error'
                });
            }
        });
    }

    customAlert() {
        this.alertService.swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            type: "custom",
            imageUrl: "/thumbs-up.jpg"
        });
    }

    timerAlert() {
        this.alertService.swal({
            title: 'Auto close alert!',
            text: 'I will close in 2 seconds.',
            timer: 2000,
            showConfirmButton: false
        });
    }

    inputAlert() {
        this.alertService.swal({
            title: "An input!",
            text: "Write something interesting:",
            type: "input",
            showCancelButton: true,
            animation: "slide-from-top",
            inputPlaceholder: "Write something",
            onConfirm: (value)=> {
                if (typeof value == 'string' && value.length > 0) {
                    this.alertService.swal({title: 'Nice!', text: 'You wrote: ' + value + '', type: 'success'});
                } else {
                    this.alertService.showInputError('You need to write something!');
                }
            }
        });
    }

    ajaxAlert() {
        this.alertService.swal({
            title: "Ajax request example",
            text: "Submit to run ajax request",
            type: "info",
            showCancelButton: true,
            showLoaderOnConfirm: true,
            onConfirm: ()=> {
                setTimeout(()=> {
                    this.alertService.swal({title: "Ajax request finished!"});
                }, 3000);
            }
        });
    }
}