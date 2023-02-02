import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Expansion panel as accordion
 */
@Component({
  selector: 'expansion-steps-example',
  templateUrl: 'expansion-steps-example.html',
  styleUrls: ['expansion-steps-example.css'],
})
export class ExpansionStepsExample {
  locationControl = new FormControl();
  locationList: string[] = ['Add a Public Location', 'Add Private Location', 'Multi-Location'];
  keywordControl = new FormControl();
  keywordList: string[] = ['Bike', 'Skates', 'Computer'];
  requirementControl = new FormControl();
  requirementsList: string[] = ['No Requirements', 'ID', 'Insurance', 'Background Check', 'Other'];
  value = 'My Awesome Title';
  step = 0;
  selectedshare = 'Stay';

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  onFileComplete(data: any) {
    console.log(data); 
  }
  
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */