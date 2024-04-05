import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class showMessage {
    constructor(private snackbar: MatSnackBar) { }

    showMessage(message: string, close: string = 'X', isError: boolean = false, duration: number = 5000, verticalPosition: MatSnackBarVerticalPosition = 'top', horizontalPosition: MatSnackBarHorizontalPosition = 'center'){
        this.snackbar.open(message, close, {
            duration: duration,
            verticalPosition: verticalPosition,
            horizontalPosition: horizontalPosition,
            panelClass: !isError ? ['msg-success'] : ['msg-error']
        });
    }
}