// features/registration/components/registration-form/registration-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CampService } from '../../../features/camps/services/camp.service';
import { AuthService } from '../../../core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  campId: string;
  camp$: Observable<Camp>;

  constructor(
    private fb: FormBuilder,
    private campService: CampService,
    private registrationService: RegistrationService,
    private route: ActivatedRoute,
    public auth: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.campId = this.route.snapshot.paramMap.get('id');
    this.camp$ = this.campService.getCampById(this.campId);
    
    this.registrationForm = this.fb.group({
      children: this.fb.array([]),
      consentFormUrl: [''],
      adults: [0, [Validators.min(0)]]
    });

    if (this.auth.userData.role === 'parent') {
      this.addChild();
    }
  }

  get children() {
    return this.registrationForm.get('children') as FormArray;
  }

  addChild() {
    this.children.push(this.fb.group({
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      medicalInfo: ['']
    }));
  }

  removeChild(index: number) {
    this.children.removeAt(index);
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const registrationData = {
        campId: this.campId,
        userId: this.auth.userData.id,
        ...this.registrationForm.value,
        status: 'pending'
      };

      this.registrationService.registerForCamp(registrationData).then(() => {
        this.toastr.success('Sikeres jelentkezés!');
      }).catch(error => {
        this.toastr.error('Hiba történt a jelentkezés során!');
      });
    }
  }
}