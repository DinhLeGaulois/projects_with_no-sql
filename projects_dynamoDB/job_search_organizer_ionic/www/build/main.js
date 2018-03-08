webpackJsonp([0],{

/***/ 152:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsPage = (function () {
    function SettingsPage(app) {
        this.app = app;
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */];
        this.accountPage = __WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */];
    }
    SettingsPage.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].signOut()
            .then(function () { return _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]); });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n      <button ion-item [navPush]="aboutPage">\n        About this app\n      </button>\n      <button ion-item [navPush]="accountPage">\n        Account\n      </button>\n      <button ion-item (click)="logout()">\n        <ion-label color="danger">Logout</ion-label>\n      </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserDetails */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirmSignUp_confirmSignUp__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var logger = new __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Logger"]('SignUp');
var UserDetails = (function () {
    function UserDetails() {
    }
    return UserDetails;
}());

var SignupPage = (function () {
    function SignupPage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userDetails = new UserDetails();
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var details = this.userDetails;
        this.error = null;
        logger.debug('register');
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].signUp(details.username, details.password, details.email, details.phone_number)
            .then(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__confirmSignUp_confirmSignUp__["a" /* ConfirmSignUpPage */], { username: details.username });
        })
            .catch(function (err) { _this.error = err; })
            .then(function () { return loading.dismiss(); });
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\signup\signup.html"*/'<ion-content>\n  <div text-center class="logo">\n    <img src="assets/ionic-aws-logo.png" />\n  </div>\n  <form (submit)="signup()">\n    <p *ngIf="error" style="text-align: center">{{error.message}}</p>\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="userDetails.username" autocorrect="off" autocapitalize="none" name="username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="userDetails.email" name="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Phone Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="userDetails.phone_number" name="phone_number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="userDetails.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>Register</button>\n      </div>\n\n      <div padding text-center>\n        <p><a (click)="login()">Return to login</a>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmSignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var logger = new __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Logger"]('ConfirmSignUp');
var ConfirmSignUpPage = (function () {
    function ConfirmSignUpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.username = navParams.get('username');
    }
    ConfirmSignUpPage.prototype.confirm = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].confirmSignUp(this.username, this.code)
            .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]); })
            .catch(function (err) { return logger.debug('confirm error', err); });
    };
    ConfirmSignUpPage.prototype.resendCode = function () {
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].resendSignUp(this.username)
            .then(function () { return logger.debug('sent'); })
            .catch(function (err) { return logger.debug('send code error', err); });
    };
    ConfirmSignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-signup',template:/*ion-inline-start:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\confirmSignUp\confirmSignUp.html"*/'<ion-content>\n  <div padding>\n    <p>Please enter the confirmation code sent to your email to verify your account:</p>\n  </div>\n  <form (submit)="confirm()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Confirmation Code</ion-label>\n        <ion-input type="text" [(ngModel)]="code" name="code"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>Confirm Account</button>\n      </div>\n\n      <div padding>\n        <p>Haven\'t received the confirmation code email yet? <a (click)="resendCode()">Resend</a></p>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>  \n'/*ion-inline-end:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\confirmSignUp\confirmSignUp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ConfirmSignUpPage);
    return ConfirmSignUpPage;
}());

//# sourceMappingURL=confirmSignUp.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmSignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var logger = new __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Logger"]('ConfirmSignIn');
var ConfirmSignInPage = (function () {
    function ConfirmSignInPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = navParams.get('user');
    }
    ConfirmSignInPage.prototype.confirm = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].confirmSignIn(this.user, this.code)
            .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]); })
            .catch(function (err) { return logger.debug('confirm error', err); });
    };
    ConfirmSignInPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ConfirmSignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-signin',template:/*ion-inline-start:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\confirmSignIn\confirmSignIn.html"*/'<ion-content>\n  <div padding>\n    <p>Please enter the confirmation code sent to your email to verify your account:</p>\n  </div>\n  <form (submit)="confirm()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Confirmation Code</ion-label>\n        <ion-input type="text" [(ngModel)]="code" name="code"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>Confirm Login</button>\n      </div>\n\n      <div padding text-center>\n        <p><a (click)="login()">Return to login</a>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>  \n'/*ion-inline-end:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\confirmSignIn\confirmSignIn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ConfirmSignInPage);
    return ConfirmSignInPage;
}());

