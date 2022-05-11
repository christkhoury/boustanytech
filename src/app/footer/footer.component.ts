import { Component, OnInit } from '@angular/core';
import {ProductsSvc} from 'src/ProductsSvc'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  data = []

  constructor(private Things : ProductsSvc, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}