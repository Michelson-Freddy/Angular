import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../activite.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {

  constructor(private actService:ActiviteService) { }
  activite;
  ngOnInit() {
    this.actService.getAllActivity()
      .subscribe(data=>{
        this.activite=data;
      },err=>{
        console.log(err);
      })
  }

}