//# sourceMappingURL=confirmSignIn.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPage = (function () {
    function AboutPage() {
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  This is a starter project that leverages AWS Mobile Hub services to power the app. The\n  following services are utilized:\n\n  <ul>\n    <li>Cognito (Authentication)</li>\n    <li>DynamoDB (Data Storage)</li>\n    <li>S3 (File Storage)</li>\n  </ul>\n\n</ion-content>\n'/*ion-inline-end:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var logger = new __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Logger"]('Account');
var AccountPage = (function () {
    function AccountPage(navCtrl, camera, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.attributes = [];
        this.avatarPhoto = null;
        this.selectedPhoto = null;
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].currentUserInfo()
            .then(function (info) {
            _this.userId = info.id;
            _this.username = info.username;
            _this.attributes = [];
            if (info['email']) {
                _this.attributes.push({ name: 'email', value: info['email'] });
            }
            if (info['phone_number']) {
                _this.attributes.push({ name: 'phone_number', value: info['phone_number'] });
            }
            _this.refreshAvatar();
        });
    }
    AccountPage.prototype.refreshAvatar = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Storage"].get(this.userId + '/avatar')
            .then(function (url) { return _this.avatarPhoto = url; });
    };
    AccountPage.prototype.dataURItoBlob = function (dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    AccountPage.prototype.selectAvatar = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 200,
            targetWidth: 200,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.selectedPhoto = _this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
            _this.upload();
        }, function (err) {
            _this.avatarInput.nativeElement.click();
            // Handle error
        });
    };
    AccountPage.prototype.uploadFromFile = function (event) {
        var _this = this;
        var files = event.target.files;
        logger.debug('Uploading', files);
        var file = files[0];
        var type = file.type;
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Storage"].put(this.userId + '/avatar', file, { contentType: type })
            .then(function () { return _this.refreshAvatar(); })
            .catch(function (err) { return logger.error(err); });
    };
    AccountPage.prototype.upload = function () {
        var _this = this;
        if (this.selectedPhoto) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Uploading image...'
            });
            loading_1.present();
            __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Storage"].put(this.userId + '/avatar', this.selectedPhoto, { contentType: 'image/jpeg' })
                .then(function () {
                _this.refreshAvatar();
                loading_1.dismiss();
            })
                .catch(function (err) {
                logger.error(err);
                loading_1.dismiss();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('avatar'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "avatarInput", void 0);
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\account\account.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Account\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div padding text-center>\n    <div *ngIf="avatarPhoto" class="avatar" [style.background-image]="\'url(\'+ avatarPhoto +\')\'">\n    </div>\n\n    <button ion-button clear (click)="selectAvatar()">Change photo</button>\n\n    <input #avatar class="avatar-input" type="file" (change)="uploadFromFile($event)" />\n  </div>\n\n  <div>\n    <ion-list>\n      <ion-item>\n        <strong>username</strong> {{ username }}\n      </ion-item>\n      <ion-item *ngFor="let attr of attributes">\n        <strong>{{ attr.getName() }}</strong> {{ attr.getValue() }}\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_create_tasks_create__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(613);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var aws_exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../aws-exports\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).default;

var logger = new __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Logger"]('Tasks');
var TasksPage = (function () {
    function TasksPage(navCtrl, modalCtrl, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.taskTable = aws_exports.aws_resource_name_prefix + '-tasks';
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].currentCredentials()
            .then(function (credentials) {
            _this.userId = credentials.identityId;
            _this.refreshTasks();
        })
            .catch(function (err) { return logger.debug('get current credentials err', err); });
    }
    TasksPage.prototype.refreshData = function (refresher) {
        this.refresher = refresher;
        this.refreshTasks();
    };
    TasksPage.prototype.refreshTasks = function () {
        var _this = this;
        var params = {
            'TableName': this.taskTable,
            'IndexName': 'DateSorted',
            'KeyConditionExpression': "#userId = :userId",
            'ExpressionAttributeNames': { '#userId': 'userId' },
            'ExpressionAttributeValues': { ':userId': this.userId },
            'ScanIndexForward': false
        };
        this.db.getDocumentClient()
            .then(function (client) { return client.query(params).promise(); })
            .then(function (data) { _this.items = data.Items; })
            .catch(function (err) { return logger.debug('error in refresh tasks', err); })
            .then(function () { _this.refresher && _this.refresher.complete(); });
    };
    TasksPage.prototype.generateId = function () {
        var len = 16;
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charLength = chars.length;
        var result = "";
        var randoms = window.crypto.getRandomValues(new Uint32Array(len));
        for (var i = 0; i < len; i++) {
            result += chars[randoms[i] % charLength];
        }
        return result.toLowerCase();
    };
    TasksPage.prototype.addTask = function () {
        var _this = this;
        var id = this.generateId();
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__tasks_create_tasks_create__["a" /* TasksCreatePage */], { 'id': id });
        addModal.onDidDismiss(function (item) {
            if (!item) {
                return;
            }
            item.userId = _this.userId;
            item.created = (new Date().getTime() / 1000);
            var params = {
                'TableName': _this.taskTable,
                'Item': item,
                'ConditionExpression': 'attribute_not_exists(id)'
            };
            _this.db.getDocumentClient()
                .then(function (client) { return client.put(params).promise(); })
                .then(function (data) { return _this.refreshTasks(); })
                .catch(function (err) { return logger.debug('add task error', err); });
        });
        addModal.present();
    };
    TasksPage.prototype.deleteTask = function (task, index) {
        var _this = this;
        var params = {
            'TableName': this.taskTable,
            'Key': {
                'userId': this.userId,
                'taskId': task.taskId
            }
        };
        this.db.getDocumentClient()
            .then(function (client) { return client.delete(params).promise(); })
            .then(function (data) { return _this.items.splice(index, 1); })
            .catch(function (err) { return logger.debug('delete task error', err); });
    };
    TasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tasks',template:/*ion-inline-start:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\tasks\tasks.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Tasks \n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addTask()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="refreshData($event)">\n    <ion-refresher-content\n                  pullingIcon="arrow-dropdown"\n                  pullingText="Pull to refresh"\n                  refreshingSpinner="circles"\n                  refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n    <ion-list>\n      <ion-item-sliding *ngFor="let item of items; let idx = index;">\n        <button ion-item>\n          <h2>{{item.category}}</h2>\n          <p>{{item.description}}</p>\n        </button>\n\n        <ion-item-options>\n          <button ion-button color="danger" (click)="deleteTask(item, idx)">DELETE</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\tasks\tasks.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* DynamoDB */]])
    ], TasksPage);
    return TasksPage;
}());

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksCreatePage = (function () {
    function TasksCreatePage(navCtrl, navParams, viewCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.isAndroid = platform.is('android');
        this.item = {
            'taskId': navParams.get('id'),
            'category': 'Todo'
        };
        this.isReadyToSave = true;
    }
    TasksCreatePage.prototype.ionViewDidLoad = function () {
    };
    TasksCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    TasksCreatePage.prototype.done = function () {
        this.viewCtrl.dismiss(this.item);
    };
    TasksCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tasks-create',template:/*ion-inline-start:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\tasks-create\tasks-create.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>New Task</ion-title>\n    <ion-buttons end>\n      <button ion-button [attr.icon-only]="!isAndroid ? null : \'\'" (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          Cancel\n        </span>\n        <ion-icon name="md-close" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Category</ion-label>\n      <ion-select [(ngModel)]="item.category" name="category">\n        <ion-option value="todo" selected="true">Todo</ion-option>\n        <ion-option value="errand">Errand</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class="custom-item">\n      <ion-label>Task Description</ion-label>\n      <ion-textarea rows="5" [(ngModel)]="item.description" name="description"></ion-textarea>\n    </ion-item>\n\n    <div padding>\n      <button block icon-start ion-button color="primary" (click)="done()"><ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>Create task</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\tasks-create\tasks-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], TasksCreatePage);
    return TasksCreatePage;
}());

