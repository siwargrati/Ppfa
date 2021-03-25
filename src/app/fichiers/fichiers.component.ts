import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Fichiers } from "../fichiers";
import { FichiersService } from "../fichiers.service";


@Component({
  selector: "app-fichiers",
  templateUrl: "./fichiers.component.html",
  styleUrls: ["./fichiers.component.css"]
})
export class FichiersComponent implements OnInit {
  title='app'
  reactiveForm:any=FormGroup
  public File :any=File
  //fichiers: Fichiers[] = [];

  constructor(private fichiersService: FichiersService) {}
  onSelectFile(event: any){
    const file = event.target.files[0]
    this.File=File;
  }
  saveForm(submitForm:FormGroup){
    if (submitForm.valid){
      const formData=new FormData();
      formData.append('file',this.File);
      this.fichiersService.saveFile(formData).subscribe((Response)=>{
          console.log(Response);
      });
    }
    else {
      this.validateFormFildes(submitForm);
    }
  }
  validateFormFildes(submitForm: FormGroup) {
    throw new Error("Method not implemented.");
  }
  ngOnInit(): void {
   /* this.fichiersService.getFichiers().subscribe((data:Fichiers[])=>
      {console.log(data);
        this.fichiers=data;

        
    })*/
  }
 

}