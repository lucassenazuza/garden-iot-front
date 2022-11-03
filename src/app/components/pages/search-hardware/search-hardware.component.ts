import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-hardware',
  templateUrl: './search-hardware.component.html',
  styleUrls: ['./search-hardware.component.scss']
})
export class SearchHardwareComponent implements OnInit {

  momentForm !: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void{

  }
}
