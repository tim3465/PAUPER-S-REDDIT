import { Component, Input } from '@angular/core';
import { Child, ChildData } from 'src/app/models/post-models';

@Component({
  selector: 'app-child-result',
  templateUrl: './child-result.component.html',
  styleUrls: ['./child-result.component.css']
})
export class ChildResultComponent {
  @Input() DisplayPost:Child={} as Child;
}
