import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse";
@Injectable({
    providedIn: 'root'
})
//Authorization service created for communicating with Firebase backend
export class AuthService{
    //URL specified by Firebase documentation for authorization services with REST
    baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    //Different endpoints depending on which button was clicked
    signUpendpoint:string = "signUp";
    loginEndpoint:string="signInWithPassword";
    public constructor(private http:HttpClient){

    }
    //Function called when sign up button is clicked.
    //Takes two strings (email and password) as parameters
    public signup(email:string, password: string){
        //Data to be sent to Firebase
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken": true
        };
        //Returns the data being sent to Firebase. Creates URL with base URL, endpoint, 
        // and firebase api key (found in environments)
        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signUpendpoint + '?' + 
                             'key='+ environment.firebase.apiKey,requestBody);

    }
    //Function called when login button is clicked
    //Takes two strings (email and password) as parameters
    public login(email:string, password:string){
        //Data to be sent to Firebase
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken": true
        };
        //Returns the data being sent to Firebase. Creates URL with base URL, endpoint, 
        // and firebase api key (found in environments)
        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.loginEndpoint + '?' + 
        'key='+ environment.firebase.apiKey,requestBody);

    }
}