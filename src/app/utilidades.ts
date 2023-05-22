import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
@Injectable({ providedIn: "root" })
export class Utilidades{
  constructor(private alertaSnackBar: MatSnackBar) {}

  lanzarAlerta(msg: string) {
    this.alertaSnackBar.open(msg, undefined, {
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
