import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}

const wrapper = document.querySelector('.wrapper') as HTMLElement | null;
const loginLink = document.querySelector('.login-link') as HTMLElement | null;
const registerLink = document.querySelector('.register-link') as HTMLElement | null;

if (registerLink) {
  registerLink.addEventListener('click', () => {
    if (wrapper) {
      wrapper.classList.add('active');
    }
  });
}

if (loginLink) {
  loginLink.addEventListener('click', () => {
    if (wrapper) {
      wrapper.classList.add('activate');
    }
  });
}