//# sourceMappingURL=tasks-create.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamoDB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_amplify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_sdk__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var aws_exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../aws-exports\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).default;
__WEBPACK_IMPORTED_MODULE_2_aws_sdk___default.a.config.region = aws_exports.aws_project_region;
__WEBPACK_IMPORTED_MODULE_2_aws_sdk___default.a.config.update({ customUserAgent: 'ionic-starter' });
var logger = new __WEBPACK_IMPORTED_MODULE_1_aws_amplify__["Logger"]('DynamoDB');
var DynamoDB = (function () {
    function DynamoDB() {
    }
    DynamoDB.prototype.getDocumentClient = function () {
        return __WEBPACK_IMPORTED_MODULE_1_aws_amplify__["Auth"].currentCredentials()
            .then(function (credentials) { return new __WEBPACK_IMPORTED_MODULE_2_aws_sdk___default.a.DynamoDB.DocumentClient({ credentials: credentials }); })
            .catch(function (err) { return logger.debug('error getting document client', err); });
    };
    DynamoDB = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DynamoDB);
    return DynamoDB;
}());

//# sourceMappingURL=aws.dynamodb.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_confirmSignIn_confirmSignIn__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_confirmSignUp_confirmSignUp__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_account__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tasks_tasks__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tasks_create_tasks_create__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_aws_dynamodb__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_aws_amplify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_aws_amplify__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var aws_exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../aws-exports\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).default;
__WEBPACK_IMPORTED_MODULE_18_aws_amplify___default.a.configure(aws_exports);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_confirmSignIn_confirmSignIn__["a" /* ConfirmSignInPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_confirmSignUp_confirmSignUp__["a" /* ConfirmSignUpPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tasks_create_tasks_create__["a" /* TasksCreatePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_confirmSignIn_confirmSignIn__["a" /* ConfirmSignInPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_confirmSignUp_confirmSignUp__["a" /* ConfirmSignUpPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tasks_create_tasks_create__["a" /* TasksCreatePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_17__providers_aws_dynamodb__["a" /* DynamoDB */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

AWS.config.customUserAgent = AWS.config.customUserAgent + ' Ionic';
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aws_amplify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = null;
        var globalActions = function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        };
        platform.ready()
            .then(function () {
            __WEBPACK_IMPORTED_MODULE_4_aws_amplify__["Auth"].currentAuthenticatedUser()
                .then(function () { _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]; })
                .catch(function () { _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]; })
                .then(function () { return globalActions(); });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LoginDetails */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirmSignIn_confirmSignIn__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var logger = new __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Logger"]('Login');
