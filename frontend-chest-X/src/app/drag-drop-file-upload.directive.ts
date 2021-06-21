import { Directive, HostBinding, HostListener, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDragDropFileUpload]',
})
export class DragDropFileUploadDirective {
  constructor() {}

  @Output() fileDropped = new EventEmitter();

  @HostBinding('style.background-color') private background = '#fff';

  // DragOver Event
  @HostListener('dragover', ['$event']) dragOver(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#e2eefd';
  }
  // DragLeave Event
  @HostListener('dragleave', ['$event']) public dragLeave(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#fff';
  }

  // Drop Eevent
  @HostListener('drop', ['$event']) drop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#fff';
    const file = event.dataTransfer.files;
    if (file.length > 0) {
      this.fileDropped.emit(file);
    }
  }
}
