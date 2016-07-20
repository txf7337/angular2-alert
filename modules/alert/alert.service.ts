import {Injectable, Output, EventEmitter} from '@angular/core';

@Injectable()
export class AlertService {
    @Output()
    sweetAlertEventEmitter:EventEmitter<any>;
    @Output()
    closeAlertEventEmitter:EventEmitter<any>;
    @Output()
    showInputErrorEventEmitter:EventEmitter<any>;

    constructor() {
        this.sweetAlertEventEmitter = new EventEmitter<any>();
        this.closeAlertEventEmitter = new EventEmitter();
        this.showInputErrorEventEmitter = new EventEmitter<string>();
    }

    swal(sweetalert:any) {
        this.sweetAlertEventEmitter.emit(sweetalert);
    }

    closeAlert() {
        this.closeAlertEventEmitter.emit();
    }

    showInputError(message:string) {
        this.showInputErrorEventEmitter.emit(message);
    }
}