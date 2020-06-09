import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oe-photoExpense',
  templateUrl: './photoExpense.component.html',
  styleUrls: ['./photoExpense.component.scss']
})
export class PhotoExpenseComponent implements OnInit {

  file: any;

  constructor() { }

  ngOnInit(): void {
  }

  public picked(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      const file: File = fileList[0];
      this.file = file;
      this.handleInputChange(file);
    } else {
      alert("No file selected")
    }
  }

  handleInputChange(files) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    this.file = base64result;

    this.log();

  }

  log() {
    console.log(this.file);
  }


  

 


}
