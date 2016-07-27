// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {nsProvideRouter} from 'nativescript-angular/router';
import {RouterConfig} from '@angular/router';
import {AppComponent} from "./app.component";
import {DetoxComponent} from './components/detox/detox.component';

export const AppRoutes: RouterConfig = [
{ path: "", component: DetoxComponent }
]
console.log("Hello Quotox");
nativeScriptBootstrap(AppComponent, [[nsProvideRouter(AppRoutes,{})]], { startPageActionBarHidden: false });
