// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {nsProvideRouter} from 'nativescript-angular/router';
import {RouterConfig} from '@angular/router';
import {AppComponent} from "./app.component";
import {DetoxComponent} from './components/detox/detox.component';
import {HomeScreenComponent} from './components/home-screen/home-screen.component';
export const AppRoutes: RouterConfig = [
{ path: "detox", component: DetoxComponent },
{ path:"", component: HomeScreenComponent}
]

nativeScriptBootstrap(AppComponent, [[nsProvideRouter(AppRoutes,{})]], { startPageActionBarHidden: false });
