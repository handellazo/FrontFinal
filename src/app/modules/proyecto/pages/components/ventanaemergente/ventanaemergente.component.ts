import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormProyectoComponent } from '../form-proyecto/form-proyecto.component';

@Component({
  selector: 'app-ventanaemergente',
  templateUrl: './ventanaemergente.component.html',
  styleUrls: ['./ventanaemergente.component.css']
})
export class VentanaemergenteComponent implements OnInit {
  myForm: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      items: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addItem(); // Agregar un campo al cargar la ventana
  }

  openPopup() {
    const dialogRef = this.dialog.open(FormProyectoComponent);

    dialogRef.afterClosed().subscribe(() => {
      // Aquí puedes realizar acciones después de que se cierra la ventana emergente
    });
  }
  
  get items(): FormArray {
    return this.myForm.get('items') as FormArray;
  }

  addItem() {
    this.items.push(
      this.fb.group({
        curso: '',
        docente: '',
      })
    );
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit() {
    // Procesa los datos del formulario, como guardarlos o enviarlos a través de una API.
    const formData = this.myForm.value;
    console.log(formData);
  }
}
