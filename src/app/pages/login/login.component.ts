import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultLoginLayoutComponent } from 'src/app/components/default-login-layout/default-login-layout.component';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  // snackMsgSuccess = snackMsgSuccess();


  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit(){
    // this.snackMsgSuccess('Success','Test');
 }


submit(){
  this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
    next: () => this.toastr.success("Login feito com sucesso!"),
      error: () => this.toastr.error("Erro inesperado! Tente novamente mais tarde")
  });
}

navigate(){
 this.router.navigate(["/signup"]);
}

}


// export const snackMsgSuccess = () => {
//   const toaster = inject(ToastrService);
//   return (msg: string,title?: string)=>{
//     toaster.success(msg, title, {
//       easeTime: 1000
//     });
//   }
// };