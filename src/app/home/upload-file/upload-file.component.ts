
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  selectedFile: ImageSnippet | any;
  imageInputctrl: any;
  responsemsg = ""
  @Input()
  propertyid: number = 0;

  @Output()
  photoLoader = new EventEmitter<any>();

  constructor(private photoservice: PhotoService)
  {

  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    this.responsemsg = ""
    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log(this.selectedFile.src)
    });

    reader.readAsDataURL(file);
  }

  uploadSelectedPhoto()
  {
    if(this.propertyid>0) {
    this.photoservice.uploadPhoto(this.selectedFile.src,this.propertyid).subscribe((res:any) => {
      console.log(res);
      this.responsemsg = res.msg;
      this.selectedFile = undefined
      this.imageInputctrl = undefined
      this.photoLoader.emit();
    });
  }

}
}
