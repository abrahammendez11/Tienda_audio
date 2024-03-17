import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent {
  @ViewChild('guiaElement') guiaElementRef: any;

  
  copiarGuia() {
    // Obtener el texto de la guía de envío
    const guiaText = this.guiaElementRef.nativeElement.innerText;
    
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(guiaText).then(() => {
      // Manejar el éxito de la copia
      alert('¡La guía de envío se ha copiado al portapapeles!');
    }).catch((error) => {
      // Manejar cualquier error de copia
      console.error('Error al copiar la guía de envío:', error);
      alert('Error al copiar la guía de envío. Por favor, inténtalo de nuevo.');
    });
  }
}
