// src/app/features/auth/components/register/register.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { UserType, OrganizerType } from '../../../../shared/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    userType: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    consentForm: new FormControl('', [Validators.required])
  });
  
  selectedUserType: UserType;
  userTypes = UserType;
  organizerTypes = Object.values(OrganizerType);
  showOrganizerField = false;
  showConsentUpload = false;
  isLoading = false;
  errorMessage = '';
  minAgeError = false;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Get the user type from localStorage (set in the user-type-selection component)
    const storedUserType = localStorage.getItem('selectedUserType') as UserType;
    this.selectedUserType = storedUserType || UserType.PARENT;
    
    // Remove from localStorage after getting it
    localStorage.removeItem('selectedUserType');
  }

  ngOnInit(): void {
    this.showOrganizerField = this.selectedUserType === UserType.CAMP_ORGANIZER;
    this.showConsentUpload = this.selectedUserType === UserType.CHILD;
    
    this.initForm();
  }

  initForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      userType: [this.selectedUserType, Validators.required],
      organizerType: [this.selectedUserType === UserType.CAMP_ORGANIZER ? OrganizerType.CAMP_ANIMATOR : null],
      consentForm: [null]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup): { passwordMismatch: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      // maybe patchValue
      // this.registerForm.get('consentForm')?.setValue(input.files[0]);
    }
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
  
    // Kinyerjük az összes értéket biztosan
    const formData = this.registerForm.getRawValue();
  
    // Age validation
    const birthDateString = formData.birthDate;
    if (!birthDateString) {
      this.minAgeError = true;
      console.error("Túl fiatal vagy a regisztrációhoz!");
    }
    const birthDate = new Date();
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    // Check age requirements based on user type
    const userType = formData.userType;
    if ((userType === UserType.PARENT || 
         userType === UserType.PEDAGOGUE || 
         userType === UserType.CAMP_ORGANIZER || 
         userType === UserType.ADMIN) && age < 18) {
      this.minAgeError = true;
      return;
    }
  
    this.isLoading = true;
    this.errorMessage = '';
  
    // File feltöltés kezelése
    if (this.selectedUserType === UserType.CHILD && formData.consentForm) {
      this.uploadConsentFormAndRegister(formData);
    } else {
      this.register(formData);
    }
  }
  

  uploadConsentFormAndRegister(formData: any): void {
    const file = formData.consentForm;
    delete formData.consentForm;

    this.authService.uploadParentConsentForm(file).subscribe({
      next: (fileUrl) => {
        formData.parentConsentForm = fileUrl;
        this.register(formData);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = `Hiba a szülői beleegyező nyilatkozat feltöltésekor: ${error.message}`;
      }
    });
  }

  register(formData: any): void {
    this.authService.register(formData).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/auth/user-type-selection']);
  }
}