var LoginDetails = (function () {
    function LoginDetails() {
    }
    return LoginDetails;
}());

var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loginDetails = new LoginDetails();
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var details = this.loginDetails;
        logger.info('login..');
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].signIn(details.username, details.password)
            .then(function (user) {
            logger.debug('signed in user', user);
            if (user.challengeName === 'SMS_MFA') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__confirmSignIn_confirmSignIn__["a" /* ConfirmSignInPage */], { 'user': user });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
        })
            .catch(function (err) { return logger.debug('errrror', err); })
            .then(function () { return loading.dismiss(); });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\login\login.html"*/'<ion-content>\n  <div text-center class="logo">\n    <img src="assets/ionic-aws-logo.png" />\n  </div>\n  <form (submit)="login()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input [(ngModel)]="loginDetails.username" type="text" autocorrect="off" autocapitalize="none" name="username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input [(ngModel)]="loginDetails.password" type="password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>LOGIN</button>\n      </div>\n\n      <div padding text-center>\n        <p>Don\'t have an account yet? <a (click)="signup()">Create one.</a></p>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aws_dynamodb__ = __webpack_require__(322);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__aws_dynamodb__["a"]; });


//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_tasks__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__tasks_tasks__["a" /* TasksPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Tasks" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Settings" tabIcon="cog"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\_SaveFrom128GB\HW-UCF_BootCamp-Master_2\projects_with_no_sql\projects_dynamoDB\ionic\job_search_organizer_ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[325]);
//# sourceMappingURL=main.js.map